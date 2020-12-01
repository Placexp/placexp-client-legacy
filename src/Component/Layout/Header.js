import React,{useContext} from "react";
import Context from '../../context';
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import {Link} from 'react-router-dom';
const Header = () => {
    const { State, dispatch } = useContext(Context);
  return (
    <header id="head">
      <Navbar variant="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Placexp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="about">About Us</Nav.Link>
              <Nav.Link href="service">Services</Nav.Link>
              <Nav.Link > <Link className="link" to="events">Events</Link></Nav.Link>
              <Nav.Link > {State.isAuth?(<Link className="link" to="logout">Logout</Link>):(<Link className="link" to="auth">Sign In</Link>)}</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;