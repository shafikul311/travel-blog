import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './RecentPost.css'
import RecentPostDetails from './RecentPostDetails';


const RecentPost = () => {
    const [postsBlog, setPostsBlog] = useState([])

    useEffect(() => {
       const url = `http://localhost:3080/post`
       fetch(url)
       .then(res =>res.json())
       .then(data => setPostsBlog(data))
   },[])
    // console.log(postsBlog)


    return (
        <div className="container pt-5 pb-5 recent__post">
            <h1>RECENT POST</h1>
            <div>
                {
                    postsBlog?.map(posts => <RecentPostDetails key={posts._id} posts={posts}></RecentPostDetails>)

                }
           
            </div>

            
        </div>
    );
};

export default RecentPost;