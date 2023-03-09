import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useRegisterUserMutation } from '../../services/userAuthApi'
import { useNavigate } from 'react-router-dom'
import { storeToken } from '../../services/localStoregService'
const Registration = () => {
    const [serverError, setServerError] = useState({})

    const [registerUser] = useRegisterUserMutation()
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            password2: data.get('password2'),
            tc: data.get('tc'),
        }
        const res = await registerUser(actualData)
        console.log("regis res ", res)
        if (res.error) {
            setServerError(res.error.data.errors)
        }
        if (res.data) {
            storeToken(res.data.token)
            navigate('/')
        }
    }
    return (
        <Form id='register-form' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Your Name" />
                {serverError.name ?
                    <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                        {serverError.name}
                    </Form.Text>
                    : ""}
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter a valid email address" />
                {serverError.email ?
                    <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                        {serverError.email}
                    </Form.Text>
                    : ""}
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
                {serverError.password ?
                    <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                        {serverError.password}
                    </Form.Text>
                    : ""}
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name='password2' placeholder="Confirm Password" />
                {serverError.password2 ?
                    <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                        {serverError.password2}
                    </Form.Text>
                    : ""}
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Check type="checkbox" value={true} name='tc' label="I agree to term and condition." />
                {serverError.tc ?
                    <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                        {serverError.tc}
                    </Form.Text>
                    : ""}
            </Form.Group>
            <Button variant="primary" type="submit" className='mb-3'>
                Register
            </Button>
            {serverError.non_field_errors ? <Alert variant='danger'>{serverError.non_field_errors}</Alert> : ''}
        </Form>
    )
}

export default Registration