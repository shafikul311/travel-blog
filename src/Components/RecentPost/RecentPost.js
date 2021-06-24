import React from 'react';
import './RecentPost.css'


const RecentPost = () => {


    return (
        <div className="container recent__post">
            <h1>RECENT POST</h1>
            <div>
            <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src="https://images.unsplash.com/photo-1533094692971-5f4c56ec1339?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
            </div>

            </div>

            
        </div>
    );
};

export default RecentPost;