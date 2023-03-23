import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getToken,removeToken } from '../../services/localStoregService'
import { useGetLoggedUserQuery } from '../../services/userAuthApi'
import { setUserInfo,unSetUserInfo } from '../../features/userSlice'
import { unSetUserToken } from '../../features/authSlice'
import { Container,Row,Col,Button } from 'react-bootstrap'

const Dashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { access_token } = getToken()
    const { data, isSuccess } = useGetLoggedUserQuery(access_token)

    const [userData, setUserData] = useState({ email: "", name: "" })
    useEffect(() => {
        if (data && isSuccess) {
            setUserData({ email: data.email, name: data.name })
        }
    }, [data, isSuccess])

    useEffect(() => {
        if (data && isSuccess) {
            dispatch(setUserInfo({ email: data.email, name: data.name }))
        }
    }, [data, isSuccess, dispatch])

    const handleLogout = () => {
        dispatch(unSetUserInfo({ email: "", name: "" }))
        dispatch(unSetUserToken({ access_token: null }))
        removeToken()
        navigate('/login')
    }
    return (
        <Container>
            <h1 className='text-center'>Dashboard</h1>
            <Row className='justify-content-center my-5'>
                <Col lg = "6">
                    <h3>Welcome  ! {userData.name}</h3>
                    <h3>Email : {userData.email}</h3>
                    <div className='d-flex my-3'>
                        <Button href='/' variant='primary' >Home</Button>
                        <Button href='/changepassword' variant='primary'className='mx-2'>Change Password</Button>
                        <Button onClick={handleLogout} variant='primary'>Log Out</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard



