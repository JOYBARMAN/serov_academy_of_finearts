import React from 'react'
import { Col, Container, Row, Card} from 'react-bootstrap'
import pic6 from '../../images/pic6.jpg'
import pic7 from '../../images/pic7.jpg'
import pic8 from '../../images/pic8.jpg'
import {FaTwitter,FaFacebook,FaLinkedinIn,FaInstagram} from 'react-icons/fa'
const OurTrainer = () => {
    return (
        <Container className='my-5'>
            <h1 className='fw-bold'>Our Trainers</h1>
            <Row>
                <Col lg="4" md="6" className='my-3'>
                    <Card>
                        <Card.Img variant="top" src={pic6} />
                        <Card.Body className='text-center'>
                            <Card.Title>Walter White</Card.Title>
                            <p style={{fontSize:"10px"}}>Web Development</p>
                            <Card.Text className='text-muted'>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <div className='d-flex justify-content-center'>
                                <FaTwitter/>
                                <FaFacebook className='mx-1'/>
                                <FaLinkedinIn className='mx-1'/>
                                <FaInstagram className='mx-1' />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4" md="6" className='my-3'>
                    <Card>
                        <Card.Img variant="top" src={pic7} />
                        <Card.Body className='text-center'>
                            <Card.Title>Walter White</Card.Title>
                            <p style={{fontSize:"10px"}}>Web Development</p>
                            <Card.Text className='text-muted'>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <div className='d-flex justify-content-center'>
                                <FaTwitter/>
                                <FaFacebook className='mx-1'/>
                                <FaLinkedinIn className='mx-1'/>
                                <FaInstagram className='mx-1' />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4" md="6" className='my-3'>
                    <Card>
                        <Card.Img variant="top" src={pic8} />
                        <Card.Body className='text-center'>
                            <Card.Title>Walter White</Card.Title>
                            <p style={{fontSize:"10px"}}>Web Development</p>
                            <Card.Text className='text-muted'>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <div className='d-flex justify-content-center'>
                                <FaTwitter/>
                                <FaFacebook className='mx-1'/>
                                <FaLinkedinIn className='mx-1'/>
                                <FaInstagram className='mx-1' />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default OurTrainer