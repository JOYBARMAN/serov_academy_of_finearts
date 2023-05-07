import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { Container, Col, Row, Image,Button } from 'react-bootstrap'
import { useDetailStudentQuery } from '../../../services/seroveAcademyApi'
const DetailStudent = () => {
    const { id } = useParams()
    const { data } = useDetailStudentQuery(id)
    return (
        <>
            <Container>
                <h2 className='my-2'>Student Detail Page</h2>
                <hr />
                <Row className='justify-content-center my-2'>
                    <div className='d-flex justify-content-end'>
                        <Link to={`/admin/student/${id}/edit`} className='btn btn-primary btn-sm mx-2'>Edit</Link>
                        <Button className='btn btn-danger btn-sm'>Delete</Button>
                    </div>
                    <Col lg="8">
                        <Row className=' text-lg-start text-center'>
                            <Col md={4}>
                                <Image src={`http://localhost:8000${data?.photo}`} height={150} width={150}/>
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
            </Container >
        </>

    )
}

export default DetailStudent