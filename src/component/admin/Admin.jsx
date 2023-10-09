import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Alert } from "react-bootstrap";
import { domain } from "../../services/seroveAcademyApi";

const Admin = () => {
  // const [loading, setLoading] = useState(True);
  const [error, setError] = useState("");
  const [dashBoardData, setDashBoardData] = useState("");

  // Get admin dashboard data
  useEffect(() => {
    axios
      .get(`${domain}/admin-dashboard/`)
      .then((response) => {
        setDashBoardData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  return (
    <Container>
      <h2 className="mt-1 text-center">Admin Dashboard</h2>
      <hr />
      {error ? (
        <Alert variant="danger" className="my-2">
          Something is wrong !
        </Alert>
      ) : (
        <div className="">
          <Row>
            <Col lg="4" className="mb-3">
              <Card>
                <Card.Header className="h5 text-center">Users</Card.Header>
                <Card.Body style={{ backgroundColor: "aliceblue" }}>
                  <Card.Text
                    className="text-center"
                    style={{ fontSize: "xx-large" }}
                  >
                    {dashBoardData?.total_users}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" className="mb-3">
              <Card>
                <Card.Header className="h5 text-center">Student</Card.Header>
                <Card.Body style={{ backgroundColor: "aliceblue" }}>
                  <Card.Text
                    className="text-center"
                    style={{ fontSize: "xx-large" }}
                  >
                    {dashBoardData?.total_students}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" className="mb-3">
              <Card>
                <Card.Header className="h5 text-center">Teacher</Card.Header>
                <Card.Body style={{ backgroundColor: "aliceblue" }}>
                  <Card.Text
                    className="text-center"
                    style={{ fontSize: "xx-large" }}
                  >
                    {dashBoardData?.total_trainers}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" className="mb-3">
              <Card>
                <Card.Header className="h5 text-center">Course</Card.Header>
                <Card.Body style={{ backgroundColor: "aliceblue" }}>
                  <Card.Text
                    className="text-center"
                    style={{ fontSize: "xx-large" }}
                  >
                    {dashBoardData?.total_courses}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
};

export default Admin;
