import React from 'react'
import { Button, Col, Container, NavLink, Row } from 'react-bootstrap'
import { FiArrowRight } from "react-icons/fi"
import {FaTwitter,FaFacebook,FaLinkedinIn,FaInstagram} from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <div style={{ backgroundColor: "rgb(0 0 0 / 82%)" }}>
                <Container style={{ color: "white" }}>
                    <Row>
                        <Col lg="3" md="6" className='my-lg-5 my-2'>
                            <h3>Serov Academy</h3>
                            <p className=''>A108 Adam Street<br />New York, NY 535022<br />United States</p>
                            <p className='mt-2 '>Phone: +1 5589 55488 55<br />Email: info@example.com</p>
                        </Col>
                        <Col lg="3" md="6" className='my-lg-5 my-2'>
                            <h3>Useful Links</h3>
                            <NavLink><span className='mx-2'><FiArrowRight /></span>Home</NavLink>
                            <NavLink><span className='mx-2'><FiArrowRight /></span>About Us</NavLink>
                            <NavLink><span className='mx-2'><FiArrowRight /></span>Course</NavLink>
                            <NavLink><span className='mx-2'><FiArrowRight /></span>Art Product</NavLink>
                            <NavLink><span className='mx-2'><FiArrowRight /></span>Galler</NavLink>
                            <NavLink><span className='mx-2'><FiArrowRight /></span>Contact</NavLink>
                        </Col>
                        <Col lg="3" md="6" className='my-lg-5 my-2'>
                            <h3>Our Services</h3>
                            <NavLink><span className='mx-2'><FiArrowRight /></span>Web Design</NavLink>
                            <NavLink><span className='mx-2'><FiArrowRight /></span>Web Development</NavLink>
                            <NavLink><span className='mx-2'><FiArrowRight /></span>Product Management</NavLink>
                            <NavLink><span className='mx-2'><FiArrowRight /></span>Marketing</NavLink>
                            <NavLink><span className='mx-2'><FiArrowRight /></span>Graphic Design</NavLink>
                        </Col>
                        <Col lg="3" md="6" className='my-lg-5 my-2'>
                            <h3>Join Our Newsletter</h3>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            <div className='d-flex'>
                                <input type="text" className='form-control w-75' />
                                <Button>Subscribe</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='p-1'>
                <Container className='d-flex justify-content-between' style={{color:"black"}}>
                    <div>
                        <h6>@Developed by - Joy Barman</h6>
                    </div>
                    <div>
                        <FaTwitter />
                        <FaFacebook className='mx-2'/>
                        <FaLinkedinIn className='mx-2'/>
                        <FaInstagram className=''/>
                    </div>
                </Container>
            </div>
        </>

    )
}

export default Footer