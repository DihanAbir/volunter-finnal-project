import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = (props) => {
    const {name, img, title, _id} = props.event;
    const handleDelete = (id) =>{
        console.log(id);
        fetch(`https://pure-gorge-03291.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result =>{
            console.log("deleted successfully")
        })

    }
    return (
            
        <div className="col-3 border">
            <div>
                <img src={img} alt=""/>
            </div>
            <h4>{title}</h4>
            <h4>{_id}</h4>
            <p onClick={() =>handleDelete(_id)} className="back btn btn-danger"> <Link className="Link" > Cancel </Link> </p>

        </div>
        
    );
};

export default UserProfile;