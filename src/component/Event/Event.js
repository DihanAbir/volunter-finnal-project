import React from 'react';
import { Link } from 'react-router-dom';
import './Event.css'

const Event = (props) => {
    // console.log(props.handleEvent)
    const {title, img} = props.event
    return (
            <Link to="/detailsEvent" onClick={() =>props.handleEvent(props.event)}  className="col-3 singleEvent" >

                <div className="event">
                    <img className="img-fluid" src={img} alt=""/>
                    <p className="title">{title}</p>
                    <button >clicked here</button>
                </div>

            </Link>
    );
};

export default Event;