import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaUserAlt } from "react-icons/fa";
import { getToken, getUserIsAdmin, removeToken, removeUserIsAdmin } from '../services/localStoregService';
import { unSetUserInfo } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { unSetUserToken } from '../features/authSlice';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { access_token } = getToken()
    const is_admin = getUserIsAdmin()

    const handleLogout = () => {
        dispatch(unSetUserInfo({ email: "", name: "" }))
        dispatch(unSetUserToken({ access_token: null }))
        removeToken()
        removeUserIsAdmin()
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
                            <Link to="/" className='nav-link text-white'>Home</Link>
                            <Link to="/about" className='nav-link text-white'>About</Link>
                            <Link to="/course" className='nav-link text-white '>Course</Link>
                            <Link to="/product" className='nav-link text-white '>Product</Link>
                            <Link to="/blog" className='nav-link text-white '>Blog</Link>
                            <Link to="/contact" className='nav-link text-white '>Contact</Link>
                            {is_admin ?
                                <Link to="/admin" className='nav-link text-white '>Admin</Link>
                                :
                                ""
                            }
                        </Nav>
                        {access_token ?
                            <Nav>
                                <Link to='/dashboard' className='nav-link text-white'>Profile</Link>
                                <Link onClick={handleLogout} className='nav-link text-white'>Log Out</Link>
                            </Nav>
                            :
                            <Nav>
                                <Link to="/login" className='nav-link text-white' style={{ "fontSize": 16 }}><FaUserAlt /><span className='ms-2'>Login</span></Link>
                            </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default NavBar