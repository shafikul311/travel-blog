import React from 'react';
import { Link } from 'react-router-dom';

const RecentPostDetails = (props) => {
    console.log(props.posts._id)
    const {image, name, time, _id }= props.posts

    return (
        <div>
            <Link to={`post/${_id}`} >
                <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img className="w-100" src={image} alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h5 className="card-title">Author: </h5>
                        <p className="card-text"><small className="text-muted">{time.toString()}</small></p>
                    </div>
                    </div>
                </div>
                </div>
            </Link>

        </div>
    );
};

export default RecentPostDetails;