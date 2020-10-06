import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { EventContext } from '../../App';
import UserProfile from '../UserProfile/UserProfile';

const TotalEvent = () => {
    const [loggedInUser, setLoggedInUser, eventdetails, setEventdetails] = useContext(EventContext)
    const [registerEvent, setRegisterEvent]  = useState([])


    useEffect(() => {
        fetch('https://pure-gorge-03291.herokuapp.com/registerdEvent?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data =>setRegisterEvent(data) )
    }, [])

    // console.log(registerEvent)

    return (
        <div>
            <p className="back btn btn-success"> <Link className="Link" to='/'> Back </Link> </p>

            <h1>u have {registerEvent.length} data</h1>
            <h1>Your total registered events</h1>
            <div className="row">
                {
                    registerEvent.map(event => <UserProfile event={event} ></UserProfile> )
                }
            </div>
        </div>
    );
};

export default TotalEvent;