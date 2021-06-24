import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import SideBar from '../SideBar/SideBar';
import './Admin.css'

const Admin = () => {
    return (
        <>
            
        <div className="d-flex admin__container">
            <div className="col-md-4">
                <SideBar/>

            </div>
            <div className="col-md-8">
                <BlogPost/>

            </div>
            

        </div>
            
        
        </>
    );
};

export default Admin;