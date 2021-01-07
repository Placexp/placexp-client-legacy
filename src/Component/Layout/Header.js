import React,{useContext} from "react";
import Context from '../../context';
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import {Link} from 'react-router-dom';
import logo from '../../assets/Images/logo.png'
import { useCookies } from 'react-cookie';
const Header = () => {
    const { State, dispatch } = useContext(Context);
   

    const [cookies, setCookie] = useCookies(['user']);
  return (
    <header id="head">
      <Navbar variant="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/"><img style={{width:"50px"}}  src={logo}/>Placexp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
             {/* { <Nav.Link href="about">About Us</Nav.Link>
              <Nav.Link href="service">Services</Nav.Link>
              } */}
              <Nav.Link > </Nav.Link>
              <NavDropdown title="Events" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link className="link" to="/events">View Events</Link></NavDropdown.Item>
              {State.isAuth && cookies.user.role!='S'&& (<NavDropdown.Item ><Link className="link" to="/event/new">Create Event</Link></NavDropdown.Item>)}
              {State.isAuth && cookies.user.role=='A'&& ( <NavDropdown.Item ><Link className="link" to="/verify">Verify Event</Link></NavDropdown.Item>)}
                </NavDropdown>
              <Nav.Link > <Link className="link" to="/doubt">Doubt</Link></Nav.Link>
            {State.isAuth?( <NavDropdown title={cookies.user.personalDetails.name} id="basic-nav-dropdown2"><NavDropdown.Item ><Link className="link" to="/profile">Profile</Link></NavDropdown.Item><NavDropdown.Item ><Link className="link" to="/logout">Logout</Link></NavDropdown.Item> </NavDropdown>):(<Nav.Link><Link className="link" to="/auth">Sign In</Link></Nav.Link>)}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;