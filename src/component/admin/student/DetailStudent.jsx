import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Col, Row, Image, Button, Alert, Table, Spinner, Pagination } from 'react-bootstrap'
import { useDetailStudentQuery, domain } from '../../../services/seroveAcademyApi'
import { MdDeleteOutline } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import axios from 'axios'
import { toast } from 'react-toastify'
const DetailStudent = () => {
    const { id } = useParams()
    const { data } = useDetailStudentQuery(id)
    const [paymentRes, setPaymentRes] = useState([])
    const [paymentData, setPaymentData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    // Delete a student payment data
    const handleDelete = (id) => {
        axios.delete(`${domain}/student_payment/${id}/`)
            .then(response => {
                setPaymentData(paymentData.filter(item => item.id !== id));
                toast.success("Student Payment Deleted")
                console.log("res", response)
            })
            .catch(error => {
                setError(error)
                console.log("err", error)
            });
    }

    // Get next page student data
    const nextPage = () => {
        setIsLoading(true)
        axios.get(paymentData.next)
            .then(response => {
                setIsLoading(false)
                setPaymentRes(response.data)
                setPaymentData(response.data.results);
            })
            .catch(error => {
                setIsLoading(false)
                setError(error)
            });
    }

    // Get Previous page student data
    const previousPage = () => {
        setIsLoading(true)
        axios.get(paymentData.previous)
            .then(response => {
                setIsLoading(false)
                setPaymentRes(response.data)
                setPaymentData(response.data.results);
            })
            .catch(error => {
                setIsLoading(false)
                setError(error)
            });
    }
    useEffect(() => {
        setIsLoading(true)
        axios.get(`${domain}/student_payment/student/?student=${id}`)
            .then(response => {
                setIsLoading(false)
                setPaymentRes(response.data)
                setPaymentData(response.data.results);
            })
            .catch(error => {
                setIsLoading(false)
                setError(error)
            });
    }, [id]);
    return (
        <>
            <Container>
                {/* student detail section  start*/}

                <h2 className='mt-1 text-center'>Student Detail Page</h2>
                <hr />
                <Row className='justify-content-center my-2'>
                    <div className='d-flex justify-content-center justify-content-lg-end'>
                        <Link to={`/admin/student/${id}/edit`} className='btn btn-primary btn-sm mx-2'>Edit</Link>
                        <Button className='btn btn-danger btn-sm'>Delete</Button>
                    </div>
                    <Col lg="8" className='mt-3'>
                        <Row className=' text-lg-start text-center'>
                            <Col md={4} className='my-2'>
                                <Image src={`http://localhost:8000${data?.photo}`} height={150} width={150} />
                            </Col>
                            <Col md={4}>
                                <p>Name : <span className='text-primary'>{data?.name}</span></p>
                                <p>Father Name : {data?.father_name}</p>
                                <p>Mother Name : {data?.mother_name}</p>
                                <p>Student Id : {data?.student_id}</p>
                                <p>Section : <span className='text-primary'>{data?.section?.section}</span></p>
                            </Col>
                            <Col md={4}>
                                <p >Email : {data?.email}</p>
                                <p>Gender : {data?.gender}</p>
                                <p>Blood : {data?.blood}</p>
                                <p>Address : {data?.address}</p>
                                <p>Admission : {data?.admission_date}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/* student detail section end  */}

                {/* student payment section start */}
                <h2 className='mt-5 mb-2 text-center'>Payment Information</h2>
                <hr />
                <Row className='justify-content-center'>
                    <Col lg="10" >

                        {error ?
                            <Alert variant="danger" className='my-2'>Something is wrong !</Alert>
                            : ""}

                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Student Name</th>
                                    <th>Payment Month</th>
                                    <th>Payment Fee</th>
                                    <th>Payment Date</th>
                                    <th>Payment Year</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isLoading ?
                                    <tr>
                                        <td>
                                            <Spinner animation="border" variant="primary" />
                                        </td>
                                    </tr>
                                    : ""}
                                {paymentData.length ? (
                                    paymentData.map((payment, key) => (
                                        <tr key={key}>
                                            <td><Link to="#">{payment.student.name}</Link></td>
                                            <td className='text-primary fw-bold'>{payment.payment_month}</td>
                                            <td>{payment.payment_fee}</td>
                                            <td>{payment.payment_date}</td>
                                            <td>{payment.payment_year}</td>
                                            <td>
                                                <div className='d-flex'>
                                                    <Link to={`/admin/payment/${payment.id}/edit`}  className='btn btn-primary btn-sm rounded-circle'><FiEdit /></Link>
                                                    <Button className='btn-danger btn-sm rounded-circle mx-2' onClick={() => { handleDelete(payment.id) }}><MdDeleteOutline /></Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center text-danger">No payment data available</td>
                                    </tr>
                                )}


                            </tbody>
                        </Table>
                        <div className='my-3'>
                            <Pagination className='justify-content-center'>

                                {paymentRes.previous ? <Button className='btn-sm mx-3' onClick={() => { previousPage() }}>Previous</Button> : <Button className='btn-sm disabled mx-3'>Previous</Button>}

                                {paymentRes.next ? <Button className='btn-sm' onClick={() => { nextPage() }}>Next</Button> : <Button className='btn-sm disabled '>Next</Button>}

                            </Pagination>
                        </div>
                    </Col>
                </Row>
            </Container >
        </>

    )
}

export default DetailStudent