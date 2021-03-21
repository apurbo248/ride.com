import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MapContainer from "../Map/Map";
import PickAndDrop from "../PickAndDrop/pickAndDrop";

const Destination = () => {
  return (
    <Container mb="3">
      <Row>
        <Col sm="12" lg="3">
          <PickAndDrop key="1pick1drop"></PickAndDrop>
        </Col>
        <Col sm="12" lg="9">
          <MapContainer></MapContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Destination;
