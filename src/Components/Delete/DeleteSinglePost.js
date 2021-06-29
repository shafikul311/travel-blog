import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
const DeleteSinglePost = (props) => {
  console.log(props);
  const { image, name, _id } = props.post;

  const handleDelete = (id) => {
    fetch(`https://morning-meadow-74142.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("delete success");
      });
    console.log(id);
  };

  return (
    <tr>
      <td>
        <img src={image} alt="" style={{ height: "50px", width: "50px" }} />
      </td>
      <td>{name}</td>
      <td>
        {" "}
        <button className="border-0" onClick={() => handleDelete(_id)}>
          <DeleteIcon style={{ color: "red", border: "none" }} />
        </button>{" "}
      </td>
    </tr>
  );
};

export default DeleteSinglePost;
