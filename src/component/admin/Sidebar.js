import React, { useState } from 'react';
import { ListGroup, Button, Offcanvas } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa'
import NavDropdown from 'react-bootstrap/NavDropdown';
const SideBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button style={{ color: "red", backgroundColor: "white", border: "1px solid white", fontSize: "xx-large" }} onClick={handleShow}>
                <FaBars />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Serove Academy of Finearts</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ padding: "0px", marginTop: "35px" }}>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item className='' >
                            <NavDropdown title="Student" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/admin/allstudent">
                                    Student List
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/admin/addstudent">Add Student</NavDropdown.Item>
                            </NavDropdown>
                        </ListGroup.Item>
                        <ListGroup.Item className='' >
                            <NavDropdown title="Section" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">
                                    Section List
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/admin/addsection">Add Section</NavDropdown.Item>
                            </NavDropdown>
                        </ListGroup.Item>
                        <ListGroup.Item className='' >
                            <NavDropdown title="Student Payment" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/admin/allpayment">
                                    Payment List
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/admin/addpayment">Add Payment</NavDropdown.Item>
                            </NavDropdown>
                        </ListGroup.Item>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SideBar
