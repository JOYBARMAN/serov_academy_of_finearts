import React from 'react'
import { Col, Container, Image, Row, Carousel, Card } from 'react-bootstrap'
import about from '../../images/about.jpg'
import Counter from '../home/Counter'
const About = () => {
    return (
        <>
            <div style={{ backgroundColor: "#5fcf80", padding: "10px", color: "white" }}>
                <Container className='text-center'>
                    <h2 className='mt-3'>About</h2>
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus laborum molestiae ipsam incidunt temporibus ipsum, ducimus tempore rem minus nam aliquam. Tenetur adipisci consequatur ducimus </p>
                </Container>
            </div>
            <Container className='my-5'>
                <Row>
                    <Col lg='6' className='my-2'>
                        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                        <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non reiciendis, architecto, quidem perspiciatis exercitationem nobis voluptatibus facilis placeat explicabo corrupti molestias itaque praesentium ut eius magnam neque ad minima necessitatibus eveniet, ducimus error iure? Ea, nostrum magni! Consequuntur quod, laudantium reiciendis aspernatur animi quisquam recusandae, minus eveniet architecto dolorum, labore explicabo nam quas expedita ea quia molestiae facere optio quibusdam alias quaerat. Eum voluptatem cum, labore quod quis sapiente nihil laudantium ipsam eos tenetur ea expedita ut explicabo natus consequuntur pariatur assumenda. Quas ad repellendus, laborum dolor voluptate iure, dolorem at sit blanditiis odit velit consectetur? Asperiores deserunt quas necessitatibus?</p>
                    </Col>
                    <Col lg='6' className='my-2'>
                        <Image className='img-fluid' src={about} alt="about" />
                    </Col>
                </Row>
            </Container>
            <Counter />
            <Container className='my-5'>
                <h1 className='fw-bold'>Testimonials</h1>
                <p>What are they saying.....</p>
                <Row className='justify-content-center'>
                    <Col lg='8'>
                        <Carousel variant='dark'>
                            <Carousel.Item>
                                <Container
                                    fluid
                                    className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded"
                                >
                                    <Row className="d-flex justify-content-center">
                                        <Col md="10">
                                            <Card>
                                                <Card.Body className='m-3'>
                                                    <Row>
                                                        <Col
                                                            lg="4"
                                                            className="d-flex justify-content-center align-items-center mb-4 mb-lg-0"
                                                        >
                                                            <img
                                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                                                                className="rounded-circle img-fluid shadow-1"
                                                                alt="woman avatar"
                                                                width="200"
                                                                height="200"
                                                            />
                                                        </Col>
                                                        <Col lg="8">
                                                            {" "}
                                                            <p className="text-muted fw-light mb-4">
                                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                                                                quam sapiente molestiae numquam quas, voluptates omnis nulla
                                                                ea odio quia similique corrupti magnam.
                                                            </p>
                                                            <p className="fw-bold lead mb-2">
                                                                <strong>Anna Smith</strong>
                                                            </p>
                                                            <p className="fw-bold text-muted mb-0">Product manager</p>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Container
                                    fluid
                                    className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded"
                                >
                                    <Row className="d-flex justify-content-center">
                                        <Col md="10">
                                            <Card>
                                                <Card.Body className='m-3'>
                                                    <Row>
                                                        <Col
                                                            lg="4"
                                                            className="d-flex justify-content-center align-items-center mb-4 mb-lg-0"
                                                        >
                                                            <img
                                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                                                                className="rounded-circle img-fluid shadow-1"
                                                                alt="woman avatar"
                                                                width="200"
                                                                height="200"
                                                            />
                                                        </Col>
                                                        <Col lg="8">
                                                            {" "}
                                                            <p className="text-muted fw-light mb-4">
                                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                                                                quam sapiente molestiae numquam quas, voluptates omnis nulla
                                                                ea odio quia similique corrupti magnam.
                                                            </p>
                                                            <p className="fw-bold lead mb-2">
                                                                <strong>Anna Smith</strong>
                                                            </p>
                                                            <p className="fw-bold text-muted mb-0">Product manager</p>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Container
                                    fluid
                                    className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded"
                                >
                                    <Row className="d-flex justify-content-center">
                                        <Col md="10">
                                            <Card>
                                                <Card.Body className='m-3'>
                                                    <Row>
                                                        <Col
                                                            lg="4"
                                                            className="d-flex justify-content-center align-items-center mb-4 mb-lg-0"
                                                        >
                                                            <img
                                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                                                                className="rounded-circle img-fluid shadow-1"
                                                                alt="woman avatar"
                                                                width="200"
                                                                height="200"
                                                            />
                                                        </Col>
                                                        <Col lg="8">
                                                            {" "}
                                                            <p className="text-muted fw-light mb-4">
                                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                                                                quam sapiente molestiae numquam quas, voluptates omnis nulla
                                                                ea odio quia similique corrupti magnam.
                                                            </p>
                                                            <p className="fw-bold lead mb-2">
                                                                <strong>Anna Smith</strong>
                                                            </p>
                                                            <p className="fw-bold text-muted mb-0">Product manager</p>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About