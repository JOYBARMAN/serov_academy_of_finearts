import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { domain, useUpdatePaymentMutation } from '../../../services/seroveAcademyApi'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'

const EditPayment = () => {
    const { id } = useParams()
    const [serverError, setServerError] = useState({})
    const [error, setError] = useState('')
    const [paymentMonth, setPaymentMonth] = useState('')
    const [paymentYear, setPaymentYear] = useState('')
    const [paymentFee, setPaymentFee] = useState('')
    const [paymentDate, setPaymentDate] = useState('')
    const [studentId, setStudentId] = useState('')
    const [studentName, setStudentName] = useState('')
    const [updatePayment] = useUpdatePaymentMutation()

    // handle form update
    const handleSubmit = async (e) => {
        e.preventDefault();
        const actualData = {
            student: studentId,
            payment_month: paymentMonth,
            payment_year: paymentYear,
            payment_fee: paymentFee,
            payment_date: paymentDate,
        }
        const res = await updatePayment({ id, actualData })
        if (res.error) {
            setError(res.error.data.error)
            if (res.error.data.errors) {
                setServerError(res.error.data.errors)
            }
        }
        if (res.data) {
            toast.success(res.data.msg, {
                position: "top-right",
                theme: "light"
            })
        }

    }

    // get student payment detail by payment id
    useEffect(() => {
        const getStudentData = async () => {
            try {
                const response = await axios.get(`${domain}/student_payment/${id}/`);
                setPaymentMonth(response.data.payment_month);
                setPaymentYear(response.data.payment_year);
                setPaymentFee(response.data.payment_fee);
                setPaymentDate(response.data.payment_date);
                setStudentId(response.data.student.id)
                setStudentName(response.data.student.name)
                console.log("success", response.data)
            } catch (error) {
                setError("Something is wrong !!");
            }
        };
        getStudentData();
    }, [id])
    return (
        <Container>
            <h2 className='my-2'>Update Student Payment</h2>
            <hr />
            <Row className='justify-content-center my-3'>
                <Col lg="10">
                    {error ?
                        <Alert variant="danger" className='my-2'>{error}</Alert>
                        : ""}
                    <Form id='add-payment-form' onSubmit={handleSubmit}>
                        <Row>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Student</Form.Label>
                                    <Form.Control type="text" value={studentName} disabled />
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Payment Month</Form.Label>
                                    <Form.Select value={paymentMonth} onChange={(e) => setPaymentMonth(e.target.value)} name='payment_month'>
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
                                    <Form.Control type="text" name='payment_year' placeholder="Enter year" value={paymentYear} onChange={(e) => setPaymentYear(e.target.value)} />
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
                                    <Form.Control type="text" name='payment_fee' placeholder="Enter amount of fee" value={paymentFee} onChange={(e) => setPaymentFee(e.target.value)} />
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
                                    <Form.Control type="date" name='payment_date' value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} />
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

export default EditPayment