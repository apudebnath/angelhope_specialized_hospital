import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import image from '../../../images/loginbanner.png';
const Login = () => {
     const {googleSignIn, handleEmailChange, handlePasswordChange, handleLogIn, resetPassword, email, error} = useAuth();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-12 mt-5 text-center">
                <h2 className="pb-3">Please Login</h2>
                    <Form onSubmit={handleLogIn} className="w-75 mx-auto">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required/>
                        </Form.Group>
                      
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required/>
                        </Form.Group>
                        <h6 className="text-danger">{error}</h6>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Check me out" />
                          <Link to='/register'>Want to Register!</Link>
                        </Form.Group>
                        <Button className="px-5" variant="primary" type="submit">
                          Login
                        </Button>
                        <br /><br />
                        <Button onClick={resetPassword} variant="primary" size="sm"> 
                           Reset Password
                        </Button>
                        <br /><br />
                        <Button onClick={googleSignIn} className="px-3">Google Sign In</Button>
                        <Button className="px-3 m-3">GitHub Sign In</Button>
                    </Form>
                </div>
                <div className="col-md-6 pt-5">
                    <img className=" img-fluid" src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;