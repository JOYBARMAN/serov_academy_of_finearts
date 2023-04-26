import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { getToken, removeToken } from '../services/localStoregService';
import { unSetUserInfo } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { unSetUserToken } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { access_token } = getToken()

    const handleLogout = () => {
        dispatch(unSetUserInfo({ email: "", name: "" }))
        dispatch(unSetUserToken({ access_token: null }))
        removeToken()
        navigate('/login')
    }

    return (
        <>
            <Navbar style={{ "backgroundColor": "white", "height": "30px" }} variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='mx-auto my-auto'>
                        <h4 style={{ "color": "black", "fontWeight": "bold" }}>Serov Academy of Fine Arts</h4>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar sticky="top" style={{ "backgroundColor": "rgb(0 0 0 / 82%)" }} variant="dark" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className='text-white'>Home</Nav.Link>
                            <Nav.Link href="/about" className='text-white '>About</Nav.Link>
                            <Nav.Link href="/course" className='text-white '>Course</Nav.Link>
                            <Nav.Link href="/product" className='text-white '>Product</Nav.Link>
                            <Nav.Link href="/blog" className='text-white '>Blog</Nav.Link>
                            <Nav.Link href="/contact" className='text-white '>Contact</Nav.Link>
                            <Nav.Link href="/admin" className='text-white '>Admin</Nav.Link>
                        </Nav>
                        <div className='d-lg-flex'>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search Anything"
                                    className=""
                                    aria-label="Search"
                                    style={{ "borderTopRightRadius": "0px", "borderBottomRightRadius": "0px", "borderRight": "1px solid white" }}
                                />
                                <Button style={{ "backgroundColor": "white", "color": "black", "border": "1px solid white", "borderTopLeftRadius": "0px", "borderBottomLeftRadius": "0px" }}><FaSearch /></Button>
                            </Form>
                            {access_token ?
                                // <Nav.Link onClick={handleLogout} className='text-white ms-lg-3 mt-2 '>Log Out</Nav.Link> :
                                <Nav.Link href='/dashboard' className='text-white ms-lg-3 mt-2 '>Dashboard</Nav.Link> :
                                <div className='d-flex ms-lg-3'>
                                    <Nav.Link href="/login" className='text-white mt-1' style={{ "fontSize": 16 }}><FaUserAlt /><span className='ms-2'>Login</span></Nav.Link>
                                </div>
                            }
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default NavBar