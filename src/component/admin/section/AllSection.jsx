import React from "react";
import {
    Button,
    Col,
    Container,
    Row,
    Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetAllSectionQuery } from "../../../services/seroveAcademyApi";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const AllSection = () => {
    const sectionData = useGetAllSectionQuery();
    const handleDelete = () => {
        console.log("clicked")
    }
    return (
        <>
            <Container>
                <h2 className="mt-1 text-center">Section List</h2>
                <hr />
                <Row className="justify-content-center">
                    <Col lg="10">

                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Section Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {sectionData?.data?.map((section, key) => (
                                    <tr key={key}>
                                        <td>{section.section}</td>
                                        <td>
                                            <div className="d-flex">
                                                <Link
                                                    to={`/admin/student/${section.id}/edit`}
                                                    className="btn btn-primary btn-sm rounded-circle"
                                                >
                                                    <FiEdit />
                                                </Link>

                                                <Button
                                                    className="btn-danger btn-sm rounded-circle mx-2"
                                                    onClick={() => {
                                                        handleDelete(section.id);
                                                    }}
                                                >
                                                    <MdDeleteOutline />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AllSection;
