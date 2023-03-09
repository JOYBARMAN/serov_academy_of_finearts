import React, { useState } from 'react'
import { Col, Container, Row, Form, Button, Alert } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useResetPasswordMutation } from '../../services/userAuthApi'

const ResetPassword = () => {
    const navigate = useNavigate()
    const { id, token } = useParams()
    const [serverError, setServerError] = useState({})
    const [serverMsg, setServerMsg] = useState({})
    const [resetPassword] = useResetPasswordMutation()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            password: data.get('password'),
            password2: data.get('password2'),
        }
        const res = await resetPassword({ actualData, id, token })
        console.log("reset res", res)
        if (res.error) {
            setServerMsg({})
            setServerError(res.error.data.errors)
        }
        if (res.data) {
            setServerMsg(res.data)
            setServerError({})
            document.getElementById('password-reset-form').reset();
            setTimeout(() => {
                navigate("/login")
            }, 3000);
        }

    }
    return (
        <Container className='p-5'>
            <h2 className='text-center'>Reset Password</h2>
            <Row className='d-flex justify-content-center align-items-center my-3'>
                <Col lg="5">
                    <Form id='password-reset-form' onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' />
                            {serverError.password ?
                                <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                    {serverError.password}
                                </Form.Text>
                                : ""}
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" name='password2' />
                            {serverError.password2 ?
                                <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                    {serverError.password2}
                                </Form.Text>
                                : ""}
                        </Form.Group>
                        <Button variant="primary" type="submit" className='mb-3'>
                            Save
                        </Button>
                        {serverError.non_field_errors ? <Alert variant='danger'>{serverError.non_field_errors}</Alert> : ''}
                        {serverMsg.msg ? <Alert variant='success'>{serverMsg.msg}</Alert> : ''}
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ResetPassword