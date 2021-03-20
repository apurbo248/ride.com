import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Form, Button } from "react-bootstrap";
import Data from '../Data.json';
import TransportType from "../TransportType/TransportType";
const Header = () => {

  const [transportType, setTransportType] = useState(Data);
  console.log(transportType);

  return (
      <div className="header">
      <Navbar className="container"  expand="lg">
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
            <Button variant="outline-success" href="/login">Log In</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div className=" d-flex flex-wrap justify-content-center pt-5">
  
        {
          transportType.map(transportType =><TransportType transportType = {transportType}></TransportType>)
        }
        
      </div>
      </div>
  );
};

export default Header;
