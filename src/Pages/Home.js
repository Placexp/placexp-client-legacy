import React, { useContext } from "react";
import Header from "../Component/Layout/Header";
import Slider from "../Component/Layout/Slider";
import s1 from '../assets/Images/slider1.png'
import {Link} from 'react-router-dom';
import logo from '../assets/Images/logo-black.png'
import Floating from "../Component/Layout/Floating"
import Context from '../context';
import { useCookies } from 'react-cookie';
import './Home.css';

import bg2 from '../assets/Images/bg11.webp'
import feature1 from '../assets/Images/feature1.webp'
import feature2 from '../assets/Images/feature2.webp'
import feature3 from '../assets/Images/feature3.webp'

const Home = () => {

  const { State, dispatch } = useContext(Context);


  const [cookies, setCookie] = useCookies(['user']);
  return (
    <div id="Home">
      <div class="main ">
        <div className="top">
          <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand"><img src={logo} height="70px" align="left"/></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
              </button>

              <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link active" href="/">Home</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Interviews</a>
                    <div class="dropdown-menu">
                      {State.isAuth && cookies.user.role ==='A'&& <Link className="dropdown-item" to="/interview_create">Add Interviews</Link>}
                      {State.isAuth && cookies.user.role ==='A'&& <Link className="dropdown-item" to="/verifyinterview">Verify Interviews</Link>}
                      <Link className=" dropdown-item" to="/interview">View Interviews</Link>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/Contact">Contact Us</a>
                  </li>
                  <li class="nav-item">
                    {State.isAuth && cookies.user.role ==='A'&& (<Link className="nav-link" to="/logout"><font color="red"><i class="fas fa-power-off"></i></font></Link>)}
                  </li>
                </ul>
              </div>
            </nav>
<br/>
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-5">
                <div class="jumbotron">
                  <h1 class="heading">Hi! Welcome to PlaceXP</h1>
                  <p class="lead">A professional website to keep you up to date with all the academic and placement information of Vellore Institute of Technology, Chennai.</p>
                  <a class="sign1 btn btn-outline-primary btn-lg" href="/auth" role="button">Sign In</a>
                  <a class="sign1 btn btn-outline-primary btn-lg" href="/auth" role="button">Sign Up</a>
                </div>
                </div>
                <br className="d-md-none" />
                <br className="d-md-none" />
                <div class="col-md-7">
                  <img className="main-image w-100" src={bg2}  />
                </div>
              </div>
            </div>
            <br />
            </div>
        
        <br/>

        <div class="features">
        <h1 class="headingf">Features</h1>
          <div class="feature1">
          <div class="row align-items-center">
            <div class="col-md-5">
              <img class="imagesl" src={feature1} />
            </div> <br className="d-md-none" />
                <br className="d-md-none" />
            <div class="col-md-7">
              <div class="jumbotron">
                <h1 class="heading">Up-to-Date Information</h1>
                <p class="lead">Keeps you vigilant about the latest events and placement scenarios for different companies. The data is frequently updated to match the latest trends in the society.</p>
              </div>
            </div>
          </div>
          </div>
         
          <div class="feature2">
          <div class="row align-items-center">
              <div class="col-md-6">
              <div class="jumbotron">
                <h1 class="heading">State-of-the-Art Design</h1>
                <p class="lead">User-friendly and organised to the core while not compromising on the classiness. Let's just say it's modern and elegant, like you.</p>
              </div>
              </div> <br className="d-md-none" />
                <br className="d-md-none" />
              <div class="col-md-2">
                <img class="imagesr" src={feature2} />
              </div>
            </div>
          </div>
          
          
          <div class="feature3">
            <div class="row align-items-center">
              <div class="col-md-5">
                <img class="imagesl" src={feature3} />
              </div> <br className="d-md-none" />
                <br className="d-md-none" />
              <div class="col-md-7">
                <div class="jumbotron">
                  <h1 class="heading">Socially Connected</h1>
                  <p class="lead">Lets you know the opinions and comments your colleagues have on an event or company and allows you to freely discuss your opinion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
       

        <div class="footer ">
					<div class="container">
						<div class="row">
            <div class="col-md-8">
										<header>
											<h1 class="final heading ">Having unresolved queries?</h1>
										</header>
                    </div>
                    <div class="col-md-4">
										<p class="lead ">Contact Us</p>
                    
                    <div class="btn-group" role="group" aria-label="Basic example">
                      <a type="button" class="btn btn-outline-light btn-lg"><i class="fab fa-twitter"></i></a>
                      <a type="button" class="btn btn-outline-light btn-lg"><i class="fab fa-facebook-f"></i></a>
                      <a type="button" href="https://www.instagram.com/placexpvitc/" class="btn btn-outline-light btn-lg"><i class="fab fa-instagram"></i></a>
                      <a type="button" href="https://www.linkedin.com/company/place-xp-vitc/" class="btn btn-outline-light btn-lg"><i class="fab fa-linkedin-in"></i></a>
                    </div>
								</div>
							</div>
						</div>
					</div>


      </div>
    </div>
  );
};

export default Home;
