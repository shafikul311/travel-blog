import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';

const SingleBlogDetalis = () => {

    const { _id } = useParams();

    const [postsBlog, setPostsBlog] = useState([])

    useEffect(() => {
       const url = `http://localhost:3080/post/${_id}`
       fetch(url)
       .then(res =>res.json())
       .then(data => setPostsBlog(data))
   },[_id])
    console.log(postsBlog)

    return (
        <div>
            <h1>hello</h1>
            <Footer></Footer>
        </div>
    );
};

export default SingleBlogDetalis;