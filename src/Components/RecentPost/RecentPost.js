import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./RecentPost.css";
import RecentPostDetails from "./RecentPostDetails";
import Spinner from "react-bootstrap/Spinner";

const RecentPost = () => {
  const [postsBlog, setPostsBlog] = useState([]);

 
  useEffect(() => {
    const url = `https://morning-meadow-74142.herokuapp.com/post`;
      fetch(url)
      .then((res) => res.json())
      .then((data) => setPostsBlog(data));
      
    }, []);
    


  return (
    <div className="container pt-5 pb-5 recent__post">
      <h1>RECENT POST</h1>

      <div>
          {

              postsBlog.length === 0 && (
              <div className="text-center">
                Loading
                <div className="spinner-grow text-danger" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
          )}

        {postsBlog?.map((posts) => (
          <RecentPostDetails key={posts._id} posts={posts}></RecentPostDetails>
        ))}
      </div>
    </div>
  );
};

export default RecentPost;
