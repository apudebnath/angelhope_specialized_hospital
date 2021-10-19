import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../Hooks/useAuth';
import logo from '../../../../images/logo.png';


const Navigation = () => {
    const {user, logOut} = useAuth();
console.log(user)
    return (
      <>  
        <Navbar bg="light" variant="light" sticky="top" expand="md" collapseOnSelect>
          <Container>
            <Navbar.Brand as={NavLink} to="/home">
                <img
                  alt=""
                  src={logo}
                  width="200"
                  height="60"
                  className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse  className="justify-content-end">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                <Nav.Link as={Link} to="/community">Community</Nav.Link>
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                {!user?.email ?<Nav.Link as={Link} to="/login">Login</Nav.Link>
                  :
                <Button onClick={logOut} size='small'>Logout</Button>}
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </Nav>
              <Navbar.Text>
                  <span>Signed in: {user.displayName}</span>
                </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar> 
      </>
    );  
};

export default Navigation;