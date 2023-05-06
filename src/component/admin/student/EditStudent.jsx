import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
const EditStudent = () => {
    const { id } = useParams()
    return (
        <>
            <Container>
                <h2 className='my-2'>Student Edit Page {id}</h2>
                <hr />
            </Container>
        </>
    )
}

export default EditStudent