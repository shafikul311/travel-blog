import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./RecentPost.css";
import RecentPostDetails from "./RecentPostDetails";
import Spinner from "react-bootstrap/Spinner";

const RecentPost = () => {
  const [postsBlog, setPostsBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `https://morning-meadow-74142.herokuapp.com/post`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPostsBlog(data));
    setIsLoading(false);
  }, []);
  // console.log(postsBlog)

  return (
    <div className="container pt-5 pb-5 recent__post">
      <h1>RECENT POST</h1>

      <div>
        {isLoading && (
          <Spinner className="text-center" animation="grow" variant="dark" />
        )}

        {postsBlog?.map((posts) => (
          <RecentPostDetails key={posts._id} posts={posts}></RecentPostDetails>
        ))}
      </div>
    </div>
  );
};

export default RecentPost;
