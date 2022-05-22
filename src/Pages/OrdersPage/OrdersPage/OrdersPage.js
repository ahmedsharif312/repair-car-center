import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    console.log(user);
    console.log(orders);

    useEffect(() => {
        const getOrders = () => {
            const email = user?.email;
            console.log(email);
            const url = `https://boiling-headland-53562.herokuapp.com/order?email=${email}`;
            const { data } = axios.get(url)
            setOrders(data)
        }
        getOrders();

    }, [user])

    return (
        <div>
            {/* <h2>This is Orders Page: {orders?.length}</h2> */}
            <h2>This is Orders Page:</h2>
        </div>
    );
};

export default OrdersPage;