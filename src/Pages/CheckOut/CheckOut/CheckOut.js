import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetaile from '../../../hooks/useServiceDetaile';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetaile(serviceId);
    // const [user] = useAuthState(auth);


    const handleSubmit = event => {
        event.preventDefault();
        const order = {
            name: event.target.name.value,
            email: event.target.email.value,
            service: service?.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://boiling-headland-53562.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Order is placed');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto mt-3'>
            <h2>Place Order: {service?.name}</h2>

            <form onSubmit={handleSubmit}>
                <input className='w-100 mb-2' type="text" name="name" placeholder="Name" id="" />
                <br />
                <input className='w-100 mb-2' type="email" name="email" placeholder="Email" id="" />
                <br />
                <input className='w-100 mb-2' type="text" value={service?.name} name="service" placeholder="Service" id="" readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder="Address" id="" />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder="Phone" id="" />
                <br />
                <input className=' btn btn-danger mb-2' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CheckOut; 