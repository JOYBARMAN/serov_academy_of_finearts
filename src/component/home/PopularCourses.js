import React from 'react'
import { Button, Card, Col, Container, Row, Image } from 'react-bootstrap'
import { FiHeart, FiUser } from 'react-icons/fi'
const PopularCourses = () => {
    return (
        <Container className='my-5'>
            <h1 className='fw-bold'>Popular Courses</h1>
            <Row>
                <Col lg="4" md="6" className='my-3'>
                    <Card >
                        <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/course-1.jpg" />
                        <Container className='d-flex justify-content-between mt-3'>
                            <Button variant="success" size='sm' disabled>Go somewhere</Button>
                            <h5>Fee. 350 </h5>
                        </Container>
                        <Card.Body>
                            <Card.Title>Search Engine Optimization</Card.Title>
                            <Card.Text className='text-muted'>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <hr />
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex'>
                                    <Image src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-2.jpg" height={40} width={40} roundedCircle />
                                    <h5 className='mx-2 my-auto text-muted'>Name</h5>
                                </div>
                                <div className='d-flex my-auto text-muted mt-2'>
                                    <div className='d-flex'>
                                        <FiUser />
                                        <h6 className='mx-2'>100</h6>
                                    </div>
                                    <div className='d-flex'>
                                        <FiHeart />
                                        <h6 className='mx-2'>50</h6>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4" md="6" className='my-3'>
                    <Card >
                        <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/course-1.jpg" />
                        <Container className='d-flex justify-content-between mt-3'>
                            <Button variant="success" size='sm' disabled>Go somewhere</Button>
                            <h5>Fee. 350 </h5>
                        </Container>
                        <Card.Body>
                            <Card.Title>Search Engine Optimization</Card.Title>
                            <Card.Text className='text-muted'>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <hr />
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex'>
                                    <Image src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-2.jpg" height={40} width={40} roundedCircle />
                                    <h5 className='mx-2 my-auto text-muted'>Name</h5>
                                </div>
                                <div className='d-flex my-auto text-muted mt-2'>
                                    <div className='d-flex'>
                                        <FiUser />
                                        <h6 className='mx-2'>100</h6>
                                    </div>
                                    <div className='d-flex'>
                                        <FiHeart />
                                        <h6 className='mx-2'>50</h6>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4" md="6" className='my-3'>
                    <Card >
                        <Card.Img variant="top" src="https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Gennadiy,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1496681278/jgjuawkqp0w9qhgupbgm.jpg" />
                        <Container className='d-flex justify-content-between mt-3'>
                            <Button variant="success" size='sm' disabled>Go somewhere</Button>
                            <h5>Fee. 350 </h5>
                        </Container>
                        <Card.Body>
                            <Card.Title>Search Engine Optimization</Card.Title>
                            <Card.Text className='text-muted'>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <hr />
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex'>
                                    <Image src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-2.jpg" height={40} width={40} roundedCircle />
                                    <h5 className='mx-2 my-auto text-muted'>Name</h5>
                                </div>
                                <div className='d-flex my-auto text-muted mt-2'>
                                    <div className='d-flex'>
                                        <FiUser />
                                        <h6 className='mx-2'>100</h6>
                                    </div>
                                    <div className='d-flex'>
                                        <FiHeart />
                                        <h6 className='mx-2'>50</h6>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default PopularCourses