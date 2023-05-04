import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table, Spinner, Pagination, Form, Dropdown, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { domain } from '../../../services/seroveAcademyApi'
import { FiEdit } from 'react-icons/fi'
import { MdDeleteOutline } from 'react-icons/md'
import { toast } from 'react-toastify'
import axios from 'axios'
const AllStudent = () => {
    const [studentData, setStudentData] = useState([])
    const [data, setData] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    // search student data
    // const handleSearch = async (e) => {
    //     e.preventDefault();
    //     setIsLoading(true)
    //     axios.get(`${domain}/student/search/?search=${searchQuery}`)
    //         .then(response => {
    //             setStudentData(response.data)
    //             setData(response.data.results);
    //             setIsLoading(false)
    //         })
    //         .catch(error => {
    //             setError(error)
    //             setIsLoading(false)
    //         });
    // }

    function handleSearchQueryChange(event) {
        const query = event.target.value;
        setSearchQuery(query);
        if (query.trim() !== '') {
            setIsLoading(true)
            axios.get(`${domain}/student/search/?search=${query}`)
                .then(response => {
                    setIsLoading(false)
                    setStudentData(response.data)
                    setData(response.data.results);
                })
                .catch(error => {
                    setIsLoading(false)
                    setError(error)
                });
        }
        else {
            setIsLoading(false)
            setData([]);
        }
    }

    // Delete a student data 
    const handleDelete = (id) => {
        axios.delete(`${domain}/student/${id}/`)
            .then(response => {
                setData(data.filter(item => item.id !== id));
                toast.success("Student Deleted")
            })
            .catch(error => {
                setError(error)
            });
    }

    // Get next page student data
    const nextPage = () => {
        setIsLoading(true)
        axios.get(studentData.next)
            .then(response => {
                setIsLoading(false)
                setStudentData(response.data)
                setData(response.data.results);
            })
            .catch(error => {
                setIsLoading(false)
                setError(error)
            });
    }

    // Get Previous page student data
    const previousPage = () => {
        setIsLoading(true)
        axios.get(studentData.previous)
            .then(response => {
                setIsLoading(false)
                setStudentData(response.data)
                setData(response.data.results);
            })
            .catch(error => {
                setIsLoading(false)
                setError(error)
            });
    }

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
        <>
            <Container>
                <h2 className='my-2'>Student List</h2>
                <hr />
                <Row className='justify-content-center'>
                    <Col lg="10" >
                        <div className='d-flex'>
                            <Form className=''>
                                <Form.Group className="my-3 d-flex">
                                    <Form.Label className='mt-2 mx-1'>Search:</Form.Label>
                                    <Form.Control className='' type="text" placeholder="Search Name" value={searchQuery} onChange={handleSearchQueryChange} />
                                    {/* <Button type='submit'>submit</Button> */}
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
                                {error ?
                                    <tr>
                                        <td>
                                            <p className='text-danger'>Something is wrong !</p>
                                        </td>
                                    </tr>
                                    : ""}
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
                                        <td className='text-primary fw-bold'>{student.section}</td>
                                        <td>{student.gender}</td>
                                        <td>{student.mobile}</td>
                                        <td>{student.admission_date}</td>
                                        <td>
                                            <div className='d-flex'>
                                                <Button className='btn-sm rounded-circle'><FiEdit /></Button>

                                                <Button className='btn-danger btn-sm rounded-circle mx-2' onClick={() => { handleDelete(student.id) }}><MdDeleteOutline /></Button>
                                            </div>
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </Table>
                        <div className='my-3'>
                            <Pagination className='justify-content-center'>

                                {studentData.previous ? <Button className='btn-sm mx-3' onClick={() => { previousPage() }}>Previous</Button> : <Button className='btn-sm disabled mx-3'>Previous</Button>}

                                {studentData.next ? <Button className='btn-sm' onClick={() => { nextPage() }}>Next</Button> : <Button className='btn-sm disabled '>Next</Button>}

                            </Pagination>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AllStudent