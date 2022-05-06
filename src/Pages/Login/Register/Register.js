import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const handleLogin = event => {
        navigate('/register')
    }

    const handleRegister = event => {
        event.preventDefault();
        console.log(event.target.value);
    }
    return (
        <div className='container w-50 mt-3 mx-auto'>
            <h2 className='text-warning text-center '>Register</h2>
            <Form onClick={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address Line</Form.Label>
                    <Form.Control type="text" placeholder="Address line" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button className='w-100' variant="warning" type="submit">
                    Register
                </Button>
                <p>Already have a Account? <Link to="/login" className='text-danger text-decoration-none' onClick={handleLogin}>Login</Link></p>
            </Form>
        </div>
    );
};

export default Register;