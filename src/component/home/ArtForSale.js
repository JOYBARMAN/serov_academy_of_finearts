import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

const ArtForSale = () => {
    return (
        <Container className='my-5'>
            <h1 className='fw-bold'>Art For Sale</h1>
            <Row>
                <Col lg="4" md="6" className='my-3'>
                    <Card>
                        <Card.Img variant="top" src="https://i.etsystatic.com/6555222/r/il/5e67e9/1774529182/il_340x270.1774529182_kc34.jpg" />
                        <Card.Body className='text-center'>
                            <Card.Title>This is a tittle of art</Card.Title>
                            <Card.Text className='text-muted'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et unde, placeat nam necessitatibus, nisi in omnis alias optio.
                            </Card.Text>
                            <div className='my-2' style={{ color: "red" }}>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <h4>Tk. 9999</h4>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4" md="6" className='my-3'>
                    <Card>
                        <Card.Img variant="top" src="https://i.etsystatic.com/7524174/r/il/816c68/4047281758/il_340x270.4047281758_i2gc.jpg" />
                        <Card.Body className='text-center'>
                            <Card.Title>This is a tittle of art</Card.Title>
                            <Card.Text className='text-muted'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et unde, placeat nam necessitatibus, nisi in omnis alias optio.
                            </Card.Text>
                            <div className='my-2' style={{ color: "red" }}>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <h4>Tk. 9999</h4>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4" md="6" className='my-3'>
                    <Card>
                        <Card.Img variant="top" src="https://i.etsystatic.com/18821454/c/476/378/185/6/il/37aba3/2006288583/il_340x270.2006288583_a7bb.jpg" />
                        <Card.Body className='text-center'>
                            <Card.Title>This is a tittle of art</Card.Title>
                            <Card.Text className='text-muted'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et unde, placeat nam necessitatibus, nisi in omnis alias optio.
                            </Card.Text>
                            <div className='my-2' style={{ color: "red" }}>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <h4>Tk. 9999</h4>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ArtForSale