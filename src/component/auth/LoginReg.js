import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Login from './Login';
import Registration from './Registration';
const LoginReg = () => {
    return (
        <>
            <Container className='p-5'>
                <h2 className='text-center'>Login & Registration</h2>
                <Row className='d-flex justify-content-center align-items-center my-3'>
                    <Col lg="5">
                        <Tabs
                            defaultActiveKey="login"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                            justify="center"
                        >
                            <Tab eventKey="login" title="Login">
                                <Login />
                            </Tab>
                            <Tab eventKey="registration" title="Registration">
                                <Registration />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LoginReg