import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import DeleteSinglePost from './DeleteSinglePost';

const DeleteBlog = () => {

    const [postsBlog, setPostsBlog] = useState([])

    useEffect(() => {
       const url = `http://localhost:3080/post`
       fetch(url)
       .then(res =>res.json())
       .then(data => setPostsBlog(data))
   },[])

    return (
        <div>
            <h1>Chose For Delete a Blog</h1>
            <div>

            <Table striped bordered hover>
        <thead>
            <tr>
         
            <th>Image</th>
            <th>Title</th>
            <th>Delete</th>
           
            </tr>
        </thead>
        <tbody>
                 {
                    postsBlog.map(post => <DeleteSinglePost key={post._id} post={post}></DeleteSinglePost>)

                }
        </tbody>
     </Table>
            </div>
        </div>
    );
};

export default DeleteBlog;