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
                        <p className="mt-3 text-muted">Expressing oneself freely is an essential aspect of discovering the creative spirit within. It allows one to explore their emotions, thoughts, and ideas, which are often suppressed or overlooked in our daily lives. Creativity is not limited to art, music, or writing; it can manifest in many forms, including problem-solving, innovation, and even everyday tasks.When we give ourselves permission to express ourselves freely, we break free from the constraints of societal norms and expectations. We tap into our innate curiosity and explore new possibilities, which can lead to personal growth and fulfillment.Engaging in creative activities can also have numerous benefits, including stress reduction, increased self-awareness, and improved mental health. It is essential to set aside time for creativity and to approach it with an open mind and a willingness to experiment.So, whether it's painting, writing, dancing, or simply doodling, allow yourself to express freely and embrace the creative spirit within you.</p>
                    </div>
                </Col>
            </Row>
        </Container >
    )
}

export default ExpressYourself