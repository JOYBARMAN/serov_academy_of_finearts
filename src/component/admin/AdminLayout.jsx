import React from "react";
import { Outlet } from "react-router-dom";
import AdminSection from "./AdminSection";
import { Container, Row, Col } from "react-bootstrap";

const AdminLayout = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" className="mt-5">
            <AdminSection />
          </Col>
          <Col lg="9">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminLayout;
