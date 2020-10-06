import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EventContext } from '../../App';
// import EventContext from '../App';

const SingleEvent = () => {
    const [loggedInUser, setLoggedInUser, eventdetails, setEventdetails] = useContext(EventContext)
    // console.log("single theke ashce",eventdetails)


    const handleAddToDatabase = () => {
        // console.log("clicked");
        const newBooking = { ...eventdetails, ...loggedInUser }
        // console.log(newBooking)
        fetch('https://pure-gorge-03291.herokuapp.com/addUserEvent', 
        { 
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
        .then(res => res.json())
        .then(data =>{
            // console.log(data)
        })
        


    }

    return (
        <div>
        
            <p>Name: {eventdetails.name}</p>
            <input type="text" value={eventdetails.title}/><br></br>
            <input type="text" value={loggedInUser.name}/><br></br>
            <input type="text" value={loggedInUser.email}/><br></br>
            <input type="text" />

            <Link className="btn btn-danger" to="/totalEventPerUser" onClick={handleAddToDatabase}>Register</Link>

        </div>
    );
};

export default SingleEvent;