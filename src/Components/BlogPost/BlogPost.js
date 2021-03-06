import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const BlogPost = () => {
    const [imageURL , setImageURL] = useState(null)

    const { register, handleSubmit,formState: { errors } } = useForm();
    
    const onSubmit = data => {
    const blogData = {
      name: data.name,
      description: data.description,
      image: imageURL,
      time: new Date(),
    };
    console.log( blogData)

    const url = `https://morning-meadow-74142.herokuapp.com/post`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(blogData),
    }).then((res) => res.json().then((data) =>{
      alert("Post Success")
    })
    )
   
  }


  const handelImageSubmit = event => {
    console.log(event.target.files[0]);

    const imageData = new FormData();
    imageData.set("key", "eaeada892240c3e78235aac2d3a8e400");
    imageData.append("image", event.target.files[0]);

  axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response.data.data.display_url)

        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

 
    return (
        <div className="p-3">
           
            <form onSubmit={handleSubmit(onSubmit)} className="bg-light shadow p-5 border">
            <h1>Post Here</h1>

            <input type="text" className="form-control m-2" placeholder="Title" {...register("name")} required />
       
           
            <textarea className="form-control m-2" placeholder="Description" {...register("description", { required: true })} required > Description </textarea>
            {errors.description && <span className="text-danger">This field is required</span>}
          

            <input onChange={handelImageSubmit} className="form-control m-2" type="file" name="file" placeholder="file" required/>
          
            
            <input className="btn btn-primary" type="submit"  />
            </form>

        </div>
    );
};

export default BlogPost;