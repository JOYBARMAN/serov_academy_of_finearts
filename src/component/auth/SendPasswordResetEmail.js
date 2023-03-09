import React, { useState } from 'react'
import { Col, Container, Row, Form, Button, Alert } from 'react-bootstrap'
import { useSendPasswordResetMailMutation } from '../../services/userAuthApi'
const SendPasswordResetEmail = () => {
    const [serverError, setServerError] = useState({})
    const [serverMsg, setServerMsg] = useState({})
    const [sendPasswordResetMail] = useSendPasswordResetMailMutation()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email')
        }
        const res = await sendPasswordResetMail(actualData)
        console.log("response", res)
        if (res.error) {
            setServerMsg({})
            setServerError(res.error.data.errors)
        }
        if (res.data) {
            setServerMsg(res.data)
            setServerError({})
            document.getElementById('password-reset-email-form').reset();
        }
    }
    return (
        <Container className='p-5'>
            <h2 className='text-center'>Reset Password</h2>
            <Row className='d-flex justify-content-center align-items-center my-3'>
                <Col lg="5">
                    <Form id='password-reset-email-form' onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" />
                            {serverError.email ?
                                <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                    {serverError.email}
                                </Form.Text>
                                : ""}
                        </Form.Group>
                        <Button variant="primary" type="submit" className='mb-3'>
                            Send
                        </Button>
                        {serverError.non_field_errors ? <Alert variant='danger'>{serverError.non_field_errors}</Alert> : ''}
                        {serverMsg.msg ? <Alert variant='success'>{serverMsg.msg}</Alert>:''}
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SendPasswordResetEmail