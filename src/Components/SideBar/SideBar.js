import React from "react";
import "./SideBar.css";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { useContext } from "react";
// import { useState } from 'react';
// import { useEffect } from 'react';
const SideBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // const [isAdmin , setIsAdmin] = useState(false)
  console.log(loggedInUser);

  // useEffect(()=>{
  //     const url = `https://morning-meadow-74142.herokuapp.com/login`
  //     fetch(url, {
  //         method: 'POST',
  //         headers: { 'content-type': 'application/json' },
  //         body: JSON.stringify({ email:loggedInUser.email})
  //     })

  //     .then(res => res.json())
  //     .then(data=> setLoggedInUser(data))
  // }, [])

  // console.log(loggedInUser )

  return (
    <div className="container__sideBar">
      <ul className="sideBar__option">
        {loggedInUser.isAdmin ? (
          <>
            <Link to="/blogPostForm">
              {" "}
              <li className="blog-container d-flex">
                {" "}
                <AddCircleOutlineIcon /> <p>Post a Blog</p>
              </li>
            </Link>
            <Link to="/delete">
              <li className="blog-container d-flex">
                {" "}
                <DeleteIcon /> <p>Delete Post</p>
              </li>
            </Link>
            <Link to="/update">
              <li className="blog-container d-flex">
                {" "}
                <SystemUpdateAltIcon /> <p>Update Blog</p>
              </li>
            </Link>
            <Link to="/makeAdmin">
              {" "}
              <li className="blog-container d-flex">
                {" "}
                <SupervisorAccountIcon />
                Make A New Admin
              </li>
            </Link>
            <Link to="/">
              <li className="blog-container d-flex mt-2">
                {" "}
                <HomeIcon /> <p>Go Home</p>{" "}
              </li>
            </Link>
          </>
        ) : (
          <>
            <Link to="/notAdmin">
              <li className="blog-container d-flex">
                {" "}
                <SupervisorAccountIcon />{" "}
              </li>
            </Link>
            <Link to="/">
              <li className="blog-container d-flex">
                {" "}
                <HomeIcon /> <p>Go Home</p>{" "}
              </li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default SideBar;
