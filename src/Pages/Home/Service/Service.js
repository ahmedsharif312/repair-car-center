import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const { id, name, img, price, description } = service;
    const navigate = useNavigate();
    const handleBookNow = id => {
        navigate(`/service/${id}`)
    }

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h5>Price: {price}</h5>
            <p><small>{description}</small></p>
            <button onClick={() => handleBookNow(id)} className='btn btn-primary'>BOOK NOW</button>
        </div>
    );
};

export default Service;
