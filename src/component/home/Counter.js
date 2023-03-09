import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Counter = () => {
    const [counterOn, setCounterOn] = useState(false)
    const text = {
        "fontSize": "3rem"
    }
    return (
        <div style={{"backgroundColor":"antiquewhite","padding":"5px"}}>
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <Container className='my-2'>
                <Row className='text-center'>
                    <Col lg='3' md='6' className='my-2'>
                        <h1 style={text}>{counterOn && <CountUp start={0} end={500} duration={2} delay={0} />}+</h1>
                        <h6>Students</h6>
                    </Col>
                    <Col lg='3' md='6' className='my-2'>
                        <h1 style={text}>{counterOn && <CountUp start={0} end={40} duration={2} delay={0} />}+</h1>
                        <h6>Courses</h6>
                    </Col>
                    <Col lg='3' md='6' className='my-2'>
                        <h1 style={text}>{counterOn && <CountUp start={0} end={50} duration={2} delay={0} />}+</h1>
                        <h6>Event</h6>
                    </Col>
                    <Col lg='3' md='6' className='my-2'>
                        <h1 style={text}>{counterOn && <CountUp start={0} end={15} duration={2} delay={0} />}+</h1>
                        <h6>Trainers</h6>
                    </Col>
                </Row>
            </Container>
        </ScrollTrigger>
        </div>
    )
}

export default Counter