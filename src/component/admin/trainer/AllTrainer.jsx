import React, { useEffect, useState } from 'react'
import { Alert, Button, Col, Container, Row, Spinner, Form, Table, Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FiEdit } from 'react-icons/fi'
import { MdDeleteOutline } from 'react-icons/md'
import axios from 'axios'
import { domain } from '../../../services/seroveAcademyApi'
import { toast } from 'react-toastify'

const AllTrainer = () => {
    const [trainerData, setTrainerData] = useState([])
    const [data, setData] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    // real time search student data
    const handleSearchQueryChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        if (query.trim() !== '') {
            setIsLoading(true)
            axios.get(`${domain}/trainer/search/?search=${query}`)
                .then(response => {
                    setIsLoading(false)
                    setTrainerData(response.data)
                    setData(response.data.results);
                })
                .catch(error => {
                    setIsLoading(false)
                    setError(error)
                });
        }
        else {
            setIsLoading(true)
            axios.get(`${domain}/trainer/`)
                .then(response => {
                    setIsLoading(false)
                    setTrainerData(response.data)
                    setData(response.data.results);
                })
                .catch(error => {
                    setIsLoading(false)
                    setError(error)
                });
        }
    }


    // Delete a student data 
    const handleDelete = (id) => {
        axios.delete(`${domain}/trainer/${id}/`)
            .then(response => {
                setData(data.filter(item => item.id !== id));
                toast.success("Trainer Deleted")
            })
            .catch(error => {
                setError(error)
            });
    }

    // Get next page trainer data
    const nextPage = () => {
        setIsLoading(true)
        axios.get(trainerData.next)
            .then(response => {
                setIsLoading(false)
                setTrainerData(response.data)
                setData(response.data.results);
            })
            .catch(error => {
                setIsLoading(false)
                setError(error)
            });
    }

    // Get Previous page trainer data
    const previousPage = () => {
        setIsLoading(true)
        axios.get(trainerData.previous)
            .then(response => {
                setIsLoading(false)
                setTrainerData(response.data)
                setData(response.data.results);
            })
            .catch(error => {
                setIsLoading(false)
                setError(error)
            });
    }

    // Get all student data
    useEffect(() => {
        axios.get(`${domain}/trainer/`)
            .then(response => {
                setIsLoading(false)
                setTrainerData(response.data)
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
                <h2 className='my-2'>Trainer List</h2>
                <hr />
                <Row className='justify-content-center'>
                    <Col lg="10" >
                        <div className='d-flex justify-content-between'>
                            <Form className=''>
                                <Form.Group className="my-3 d-flex">
                                    <Form.Label className='mt-2 mx-1'>Search:</Form.Label>
                                    <Form.Control className='' type="text" placeholder="Search Trainer Name" value={searchQuery} onChange={handleSearchQueryChange} />
                                </Form.Group>
                            </Form>
                        </div>

                        {error ?
                            <Alert variant="danger" className='my-2'>Something is wrong !</Alert>
                            : ""}

                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    <th>Enrollment Date</th>
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
                                {data?.map((trainer, key) =>
                                    <tr key={key}>
                                        <td><Link to="#">{trainer.name}</Link></td>
                                        <td>{trainer.designation}</td>
                                        <td className='text-primary fw-bold'>{trainer.gender}</td>
                                        <td>{trainer.email}</td>
                                        <td>{trainer.enrollment_date}</td>
                                        <td>
                                            <div className='d-flex'>
                                                <Link to={`/admin/trainer/${trainer.id}/edit`} className='btn btn-primary btn-sm rounded-circle'><FiEdit /></Link>

                                                <Button className='btn-danger btn-sm rounded-circle mx-2' onClick={() => { handleDelete(trainer.id) }}><MdDeleteOutline /></Button>
                                            </div>
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </Table>
                        <div className='my-3'>
                            <Pagination className='justify-content-center'>

                                {trainerData.previous ? <Button className='btn-sm mx-3' onClick={() => { previousPage() }}>Previous</Button> : <Button className='btn-sm disabled mx-3'>Previous</Button>}

                                {trainerData.next ? <Button className='btn-sm' onClick={() => { nextPage() }}>Next</Button> : <Button className='btn-sm disabled '>Next</Button>}

                            </Pagination>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AllTrainer