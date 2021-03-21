import React, { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Form, Button } from "react-bootstrap";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";

const Header = () => {
  const [loggedInUser,setLoggedInUser] =useContext(UserContext)
  return (
      <div className="header">
      <Navbar className="container shadow mb-5"  expand="lg">
        <Navbar.Brand href="/home">Ride.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/destination">Destination</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Form inline>
          {
              loggedInUser.isSignedIn ? 
                <strong style={{paddingTop:'9px'}}>{loggedInUser.name}</strong>
              : <Link className="btn btn-success mx-3" to="/login"> Log in</Link>
            }
          </Form>
        </Navbar.Collapse>
      </Navbar>
      </div>
  );
};

export default Header;
