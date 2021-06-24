import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import './Carosel.css'



const Carosel = () => {
              return (


          <Carousel fade >
            <Carousel.Item className="carousel-main">
              <img
                className="d-block w-100 h-100"
                src="https://images.unsplash.com/photo-1519832979-6fa011b87667?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-main">
              <img
                className="d-block w-100 h-100"
                src="https://images.unsplash.com/photo-1513564774965-ac25ddf81e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-main">
              <img
                className="d-block w-100 h-100"
                src="https://images.unsplash.com/photo-1542704792-e30dac463c90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

       
       
    );
};

export default Carosel;