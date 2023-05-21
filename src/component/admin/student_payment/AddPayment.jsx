import axios from 'axios'
import React, { useState } from 'react'
import { Row, Container, Col, Form, Button, Alert } from 'react-bootstrap'
import { domain, useGetAllSectionQuery } from '../../../services/seroveAcademyApi'
import { toast } from 'react-toastify'

const AddPayment = () => {
    const [serverError, setServerError] = useState({})
    const [error, setError] = useState('')
    const [section, setSection] = useState('')
    const [studentId, setStudentId] = useState('')
    const allSection = useGetAllSectionQuery()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            student_id: studentId,
            section_id: data.get('section_id'),
            payment_month: data.get('payment_month'),
            payment_year: data.get('payment_year'),
            payment_fee: data.get('payment_fee'),
            payment_date: data.get('payment_date')
        }
        console.log("data", actualData)
        axios.post(`${domain}/student_payment/`, actualData)
            .then(res => {
                toast.success(res.data.msg, {
                    position: "top-right",
                    theme: "light"
                })
            })
            .catch(err => {
                setServerError(err.response.data.errors)
                setError(err.response.data.error)
                console.log("err", err)
            })
    }



    return (
        <Container>
            <h2 className='my-2'>Add Student Payment</h2>
            <hr />
            <Row className='justify-content-center my-3'>
                <Col lg="10">
                    {error ?
                        <Alert variant="danger" className='my-2'>{error}</Alert>
                        : ""}
                    <Form id='add-student-form' onSubmit={handleSubmit}>
                        <Row>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Section</Form.Label>
                                    <Form.Select name='section_id' value={section} onChange={(e) => setSection(e.target.value)} required>
                                        {allSection?.data?.map((section, key) => <option key={key} value={section.id}>{section.section}</option>)}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Student Id</Form.Label>
                                    <Form.Control type="text" name='student_id' placeholder="Enter student id" value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
                                </Form.Group>
                            </Col>
                            {/* <Col lg='12'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Student</Form.Label>
                                    <Form.Select name="student" disabled={!data || data.length === 0}>
                                        {data?.length > 0 ? (
                                            data.map((student, key) => (
                                                <option key={key} value={student.id}>
                                                    {student.name} / Section: {student.section.section}
                                                </option>
                                            ))
                                        ) : ""}
                                    </Form.Select>
                                    {data?.length === 0 ?
                                        <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                            No Data is Available For This Section
                                        </Form.Text>
                                        : ""}
                                    {serverError.student ?
                                        <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                            *{serverError.student}
                                        </Form.Text>
                                        : ""}
                                </Form.Group>
                            </Col> */}
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Payment Month</Form.Label>
                                    <Form.Select name='payment_month' >
                                        <option>Select</option>
                                        <option value="january">january</option>
                                        <option value="february">february</option>
                                        <option value="march">march</option>
                                        <option value="april">april</option>
                                        <option value="may">may</option>
                                        <option value="june">june</option>
                                        <option value="july">july</option>
                                        <option value="august">august</option>
                                        <option value="september">september</option>
                                        <option value="october">october</option>
                                        <option value="november">november</option>
                                        <option value="december">december</option>
                                    </Form.Select>
                                    {serverError.payment_month ?
                                        <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                            {serverError.payment_month}
                                        </Form.Text>
                                        : ""}
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Payment Year</Form.Label>
                                    <Form.Control type="text" name='payment_year' placeholder="Enter year" />
                                    {serverError.payment_year ?
                                        <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                            {serverError.payment_year}
                                        </Form.Text>
                                        : ""}
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Payment Fee</Form.Label>
                                    <Form.Control type="text" name='payment_fee' placeholder="Enter amount of fee" />
                                    {serverError.payment_fee ?
                                        <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                            {serverError.payment_fee}
                                        </Form.Text>
                                        : ""}
                                </Form.Group>
                            </Col>

                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Payment Date</Form.Label>
                                    <Form.Control type="date" name='payment_date' />
                                    {serverError.payment_date ?
                                        <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                            {serverError.payment_date}
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

export default AddPayment
