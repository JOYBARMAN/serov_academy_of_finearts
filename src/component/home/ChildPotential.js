import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import pic1 from '../../images/pic1.jpg'
const ChildPotential = () => {
    return (
        <Container className='my-5'>
            <Row>
                <Col lg="8">
                    <div className="">
                        <h3 className="fw-bold">Unlock Your Child's Potential with the Power of Art</h3>
                        <p className="mt-3 text-muted">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Pellentesque sed dolor. Aliquam congue fermentum nisl. Mauris accumsan nulla vel diam. Sed
                            in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod
                            in, auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis,
                            lobortis dignissim, pulvinar ac, lorem. Vestibulum sed ante. Donec sagittis euismod purus.
                            Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Pellentesque sed dolor. Aliquam congue fermentum nisl. Mauris accumsan nulla vel diam. Sed
                            in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod
                            in, auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis,
                            lobortis dignissim, pulvinar ac, lorem.</p>
                    </div>
                </Col>
                <Col lg="4">
                    <div className="text-center">
                        <Image roundedCircle src={pic1} alt="" style={{ "border": "3px solid rgb(165 125 125)" }} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ChildPotential