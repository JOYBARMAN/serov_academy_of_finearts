import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import pic2 from '../../images/pic2.jpg'
const ExpressYourself = () => {
    return (
        <Container className='my-5'>
            <Row>
                <Col lg="4">
                    <div className="text-center">
                        <Image roundedCircle src={pic2} alt="" style={{ "border": "3px solid rgb(165 125 125)" }} />
                    </div>
                </Col>
                <Col lg="8">
                    <div>
                        <h3 className="fw-bold">Express yourself freely and discover the creative spirit within you...</h3>
                        <p className="mt-3 text-muted">Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit. Pellentesque sed dolor. Aliquam congue fermentum nisl. Mauris accumsan
                            nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi,
                            aliquet sit amet, euismod in, auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent
                            justo dolor, lobortis quis, lobortis dignissim, pulvinar ac, lorem. Vestibulum sed ante.
                            Donec sagittis euismod purus. Fusce euismod consequat ante. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Pellentesque sed dolor. Aliquam congue fermentum nisl. Mauris
                            accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede
                            mi, aliquet sit amet, euismod in, auctor ut, ligula. Aliquam dapibus tincidunt metus.
                            Praesent justo dolor, lobortis quis, lobortis dignissim, pulvinar ac, lorem.</p>
                    </div>
                </Col>
            </Row>
        </Container >
    )
}

export default ExpressYourself