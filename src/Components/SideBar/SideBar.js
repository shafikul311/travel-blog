import React from 'react';
import './SideBar.css'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
const SideBar = () => {
    return (
        <div className="container__sideBar">
            <ul className="sideBar__option">
                <Link to="admin" > <li className="blog-container d-flex"> <AddCircleOutlineIcon/> <p>Post a Blog</p></li></Link>
                <Link to="delete" ><li className="blog-container d-flex"> <DeleteIcon/> <p>Delete</p></li></Link>
                <li className="blog-container d-flex"> <SystemUpdateAltIcon/> <p>Update Blog</p></li>
                <li className="blog-container d-flex"> <SupervisorAccountIcon/> <p>Make A Admin</p> </li>
                
                <Link to="/" ><li className="blog-container d-flex"> <HomeIcon/> <p>Go Home</p> </li></Link>
            </ul>
            
        </div>
    );
};

export default SideBar;