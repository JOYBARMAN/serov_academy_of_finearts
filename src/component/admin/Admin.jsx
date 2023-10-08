import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
const Admin = () => {
  return (
    <Container>
      <h2 className="mt-1 text-center">Admin Home</h2>
      <hr/>
      <div className="">
        <Row>
          <Col lg="4" className="mb-3">
            <Card>
              <Card.Header className="h5 text-center">Student</Card.Header>
              <Card.Body style={{"backgroundColor":"aliceblue"}}>
                <Card.Text className="text-center" style={{"fontSize":"xx-large"}}>1000</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4" className="mb-3">
            <Card>
              <Card.Header className="h5 text-center">Teacher</Card.Header>
              <Card.Body style={{"backgroundColor":"aliceblue"}}>
                <Card.Text className="text-center" style={{"fontSize":"xx-large"}}>10</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4" className="mb-3">
            <Card>
              <Card.Header className="h5 text-center">Course</Card.Header>
              <Card.Body style={{"backgroundColor":"aliceblue"}}>
                <Card.Text className="text-center" style={{"fontSize":"xx-large"}}>3564</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4" className="mb-3">
            <Card>
              <Card.Header className="h5 text-center">Course</Card.Header>
              <Card.Body style={{"backgroundColor":"aliceblue"}}>
                <Card.Text className="text-center" style={{"fontSize":"xx-large"}}>3564</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Admin;
