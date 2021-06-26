import React from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../../SideBar/SideBar';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const emailData = { 
            email:data.email
        }
        console.log(data.email)
        const url = `http://localhost:3080/admin`;
        fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(emailData),
        }).then((res) => res.json());
    }


    return (
        <>
        <div className="d-flex admin__container">
            <div className="col-md-4">
                <SideBar/>
            </div>
            <div className="col-md-8">
                <h1>Make A New Admin</h1>

                <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <input placeholder="Email" className="form-control w-50" {...register("email", { required: true })} />
                   {errors.email && <span className="text-danger">This field is required</span>}
                    <br/>
                    <input className="btn-brand" type="submit" />
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default MakeAdmin;