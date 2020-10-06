import React, { useContext, useState } from 'react';
import './Login.css';
import Logo from '../../resource/logos/Group 1329.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { EventContext } from '../../App';


import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';




const Login = () => {

    const  [loggedInUser, setLoggedInUser, eventdetails, setEventdetails]= useContext(EventContext)
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };
    




    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const [ signedIn, setSignedIn ] =useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photoURL: ''
    })
    
    const handleGoogleLogin = () => {

        const provider = new firebase.auth.GoogleAuthProvider();
        
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            console.log("result consoe",result)
            var {displayName, email, photoURL} = result.user;
            const signedIn = {
                isSignedIn : true,
                name: displayName,
                email: email,
                photo: photoURL,
            }
            setSignedIn(signedIn);
            setLoggedInUser(signedIn);
            history.replace(from);


          }).catch(function(error) {
              console.log(error.message);
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
    }

    return (
        <div className="login-section">

            <Link to='/' className="btn btn-primary"  >Events</Link>

             {signedIn.name  &&
                <h2>
                Welcome {signedIn.name} .
                </h2>
            }
               
            <div>
                <img src={Logo} alt=""/>
            </div>
            <form action="post" className="post" >
                <h3>Login For Voluntering</h3>
                <p className="btn btn-primary" onClick={handleGoogleLogin}> LogIng using GooGle   </p>
            </form>
            

        </div>
    );
};

export default Login;