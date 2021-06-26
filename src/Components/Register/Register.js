import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
      const customData = {
        name: data.name,
        email: data.email,
        password: data.password
      };
      console.log(customData);

      const url = `http://localhost:3080/users`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(customData),
    }).then((res) => res.json()
    );

    } 
    return (
      
            
          <div className="justified-content-center text-center pt-5">

        <form onSubmit={handleSubmit(onSubmit)}>

        <input className="form-control w-50" type="text" {...register("name", { required: true, maxLength: 20 })} required placeholder="Name" />
        <br />
        <input className="form-control w-50" type="email" {...register("email", { required: true })} required placeholder="email" />
        {errors.email && <span>This field is required</span>}
        <br />
        <input className="form-control w-50" type="password" {...register("password", { required: true })} required placeholder="Password" />
        {errors.password && <span>This field is required</span>}
        <br />
        <input type="submit" />
        </form>
        <p>already have an account <Link to="/login">Login now</Link> </p>
        </div>
    );
};

export default Register;