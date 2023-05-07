import React, { useEffect, useState } from 'react'
import { Alert, Container } from 'react-bootstrap'
import { Form, Row, Col, Button, Image } from 'react-bootstrap'
import { domain, useGetAllSectionQuery } from '../../../services/seroveAcademyApi'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const EditStudent = () => {

    const { id } = useParams()
    const [name, setName] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [motherName, setMotherName] = useState('')
    const [studentId, setStudentId] = useState('')
    const [section, setSection] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [mobile, setMobile] = useState('')
    const [prevImage, setPrevImage] = useState('');
    const [image, setImage] = useState()
    const [blood, setBlood] = useState('')
    const [address, setAddress] = useState('')
    const [date, setDate] = useState('')
    const [error,setError] = useState('')
    const [serverError, setServerError] = useState({})
    const { data } = useGetAllSectionQuery()

    // get student detail by id
    useEffect(() => {
        const getStudentData = async () => {
            try {
                const response = await axios.get(`${domain}/student/${id}/`);
                setName(response.data.name);
                setFatherName(response.data.father_name);
                setMotherName(response.data.mother_name);
                setStudentId(response.data.student_id);
                setSection(response.data.section.id);
                setEmail(response.data.email);
                setGender(response.data.gender);
                setMobile(response.data.mobile);
                setPrevImage(response.data.photo);
                setBlood(response.data.blood);
                setAddress(response.data.address);
                setDate(response.data.admission_date);
            } catch (error) {
                setError(error);
            }
        };
        getStudentData();
    }, [id])

// handle form update
    const handleSubmit = async (e) => {
        e.preventDefault();
        const actualData = {
            name: name,
            student_id: studentId,
            section: section,
            email: email,
            gender: gender,
            mobile: mobile,
            blood: blood,
            address: address,
            father_name: fatherName,
            mother_name: motherName,
            admission_date: date,
        }

        if (image) {
            actualData.photo = image;
        }
        try {
            const response = await axios.put(`${domain}/student/${id}/`, actualData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            toast.success(response.data.msg)
        }
        catch (error) {
            setServerError(error.response.data.errors)
        }
    }
    return (
        <Container>
            <h2 className='my-2'>Update Student </h2>
            <hr />
            <Row className='justify-content-center my-3'>
                <Col lg="10">
                {error ?
                <Alert variant="danger" className='my-2'>Something is wrong !</Alert>
                : ""}

                    <Form id='add-student-form' onSubmit={handleSubmit}>
                        <Row>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Student Name</Form.Label>
                                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Student Name" />
                                    {serverError.name ?
                                        <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                            {serverError.name}
                                        </Form.Text>
                                        : ""}
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Father Name</Form.Label>
                                    <Form.Control type="text" value={fatherName} onChange={(e) => setFatherName(e.target.value)} placeholder="Enter Father Name" />
                                    {serverError.father_name ?
                                        <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                            {serverError.father_name}
                                        </Form.Text>
                                        : ""}
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Mother Name</Form.Label>
                                    <Form.Control type="text" value={motherName} onChange={(e) => setMotherName(e.target.value)} placeholder="Enter Mother Name" />
                                    {serverError.mother_name ?
                                        <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                            {serverError.mother_name}
                                        </Form.Text>
                                        : ""}
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Student Id</Form.Label>
                                    <Form.Control type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="Enter Student Id" />
                                    {serverError.student_id ?
                                        <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                            {serverError.student_id}
                                        </Form.Text>
                                        : ""}
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Section</Form.Label>
                                    <Form.Select value={section} onChange={(e) => setSection(e.target.value)}>
                                        {data?.map((section, key) => <option key={key} value={section.id}>{section.section}</option>)}
                                    </Form.Select>
                                    {serverError.section ?
                                        <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                            {serverError.section}
                                        </Form.Text>
                                        : ""}
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Student Email" />
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
                                    <Form.Select value={gender} onChange={(e) => setGender(e.target.value)}>
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
                                    <Form.Control type="text" placeholder="Enter Phone Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                    {serverError.mobile ?
                                        <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                            {serverError.mobile}
                                        </Form.Text>
                                        : ""}
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Student Photo</Form.Label>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="file" accept="image/png, image/jpeg" onChange={(e) => setImage(e.target.files[0])} />

                                        {prevImage && (
                                            <div className='mt-2'>
                                                <Form.Label>Previous Image: </Form.Label>
                                                <Image className='mx-2' src={`http://localhost:8000${prevImage}`} alt="Previous" width="50" height="50" />
                                            </div>
                                        )}

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
                                    <Form.Select name='blood' value={blood} onChange={(e) => setBlood(e.target.value)}>
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
                                    <Form.Control as="textarea" rows={2} name="address" className='mb-3' placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                    {serverError.address ?
                                        <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                            {serverError.address}
                                        </Form.Text>
                                        : ""}
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Admission Date</Form.Label>
                                    <Form.Control type="date" name='admission_date' value={date} onChange={(e) => setDate(e.target.value)} />
                                    {serverError.admission_date ?
                                        <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                            {serverError.admission_date}
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

export default EditStudent