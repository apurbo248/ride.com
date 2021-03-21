import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { transportData } from "../../AllData/transportTypeData";
import TransportType from "../TransportType/TransportType";
import Transport from "../TransportType/TransportType";

const Home = () => {
  const [transports,setTransports] = useState([]);
  useEffect(()=>{
    const data = transportData;
    setTransports(data)
  },[])
  return (
    <div>
        <h2 className="text-center"> Choose For Transport<hr/></h2>
     <div className="d-flex flex-wrap justify-content-center">
     
        {
        transports.map((transport) => (
        <TransportType transport={transport} key={transport.key} ></TransportType>
        ))}
     </div>
    
    </div>
  );
};

export default Home;
