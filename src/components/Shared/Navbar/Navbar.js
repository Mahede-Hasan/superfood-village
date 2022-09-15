import React from 'react';
import './Navbar.css'
import logo from '../../../images/logo.png'
import { NavLink } from 'react-bootstrap';
const Navbar = () => {
    
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg">
                <div className="container-fluid nav-container  d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
                    </div>
                    <div className="nav-content">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink to='/home'>Home</NavLink>
                                <NavLink to='/orders'>Orders</NavLink>
                                <NavLink to='/login'>Login</NavLink>
                                <NavLink to='/signUp'>SignUp</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;