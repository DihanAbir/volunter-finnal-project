import React , {createContext, useContext, useEffect, useState}from 'react';
import Event from '../Event/Event';
import fakeData from '../../fakeData';
import { EventContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import './Home.css';


// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from '../Login/firebase.config';






const Home = () => {
    // firebase.initializeApp(firebaseConfig);
   


    const [event, setEvent] = useState([]);
    const [loggedInUser, setLoggedInUser, eventdetails, setEventdetails] = useContext(EventContext)
    // console.log(eventdetails)


    useEffect(() =>{
        fetch('https://pure-gorge-03291.herokuapp.com/loadEvents')
        .then(res => res.json())
        .then(data =>setEvent(data))
    }, [])


    const handleEvent = (event) =>{
        // console.log("clicked",event)
        setEventdetails(event)
    }
  
    return (


        <div>
            <div className="Banner pt-4">
                <Navbar></Navbar>

                <div className='searchbar'>
                    <h3 className='m-4'>I GROW BY HEALPING PEOPLE IN NEED</h3>
                    <input placeholder='  Search' type="text"></input>
                </div>

            </div>
            <div className="row eventlist ">
                {
                    event.map((event) => <Event handleEvent={handleEvent} event={event} ></Event>)
                }
            </div>
        </div>
    );
};

export default Home;