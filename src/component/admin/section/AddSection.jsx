import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Form, Row, Col, Button} from 'react-bootstrap'
import { useAddSectionMutation } from '../../../services/seroveAcademyApi'
import {  toast } from 'react-toastify';
const AddSection = () => {
    const [addSection] = useAddSectionMutation()
    const [serverError, setServerError] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            section: data.get('section'),
        }
        const res = await addSection(actualData)
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
        <>
            <Container>
                <h2 className='my-2'>Add Section</h2>
                <hr />
                <Row className='justify-content-center my-3'>
                    <Col lg="10">
                        <Form id='add-section-form' onSubmit={handleSubmit}>
                            <Row>
                                <Col lg='6'>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Section Name</Form.Label>
                                        <Form.Control type="text" name='section' placeholder="Enter Section Name" />
                                        {serverError.section ?
                                            <Form.Text style={{ "color": "red", "fontSize": 12, "paddingLeft": 10 }}>
                                                {serverError.section}
                                            </Form.Text>
                                            : ""}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="">
                                <Button className="btn btn-success my-2 w-25" type='submit' size='md'>Submit</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AddSection