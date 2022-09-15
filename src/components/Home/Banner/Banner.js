import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Navbar from '../../Shared/Navbar/Navbar';
import './Banner.css'
const Banner = () => {
    return (
        <div className='top-banner'>

            <div className="banner-text">
                <h1 className='text-center'>Super<span>Food</span> Village</h1>
                <h5>We provide our best service</h5>
                <div className="search-box mt-3">
                    <InputGroup className="mb-3 w-25 mx-auto">
                        <Form.Control className=''
                            placeholder="Search Your Food"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button className='search-btn' variant="" id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>
                </div>
            </div>
        </div>
    );
};

export default Banner;