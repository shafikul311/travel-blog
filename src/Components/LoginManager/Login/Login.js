import { Link, useHistory, useLocation } from "react-router-dom";
import "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../../../App";
import { useForm } from "react-hook-form";
import NavBar from "../../NabBar/NavBar";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const customData = {
      email: data.email,
      password: data.password,
    };

    const url = `https://morning-meadow-74142.herokuapp.com/login`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(customData),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoggedInUser(data);
        history.push(from);
      });
  };
  // console.log(loggedInUser);

  return (
    <div className="text-center">
      <NavBar />
      <div className=" d-flex justify-content-center text-center pt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-container container "
        >
          <h1 className="pb-5 pt-5 border-bottom">Login Now</h1>
          <h3> Test Email use IT : test@test.com </h3>
          <h2> Test password use IT : #2021dev</h2>

          <input
            className="form-control "
            type="email"
            {...register("email", { required: true })}
            required
            placeholder="test@test.com"
          />
          {errors.email && <span>This field is required</span>}
          <br />
          <input
            className="form-control "
            type="password"
            {...register("password", { required: true })}
            required
            placeholder="#2021dev"
          />
          {errors.password && <span>This field is required</span>}
          <br />
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
      <p>
        Don't have an account? <Link to="register">register here</Link>{" "}
      </p>
    </div>
  );
};

export default Login;
