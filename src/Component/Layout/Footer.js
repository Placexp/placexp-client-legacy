import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="foot">
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Placexp</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;