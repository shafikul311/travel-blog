import React from 'react';
import { Form } from 'react-bootstrap';

const BlogPost = () => {
    return (
        <div>
            <h1>Post Here</h1>
            <Form className="w-75">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Upload Image </Form.Label>
                    <Form.Control type="file" placeholder="Upload Image" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Small Description </Form.Label>
                    <Form.Control as="textarea" rows={4} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Full Description </Form.Label>
                    <Form.Control as="textarea" rows={4} />
                </Form.Group>
            </Form>

        </div>
    );
};

export default BlogPost;