import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetaile from '../../hooks/useServiceDetaile';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetaile(serviceId);

    return (
        <div>
            <h2>Welcome to Details: {service?.name} </h2>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-danger'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;