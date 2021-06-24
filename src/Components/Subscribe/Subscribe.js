import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className="container Subscribe__section">
            <h3>Subscribe For Latest Travel News</h3>
            <>
            <InputGroup className="mb-3 w-50">
    <FormControl
      
      placeholder="Email"
      aria-label="Subscribe"
      aria-describedby="basic-addon2"
    />
    <Button variant="outline-secondary" id="button-addon2">
      Subscribe
    </Button>
  </InputGroup>
            </>
            
        </div>
    );
};

export default Subscribe;