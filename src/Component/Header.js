import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar variant="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Placexp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="about">About Us</Nav.Link>
              <Nav.Link href="service">Services</Nav.Link>

              <Nav.Link href="login">Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
