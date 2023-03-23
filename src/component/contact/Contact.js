import React from 'react'
import {  Button, Col, Container, Form, Row } from 'react-bootstrap'
import { MdEmail,MdOutlineLocationOn } from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
const Contact = () => {
  return (
    <>
      <div style={{ backgroundColor: "#5fcf80", padding: "10px", color: "white" }}>
        <Container className='text-center'>
          <h2 className='mt-3'>Contact</h2>
          <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus laborum molestiae ipsam incidunt temporibus ipsum, ducimus tempore rem minus nam aliquam. Tenetur adipisci consequatur ducimus </p>
        </Container>
      </div>
      <iframe title="myFrame" style={{ width: "100%", height: "350px" }} className="my-2" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=dhanmondi32+(serove%20academy%20fine%20arts)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe>
      <Container className='my-5'>
        <Row>
          <Col lg='4'>
            <div className='d-flex'>
              <p className='mx-3' style={{ fontSize: "xx-large",color:"#5fcf80" }}><MdOutlineLocationOn /></p>
              <div>
                <h3>Location:</h3>
                <p className='text-muted'>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            <div className='d-flex my-3'>
              <p className='mx-3' style={{ fontSize: "xx-large",color:"#5fcf80" }}><MdEmail /></p>
              <div>
                <h3>Email:</h3>
                <p className='text-muted'>serovacademy@email.com</p>
              </div>
            </div>
            <div className='d-flex my-3'>
              <p className='mx-3' style={{ fontSize: "xx-large",color:"#5fcf80" }}><FiPhoneCall /></p>
              <div>
                <h3>Call:</h3>
                <p className='text-muted'>+09384838737</p>
              </div>
            </div>
          </Col>
          <Col className='my-2' lg='8'>
            <Form>
              <Row>
                <Col lg='6'>
                <Form.Control type="text" className='mb-3' style={{height:"45px",border:"1px solid gray"}} placeholder="Enter Your Name" />
                </Col>
                <Col lg='6'>
                <Form.Control type="email" className='mb-3' placeholder="Enter Your Email" style={{height:"45px",border:"1px solid gray"}} />
                </Col>
                <Col lg='12'>
                <Form.Control type="text" className='mb-3' placeholder="Subject" style={{height:"45px",border:"1px solid gray"}} />
                </Col>
                <Col lg='12'>
                <Form.Control as="textarea" rows={5} className='mb-3' placeholder="Message" style={{border:"1px solid gray"}} />
                </Col>
              </Row>
              <div className='text-center'>
                <Button size='lg'  style={{borderRadius:"30px",width:"50%",backgroundColor:"#5fcf80",border:"1px solid #5fcf80"}}>Send Message</Button>
              </div>
            </Form>
          </Col>
        </Row>

      </Container>
    </>

  )
}

export default Contact