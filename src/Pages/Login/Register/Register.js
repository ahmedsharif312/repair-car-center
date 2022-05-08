import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
import { sendEmailVerification, updateProfile } from 'firebase/auth';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);


    const navigate = useNavigate();
    const handleLogin = event => {
        navigate('/register')
    }
    if (user) {
        console.log(user);
    }


    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ dispalyName: name })
        console.log("updated");
        navigate('/home')

        // console.log(name, email, address, password);
    }
    return (
        <div className='container w-50 mt-3 mx-auto'>
            <h2 className='text-warning text-center '>Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address Line</Form.Label>
                    <Form.Control type="text" name='address' placeholder="Address line" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" name="terms" label="Accept Terms and Condition" />
                </Form.Group>
                <Button className='w-100' variant="warning" type="submit" disabled={!agree}>
                    Register
                </Button>
                <p>Already have a Account? <Link to="/login" className='text-danger text-decoration-none' onClick={handleLogin}>Login</Link></p>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;