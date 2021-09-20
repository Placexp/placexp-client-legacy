import React, { useContext } from "react";
import Context from "../../context";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo-purple.png";
import { useCookies } from "react-cookie";
import "./Header.css";
import {decode} from '../../Utils'
const jwt    = require('jsonwebtoken')
const Header = () => {
  const { State, dispatch } = useContext(Context);
  const [cookies, setCookie] = useCookies(["user"]);
  
  const role= cookies.user==null?'':jwt.verify(cookies.user.role,"placexp@123").role;
  
    

  return (
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand">
        <img src={logo} height="70px" align="left" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link active" href="/">
              Home
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Interviews
            </a>
            <div class="dropdown-menu">
              {State.isAuth && role=== "A" && (
                <Link className="dropdown-item" to="/interview_create">
                  Add Interviews
                </Link>
              )}
              {State.isAuth && role === "A" && (
                <Link className="dropdown-item" to="/verifyinterview">
                  Verify Interviews
                </Link>
              )}
              <Link className=" dropdown-item" to="/interview">
                View Interviews
              </Link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              href="/#"
            >
              Hackathons
            </a>
            <div class="dropdown-menu">
              <Link className=" dropdown-item" to="/hackathon">
                View Hackathons
              </Link>
              {State.isAuth && role=== "A" && (
                <Link className="dropdown-item" to="/hackathon_create">
                  Add Hackathons
                </Link>
              )}
            </div>
          </li>
//           <li class="nav-item dropdown">
//             <a
//               class="nav-link dropdown-toggle"
//               data-toggle="dropdown"
//               role="button"
//               aria-haspopup="true"
//               aria-expanded="false"
//               href="/#"
//             >
//               Mock Interviews
//             </a>
//             <div class="dropdown-menu">
//               <Link className=" dropdown-item" to="/mockinterview">
//                 View Mock Interviews
//               </Link>
//             </div>
//           </li>
          <li class="nav-item">
            <a class="nav-link" href="/Contact">
              Contact Us
            </a>
          </li>
          <li class="nav-item">
            {cookies.user  && (
              <Link className="nav-link" to="/logout">
                <font color="red">
                  <i class="fas fa-power-off"></i>
                </font>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
