import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useAddStudentMutation } from '../../../services/seroveAcademyApi'
import { toast } from 'react-toastify'
const AddStudent = () => {
    const [addStudent] = useAddStudentMutation()
    const [serverError,setServerError]=useState({})
    const [image, setImage] = useState(null)

    // const handleImage = (e) =>{
    //     console.log("file",e.target.files)
    //     setImage(e.target.files[0])
    // }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            name: data.get('name'),
            student_id: data.get('student_id'),
            section: data.get('section'),
            email: data.get('email'),
            // photo : `${image}, ${image.name}`,
            // photo:image,
            gender: data.get('gender'),
            mobile: data.get('mobile'),
            blood: data.get('blood'),
            address: data.get('address'),
            father_name: data.get('father_name'),
            mother_name: data.get('mother_name'),
            admission_date: data.get('admission_date'),
        }

        // actualData.append('photo', image, image.name)

        console.log("student_data", actualData)
        console.log("image",image)
        const res = await addStudent(actualData)
        console.log("add student res ", res)

        if (res.error) {
            setServerError(res.error.data.errors)
        }
        if (res.data) {
            toast.success(res.data.msg,{
                position:"top-right",
                theme:"light"
            })
        }

    }
    return (
        <Container>
            <h2 className='my-2'>Add Student</h2>
            <hr />
            <Row className='justify-content-center my-3'>
                <Col lg="10">
                    <Form id='add-student-form' onSubmit={handleSubmit} encType='multipart'>
                        <Row>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Student Name</Form.Label>
                                    <Form.Control type="text" name='name' placeholder="Enter Student Name" />
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
                                    <Form.Control type="text" name='father_name' placeholder="Enter Father Name" />
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
                                    <Form.Control type="text" name='mother_name' placeholder="Enter Mother Name" />
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
                                    <Form.Control type="text" name='student_id' placeholder="Enter Student Id" />
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
                                    <Form.Select name='section' >
                                        <option value="1">A</option>
                                        <option value="2">B</option>
                                        <option value="3">C</option>
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
                                    <Form.Control type="email" name='email' placeholder="Enter Student Email" />
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
                                    <Form.Label>Student Photo</Form.Label>
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
                                        <option value="A+">A</option>
                                        <option value="B+">B</option>
                                        <option value="A-">A-</option>
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
                                    <Form.Control as="textarea" rows={2} name="address" className='mb-3' placeholder="Enter Address"  />
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
                                    <Form.Control type="date" name='admission_date' />
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

export default AddStudent