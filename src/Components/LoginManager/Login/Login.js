import { Link, useHistory, useLocation } from "react-router-dom";
import "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../../../App";
import { useForm } from "react-hook-form";

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
   

    const url = `http://localhost:3080/login`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(customData),
    }).then((res) => res.json()).then((data) =>{
      setLoggedInUser(data)
      history.push(from)
    })
  };
  console.log(loggedInUser)

  return (
    <div className="text-center">
      <div className=" d-flex justify-content-center text-center pt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control"
            type="email"
            {...register("email", { required: true })}
            required
            placeholder="email"
          />
          {errors.email && <span>This field is required</span>}
          <br />
          <input
            className="form-control"
            type="password"
            {...register("password", { required: true })}
            required
            placeholder="Password"
          />
          {errors.password && <span>This field is required</span>}
          <br />
          <input type="submit" />
        </form>
      </div>
      <p>
        Don't have an account? <Link to="register">register here</Link>{" "}
      </p>
    </div>
  );
};

export default Login;
