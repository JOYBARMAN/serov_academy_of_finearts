import React from 'react'
import { Button, Col, Container, Row, Table, Spinner, Pagination, Form, Dropdown, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useGetAllStudentQuery } from '../../../services/seroveAcademyApi'
import { FiEdit } from 'react-icons/fi'
import { MdDeleteOutline } from 'react-icons/md'
const AllStudent = () => {
    const { data, isLoading } = useGetAllStudentQuery()
    return (
        <>
            <Container>
                <h2 className='my-2'>Student List</h2>
                <hr />
                <Row className='justify-content-center'>
                    <Col lg="10" >
                        <div className='d-flex '>
                            <Form className=''>
                                <Form.Group className="my-3 d-flex">
                                    <Form.Label className='mt-2 mx-1'>Search:</Form.Label>
                                    <Form.Control className='' type="text" placeholder="Search Student" />
                                </Form.Group>
                            </Form>
                            <DropdownButton title="Filter By" className='m-3'>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Student Id</th>
                                    <th>Section</th>
                                    <th>Gender</th>
                                    <th>Mobile</th>
                                    <th>Addmision Date</th>
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
                                {data?.map((student, key) =>
                                    <tr key={key}>
                                        <td><Link to="/">{student.name}</Link></td>
                                        <td>{student.student_id}</td>
                                        <td>{student.section}</td>
                                        <td>{student.gender}</td>
                                        <td>{student.mobile}</td>
                                        <td>{student.admission_date}</td>
                                        <td>
                                            <div className='d-flex'>
                                                <Button className='btn-sm rounded-circle'><FiEdit /></Button>
                                                <Button className='btn-danger btn-sm rounded-circle mx-2'><MdDeleteOutline /></Button>
                                            </div>
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </Table>
                        <div className='my-3'>
                            <Pagination className='justify-content-center'>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Ellipsis />
                                <Pagination.Item active>{12}</Pagination.Item>
                                <Pagination.Item>{13}</Pagination.Item>
                                <Pagination.Item>{20}</Pagination.Item>
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AllStudent