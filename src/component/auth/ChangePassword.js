import React, { useState } from 'react'
import { Col, Container, Row, Form, Button, Alert } from 'react-bootstrap'
import { useChangeUserPasswordMutation } from '../../services/userAuthApi'
import { getToken } from '../../services/localStoregService'
const ChangePassword = () => {
    const [serverError, setServerError] = useState({})
    const [serverMsg, setServerMsg] = useState({})
    const [changeUserPassword] = useChangeUserPasswordMutation()
    const { access_token } = getToken()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            password: data.get('password'),
            password2: data.get('password2'),
        }
        const res = await changeUserPassword({ actualData, access_token })
        if (res.error) {
            setServerMsg({})
            setServerError(res.error.data.errors)
        }
        if (res.data) {
            setServerMsg(res.data)
            setServerError({})
            document.getElementById('password-change-form').reset();
        }

    }
    return (
        <Container className='p-5'>
            <h2 className='text-center'>Change Password</h2>
            <Row className='d-flex justify-content-center align-items-center my-3'>
                <Col lg="5">
                    <Form id='password-change-form' onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' />
                            {serverError.password ?
                                <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                    {serverError.password}
                                </Form.Text>
                                : ""}
                        </Form.Group>
                        <Form.Group className="mb-3">
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

export default ChangePassword