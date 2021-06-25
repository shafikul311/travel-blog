import React from 'react';
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <div className="footer__main" >
            <div className="container">
                <div className="footer__first">
                    <h1>Follow Us </h1>
                   <div className="m-3 d-flex justify-content-center">
                       <div className="m-2"><FacebookIcon src="#"/> Facebook</div>
                       <div className="m-2"><TwitterIcon/> Twitter</div>
                       <div className="m-2"> <InstagramIcon/>Instagram</div>
                   </div>
                </div>

                <div className="footer__last ">
                  <p>&copy; All rights reserved by shafikul @web Developer</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;