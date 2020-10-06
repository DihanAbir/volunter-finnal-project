import React, { useContext } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { EventContext } from '../../App';
import Logo from '../../resource/logos/Group 1329.png'


const Register = () => {
    

    return (
        <div className="login-section">
            <p className="back btn btn-success"> <Link className="Link" to='/'> Back </Link> </p>

            <div>
                <img src={Logo} alt=""/>
            </div>
            <form action="post" className="post" >
                <h3>Registration As a Volunter</h3>
                <input type="text" placeholder="Full Name" ></input> <br/>
                <input type="text" placeholder="Username Or Email" ></input> <br/>
                <input type="text" placeholder="Date" ></input> <br/>
                <input type="text" placeholder="Description" ></input> <br/>
                <input type="text" placeholder="Organization Books at the library" ></input> <br/>
                <button className="btn btn-primary">Registration</button>
            </form>

        </div>
    );
};

export default Register;