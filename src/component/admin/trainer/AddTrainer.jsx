import axios from 'axios'
import React, { useState } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import { domain } from '../../../services/seroveAcademyApi'
import { toast } from 'react-toastify'


const AddTrainer = () => {
    const [serverError, setServerError] = useState({})
    const [image, setImage] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            name: data.get('name'),
            email: data.get('email'),
            gender: data.get('gender'),
            mobile: data.get('mobile'),
            bio: data.get('bio'),
            designation: data.get('designation'),
            photo: image,
            blood: data.get('blood'),
            address: data.get('address'),
            enrollment_date: data.get('enrollment_date'),
            facebook_link: data.get('facebook_link'),
            instagram_link: data.get('instagram_link'),
            twitter_link: data.get('twitter_link'),
        }
        axios.post(`${domain}/trainer/`, actualData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                setServerError({})
                toast.success(res.data.msg, {
                    position: "top-right",
                    theme: "light"
                })
            })
            .catch(err => {
                setServerError(err.response.data.errors)
            })
    }
    return (
        <Container>
            <h2 className='mt-1 text-center'>Add Trainer</h2>
            <hr />
            <Row className='justify-content-center my-3'>
                <Col lg="10">
                    <Form id='add-trainer-form' onSubmit={handleSubmit}>
                        <Row>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Trainer Name</Form.Label>
                                    <Form.Control type="text" name='name' placeholder="Enter Trainer Name" />
                                    {serverError.name ?
                                <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                    {serverError.name}
                                </Form.Text>
                                : ""}
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name='email' placeholder="Enter Trainer Email" />
                                    {serverError.email ?
                                <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                    {serverError.email}
                                </Form.Text>
                                : ""}
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Select name='gender' >
                                        <option >Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </Form.Select>
                                    {serverError.gender ?
                                <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                    {serverError.gender}
                                </Form.Text>
                                : ""}
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" name='mobile' placeholder="Enter Phone Number" />
                                    {serverError.mobile ?
                                <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                    {serverError.mobile}
                                </Form.Text>
                                : ""}
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Bio</Form.Label>
                                    <Form.Control as="textarea" rows={2} name="bio" className='mb-3' placeholder="Enter Bio" />
                                    {serverError.bio ?
                                <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                    {serverError.bio}
                                </Form.Text>
                                : ""}
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Designation</Form.Label>
                                    <Form.Control type="text" name='designation' placeholder="Enter trainer designation" />
                                    {serverError.designation ?
                                <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                    {serverError.designation}
                                </Form.Text>
                                : ""}
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Trainer Photo</Form.Label>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="file" name='photo' accept="image/png, image/jpeg" onChange={(e) => setImage(e.target.files[0])} />
                                        {serverError.photo ?
                                    <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                        {serverError.photo}
                                    </Form.Text>
                                    : ""}
                                    </Form.Group>
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Blood</Form.Label>
                                    <Form.Select name='blood' >
                                        <option>Select</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                    </Form.Select>
                                    {serverError.blood ?
                                        <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                            {serverError.blood}
                                        </Form.Text>
                                        : ""}
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control as="textarea" rows={2} name="address" className='mb-3' placeholder="Enter Address" />
                                    {serverError.address ?
                                <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                    {serverError.address}
                                </Form.Text>
                                : ""}
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Enrollment Date</Form.Label>
                                    <Form.Control type="date" name='enrollment_date' />
                                    {serverError.enrollment_date ?
                                <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                    {serverError.enrollment_date}
                                </Form.Text>
                                : ""}
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Facebook Link</Form.Label>
                                    <Form.Control type="text" name='facebook_link' placeholder="Enter Facebook Link" />
                                    {serverError.facebook_link ?
                                <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                    {serverError.facebook_link}
                                </Form.Text>
                                : ""}
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Instagram Link</Form.Label>
                                    <Form.Control type="text" name='instagram_link' placeholder="Enter Instagram Link" />
                                    {serverError.instagram_link ?
                                <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                    {serverError.instagram_link}
                                </Form.Text>
                                : ""}
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Twitter Link</Form.Label>
                                    <Form.Control type="text" name='twitter_link' placeholder="Enter Twitter Link" />
                                    {serverError.twitter_link ?
                                <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                    {serverError.twitter_link}
                                </Form.Text>
                                : ""}
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className="text-center">
                            <Button className="btn btn-success my-2 w-25" type='submit' size='md'>Submit</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddTrainer