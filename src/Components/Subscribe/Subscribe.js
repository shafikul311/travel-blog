import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className="container Subscribe__section">
           <h3>Subscribe For Latest Travel News</h3>
            <div className="container ">
              <>
                <InputGroup className="mb-3 w-50 subscribe-form">
                  <FormControl
                    
                    placeholder="Email"
                    aria-label="Subscribe"
                    aria-describedby="basic-addon2"
                    type="email"
                    required
                  />
                  <Button variant="outline-primary" id="button-addon2">
                    Subscribe
                  </Button>
                {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, beatae?</p> */}
                </InputGroup>
              
              </>
              
            </div>
            
        </div>
    );
};

export default Subscribe;