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
                        <p className="mt-3 text-muted">Art can be a powerful tool for unlocking a child's potential. It offers a creative outlet for self-expression and helps children develop important cognitive, emotional, and social skills. Studies have shown that engaging in art can improve children's problem-solving abilities, critical thinking skills, and communication skills. It can also boost their self-esteem and help them develop a sense of identity and purpose.Encouraging your child to explore different forms of art, such as painting, drawing, sculpture, or music, can help them discover their strengths and interests. It can also be a fun way to bond with your child and create lasting memories.Whether your child is a budding artist or just starting to explore their creative side, incorporating art into their daily routine can have a positive impact on their overall development. So, unleash your child's creativity and watch them flourish!</p>
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