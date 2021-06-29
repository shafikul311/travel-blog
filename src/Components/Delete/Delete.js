import React from "react";
import SideBar from "../SideBar/SideBar";
import DeleteBlog from "./DeleteBlog";

const Delete = () => {
  return (
    <div className="d-flex admin__container">
      <div className="col-md-4">
        <SideBar />
      </div>
      <div className="col-md-8">
        <DeleteBlog />
      </div>
    </div>
  );
};

export default Delete;
