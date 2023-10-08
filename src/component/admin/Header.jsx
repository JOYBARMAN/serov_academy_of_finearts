import React from "react";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <div
      style={{ backgroundColor: "#5fcf80", padding: "10px", color: "white" }}
    >
      <Container className="text-center">
        <h2 className="mt-3">Admin Site</h2>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          doloribus laborum molestiae ipsam incidunt temporibus ipsum, ducimus
          tempore rem minus nam aliquam. Tenetur adipisci consequatur ducimus{" "}
        </p>
      </Container>
    </div>
  );
};

export default Header;
