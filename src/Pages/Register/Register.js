import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import image from '../../images/regBanner1.jpg';

const Register = () => {
    const {googleSignIn, handleRegister, handleEmailChange, handlePasswordChange,  error} = useAuth();

    return (
        <div className="container background">
            <div className="row">
                <div className="col-md-6 col-12 mt-5 text-center">
                <h2 className="pt-5">Please Register</h2>
                    <Form onSubmit={handleRegister} className="w-75 mx-auto">
                        <Form.Group className="mb-3" controlId="formBasicName">
                          <Form.Control type="text" placeholder="Your Name" required />
                        </Form.Group>
                        <Form.Group onBlur={handleEmailChange} className="mb-3" controlId="formBasicEmail">
                          <Form.Control type="email" placeholder="Enter email" required />
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>
                      
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required/>
                        </Form.Group>
                        <h6 className="text-danger">{error}</h6>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <Link to='/login'>Already Register?</Link>
                        </Form.Group>
                        <Button className="px-5" variant="primary" type="submit">
                          Register
                        </Button>
                        <br /><br />
                        <Button onClick={googleSignIn} className="px-3">Google Sign In</Button>
                        <Button className="px-3 m-3">GitHub Sign In</Button>
                    </Form>
                </div>
                <div className="col-md-6 ">
                    <img className="img-fluid pt-5 w-100" src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;