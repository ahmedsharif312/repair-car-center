import React from 'react';
import useServices from '../hooks/useServices';



const ManageService = () => {
    const [services, setServices] = useServices();
    // console.log(services._id);

    const handleDelete = id => {
        const process = window.confirm('Are you going to delete');
        if (process) {
            const url = `http://localhost:5000/service/${id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining)
                })
        }
    }

    return (
        <div className='w-50 mx-auto mb-3'>
            <h2 className='mb-4'>Manage Service</h2>

            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h5>

                </div>)
            }


        </div>
    );
};

export default ManageService;