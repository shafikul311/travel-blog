import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import NavBar from '../NabBar/NavBar';
import './Register.css'

const Register = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
      const customData = {
        name: data.name,
        email: data.email,
        password: data.password
      };
      console.log(customData);

      const url = `https://morning-meadow-74142.herokuapp.com/users`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(customData),
    }).then((res) => res.json()
    ).then((data) => {
      alert("Registerd success")
    })

    } 
    return (

        <>
           <NavBar />
           <div className="justified-content-center text-center pt-5">
          <form onSubmit={handleSubmit(onSubmit)} className="form-container container">
            <h1 className="border-bottom pb-5">Register Now</h1>

          <input className="form-control" type="text" {...register("name", { required: true, maxLength: 20 })} required placeholder="Name" />
          <br />
          <input className="form-control" type="email" {...register("email", { required: true })} required placeholder="Email" />
          {errors.email && <span>This field is required</span>}
          <br />
          <input className="form-control" type="password" {...register("password", { required: true })} required placeholder="Password" />
          {errors.password && <span>This field is required</span>}
          <br />
          <input type="submit" className="btn btn-primary" />
          </form>
          <p>already have an account <Link to="/login">Login now</Link> </p>
          </div>
        
        </>
      
            
         
    );
};

export default Register;