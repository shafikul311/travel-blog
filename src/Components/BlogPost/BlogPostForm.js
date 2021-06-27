import React from 'react';
import SideBar from '../SideBar/SideBar';
import BlogPost from './BlogPost';

const BlogPostForm = () => {
    return (
        <div className="d-flex admin__container">
        <div className="col-md-4">
            <SideBar/>
        </div>
        <div className="col-md-8">
            <BlogPost/>
        </div>
    </div>
    );
};

export default BlogPostForm;