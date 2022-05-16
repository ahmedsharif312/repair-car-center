import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageHelmat from '../../Shared/PageHelmate/PageHelmat';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation()
    let errorElement;

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true })
    }
    if (error) {
        errorElement = <div>
            <p>{error?.message}</p>
        </div>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const handleRegister = event => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please Give Your Email Address')
        }
    }
    return (
        <div className='container w-50 mt-3 mx-auto'>
            <PageHelmat title='Login' />
            <h2 className='text-warning text-center '>Login</h2>
            <Form onClick={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Submit
                </Button>
            </Form>
            {errorElement}
            <p>Forget <button className='btn btn-link text-warning text-decoration-none' onClick={resetPassword}>Forgot Password</button></p>
            <p>New in Repair Car? <Link to="/register" className='text-danger text-decoration-none' onClick={handleRegister}>Register Now</Link></p>
            <SocialLogin />
            <ToastContainer />
        </div>
    );
};

export default Login;