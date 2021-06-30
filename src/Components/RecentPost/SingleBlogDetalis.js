import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NabBar/NavBar";

const SingleBlogDetalis = () => {
  const { id } = useParams();

  const [postsBlog, setPostsBlog] = useState([]);

  useEffect(() => {
    const url = `https://morning-meadow-74142.herokuapp.com/post/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPostsBlog(data));
  }, [id]);

  // console.log(postsBlog);

  return (
    <div>
      <>
        <NavBar />
            {

                postsBlog.length === 0 && (
                  <div className="text-center pt-5">
                    Loading
                    <div className="spinner-grow text-danger" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
            )}

        {
          <div className="container">
            <Card className="border-0 pt-5 pb-5">
              <Card.Img
                variant="top"
                src={postsBlog[0]?.image}
                style={{ width: "400px", borderRadius: "15px", margin: "15px" }}
              />
              <Card.Body>
                <h5>Author:Shafikul</h5>
                <Card.Text>
                  <small>{postsBlog[0]?.time}</small>
                </Card.Text>
                <Card.Text>
                  <h2> {postsBlog[0]?.name}</h2>
                </Card.Text>

                <Card.Text>{postsBlog[0]?.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        }
      </>
      <Footer></Footer>
    </div>
  );
};

export default SingleBlogDetalis;
