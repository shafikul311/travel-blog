import React from 'react';

import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <Link to="/"> <p className="nav-link">LOGO</p></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/"> <p className="nav-link">BLOGS</p></Link>
                    <Link to="/about"> <p className="nav-link">ABOUT</p></Link>
                    <Link to="/admin"> <p className="nav-link">ADMIN</p></Link>
                </div>
            </div>
            </div>
      </nav>
    );
};

export default NavBar;