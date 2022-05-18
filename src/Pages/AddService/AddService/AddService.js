import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(service => {
                console.log(service);
            })
    };

    return (
        <div className='w-50 mx-auto'>
            <h1>Add the Services</h1>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 rounded' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-3 rounded' placeholder='Description' {...register("description")} />
                <input className='mb-3 rounded' placeholder='Price' type="price" {...register("price")} />
                <input className='mb-3 rounded' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="ADD SERVICE" />
            </form>

        </div>
    );
};

export default AddService;