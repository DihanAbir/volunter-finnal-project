import React from 'react';
import './Navbar.css';
import Logo from '../../resource/logos/Group 1329.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="d-flex container-fluid">
            <div>
                <img src={Logo} className="img-fluid logo" alt="Logo"/>
            </div>
            <div className="ml-auto d-flex">
                <ul className="d-flex">
                    <li>
                        <Link className="navlink" to="home">Home</Link>
                    </li>
                    <li>
                        <Link className="navlink" to="donation">Donation</Link>
                    </li>
                    <li>
                        <Link className="navlink" to="blog">Blog</Link>
                    </li>

                </ul>
                <button className="btn btn-primary"><Link className="color-black" to = "/admin">Admin</Link>  </button>
                <button className="btn btn-warning"> <Link className="color-black" to = "/register">Register</Link> </button>
                <button className="btn btn-success"> <Link className="color-black" to="/login" >LogIn</Link> </button>
            </div>
            
        </div>
    );
};

export default Navbar;