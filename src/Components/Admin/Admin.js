import React from 'react';
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
                <h1>Welcome</h1>
            </div>
        </div>
        </>
    );
};

export default Admin;