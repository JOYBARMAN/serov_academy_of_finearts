import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row,Container,Col,Form,Button } from 'react-bootstrap'
import { domain } from '../../../services/seroveAcademyApi'
const AddPayment = () => {
    const [studentData, setStudentData] = useState([])
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [serverError,setServerError] = useState({})
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            student: data.get('student'),
            payment_month: data.get('payment_month'),
            payment_year: data.get('payment_year'),
            payment_fee: data.get('payment_fee'),
            payment_date: data.get('payment_date')
        }
        axios.post(`${domain}/student/`, actualData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                toast.success(res.data.msg, {
                    position: "top-right",
                    theme: "light"
                })
            })
            .catch(err => {
                setServerError(err.response.data.errors)
            })
    }
    
        // Get next page student data
        // const nextPage = () => {
        //     setIsLoading(true)
        //     axios.get(studentData.next)
        //         .then(response => {
        //             setIsLoading(false)
        //             setStudentData(response.data)
        //             setData(response.data.results);
        //         })
        //         .catch(error => {
        //             setIsLoading(false)
        //             setError(error)
        //         });
        // }
    
        // Get Previous page student data
        // const previousPage = () => {
        //     setIsLoading(true)
        //     axios.get(studentData.previous)
        //         .then(response => {
        //             setIsLoading(false)
        //             setStudentData(response.data)
        //             setData(response.data.results);
        //         })
        //         .catch(error => {
        //             setIsLoading(false)
        //             setError(error)
        //         });
        // }
    
        // Get all student data
        useEffect(() => {
            axios.get(`${domain}/student/`)
                .then(response => {
                    setIsLoading(false)
                    setStudentData(response.data)
                    setData(response.data.results);
                })
                .catch(error => {
                    setIsLoading(false)
                    setError(error)
                });
        }, []);
  return (
    <Container>
    <h2 className='my-2'>Add Student Payment</h2>
    <hr />
    <Row className='justify-content-center my-3'>
        <Col lg="10">
            <Form id='add-student-form' onSubmit={handleSubmit}>
                <Row>
                <Col lg='6'>
                        <Form.Group className="mb-3" >
                            <Form.Label>Student</Form.Label>
                            <Form.Select name='student'>
                                {data?.map((student,key) => <option key={key} value={student.id}>{student.name} / Section: {student.section.section}</option>)}
                            </Form.Select>
                            {/* {serverError.section ?
                                <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                    {serverError.section}
                                </Form.Text>
                                : ""} */}
                        </Form.Group>
                    </Col>
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
                            {/* {serverError.blood ?
                                <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                    {serverError.blood}
                                </Form.Text>
                                : ""} */}
                        </Form.Group>
                    </Col>
                    <Col lg='6'>
                        <Form.Group className="mb-3" >
                            <Form.Label>Payment Year</Form.Label>
                            <Form.Control type="text" name='payment_year' placeholder="Enter year" />
                            {/* {serverError.name ?
                                <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                    {serverError.name}
                                </Form.Text>
                                : ""} */}
                        </Form.Group>
                    </Col>
                    <Col lg='6'>
                        <Form.Group className="mb-3" >
                            <Form.Label>Payment Fee</Form.Label>
                            <Form.Control type="text" name='payment_fee' placeholder="Enter amount of fee" />
                            {/* {serverError.father_name ?
                                <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                    {serverError.father_name}
                                </Form.Text>
                                : ""} */}
                        </Form.Group>
                    </Col>
   
                    <Col lg='6'>
                        <Form.Group className="mb-3" >
                            <Form.Label>Payment Date</Form.Label>
                            <Form.Control type="date" name='payment_date' />
                            {/* {serverError.admission_date ?
                                <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                    {serverError.admission_date}
                                </Form.Text>
                                : ""} */}
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
