import React, { useEffect, useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useLoginUserMutation } from '../../services/userAuthApi'
import { useNavigate } from 'react-router-dom'
import { setUserToken } from '../../features/authSlice'
import { storeToken, getToken } from '../../services/localStoregService'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
const Login = () => {
    const [serverError, setServerError] = useState({})
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()
    const [loginUser] = useLoginUserMutation()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
            password: data.get('password'),
        }
        const res = await loginUser(actualData)
        if (res.error) {
            setServerError(res.error.data.errors)
        }
        if (res.data) {
            storeToken(res.data.token)
            let { access_token } = getToken()
            dispatch(setUserToken({ access_token: access_token }))
            navigate('/')
        }

    }
    let { access_token } = getToken()
    useEffect(() => {
        dispatch(setUserToken({ access_token: access_token }))
    }, [access_token, dispatch])
    return (
        <Form id='login-form' onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
                {serverError.email ?
                    <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                        {serverError.email}
                    </Form.Text>
                    : ""}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <div className="d-flex">
                    <Form.Control type={showPassword ? 'text' : 'password'} name='password' placeholder="Password" />
                    <i style={{ "marginLeft": "-30px", "marginTop": "5px", "cursor": "pointer" }} onClick={() => setShowPassword(!showPassword)}>{showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</i>
                </div>
            </Form.Group>

            <div className='d-flex justify-content-between mb-3'>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <a href="/passwordresetemail" className='mt-2'>Forgot Password</a>
            </div>
            {serverError.non_field_errors ? <Alert variant='danger'>{serverError.non_field_errors}</Alert> : ''}
        </Form>
    )
}

export default Login