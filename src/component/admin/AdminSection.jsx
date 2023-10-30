import React, { useState } from "react";
import { ListGroup, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminSection = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleActiveKeyChange = (newKey) => {
    setActiveLink(newKey);
  };

  const dropdownStyle = {
    backgroundColor: "white",
    color: "black",
    border: "NONE",
  };

  return (
    <div className="my-2 shadow-sm">
      <ListGroup activeKey={activeLink}>
        <ListGroup.Item
          action
          as={Link}
          to="/admin"
          onClick={() => handleActiveKeyChange("admin")}
        >
          <span className="ms-3">Admin Home</span>
        </ListGroup.Item>

        <ListGroup.Item>
          <Dropdown>
            <Dropdown.Toggle style={dropdownStyle} id="dropdown-basic">
              Student
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
              as={Link}
              to="/admin/allstudent"
              >
                Student List
              </Dropdown.Item>
              <Dropdown.Item as={Link}
              to="/admin/addstudent">
                Add Student
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ListGroup.Item>

        <ListGroup.Item>
          <Dropdown>
            <Dropdown.Toggle style={dropdownStyle} id="dropdown-basic">
              Section
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/admin/allsection">
                Section List
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/admin/addsection">
                Add Section
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ListGroup.Item>

        <ListGroup.Item>
          <Dropdown>
            <Dropdown.Toggle style={dropdownStyle} id="dropdown-basic">
              Student Payment
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/admin/allpayment">
                Payment List
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/admin/addpayment">
                Add Payment
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ListGroup.Item>

        <ListGroup.Item>
          <Dropdown>
            <Dropdown.Toggle style={dropdownStyle} id="dropdown-basic">
              Trainer
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/admin/alltrainer">
                Trainer List
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/admin/addtrainer">
                Add Trainer
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default AdminSection;
