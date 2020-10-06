import React, { useContext, useEffect, useState } from 'react';
import { Link, Route, Router } from 'react-router-dom';
import fakeData from '../../fakeData';
import AddEvents from '../AddEvents/AddEvents';
import { EventContext } from '../../App';
import VolunterList from '../VolunterList/VolunterList';

const Admin = () => {
    const handleEventsAll = () => {
        fetch("https://pure-gorge-03291.herokuapp.com/addEvent", 
        { 
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
    })}


    const [ list, setList ] = useState([]);
    const [loggedInUser, setLoggedInUser, eventdetails, setEventdetails] = useContext(EventContext)


    useEffect(() => {
        fetch('https://pure-gorge-03291.herokuapp.com/registerdEvent')
        .then(res => res.json())
        .then(data =>{
            const allData = {...data, ...eventdetails, ...loggedInUser}
            setList(data)
        } )
    }, [])






    return (
        <div>
            <p>admin</p>
            <button onClick={handleEventsAll}>add all events</button>
            <div>
                {
                    list.map(list =>  <li>{list.name}----- {list.email} ----- <span className="btn btn-danger">delete</span>  </li> )
                }
            </div>
                

        </div>
    );
};

export default Admin;