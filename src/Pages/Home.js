import React, { useContext } from "react";
import Header from "../Component/Layout/Header";
import Slider from "../Component/Layout/Slider";
import s1 from "../assets/Images/slider1.png";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo-black.png";
import Floating from "../Component/Layout/Floating";
import Context from "../context";
import { useCookies } from "react-cookie";
import "./Home.css";

import bg2 from "../assets/Images/bg11.webp";
import feature1 from "../assets/Images/feature1.webp";
import feature2 from "../assets/Images/feature2.webp";
import feature3 from "../assets/Images/feature3.webp";
import feature4 from "../assets/Images/feature4.webp";

const Home = () => {
  const { State, dispatch } = useContext(Context);

  const [cookies, setCookie] = useCookies(["user"]);
  return (
    <div id="Home">
      <div class="main ">
        <div className="top">
          <Header />
          <br />
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-5">
                <div class="jumbotron">
                  <h1 class="heading">Hi! Welcome to PlaceXP</h1>
                  <p class="lead">
                    A professional website to keep you up to date with all the
                    academic and placement information of Vellore Institute of
                    Technology, Chennai.
                  </p>
                  {!cookies.user && (
                    <>
                      <a
                        class="sign1 btn btn-outline-primary btn-lg"
                        href="/auth"
                        role="button"
                      >
                        Sign In
                      </a>
                      <a
                        class="sign1 btn btn-outline-primary btn-lg"
                        href="/auth"
                        role="button"
                      >
                        Sign Up
                      </a>
                    </>
                  )}
                  {cookies.user && (
                    <a
                      class="sign1 btn btn-outline-primary btn-lg"
                      href="/Contact"
                      role="button"
                    >
                      Contact Us
                    </a>
                  )}
                </div>
              </div>
              <br className="d-md-none" />
              <br className="d-md-none" />
              <div class="col-md-7">
                <img className="main-image w-100" src={bg2} />
              </div>
            </div>
          </div>
          <br />
        </div>

        <br />

        <div class="features">
          <h1 class="headingf">Features</h1>

          <div class="feature2">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="jumbotron">
                  <h1 class="heading"> Interview Experience</h1>
                  <p class="lead">
                    A complete collection of interviews from formerly placed
                    students to ease your placement journey
                  </p>
                </div>
              </div>{" "}
              <br className="d-md-none" />
              <br className="d-md-none" />
              <div class="col-md-2">
                <img class="imagesr" src={feature2} />
              </div>
            </div>
          </div>
          <h1 class="headingf">Coming Soon</h1>
          <div class="feature3">
            <div class="row align-items-center">
              <div class="col-md-5">
                <img class="imagesl" src={feature3} />
              </div>{" "}
              <br className="d-md-none" />
              <br className="d-md-none" />
              <div class="col-md-7">
                <div class="jumbotron">
                  <h1 class="heading">DSPACE</h1>
                  <p class="lead">
                    Past years question papers , reference materials and what
                    not!!! Anything and Everything of your courses !!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="feature4">
            <div class="row align-items-center">
              <br className="d-md-none" />
              <br className="d-md-none" />
              <div class="offset-1 col-md-6">
                <div class="jumbotron">
                  <h1 class="heading">Hackathons</h1>
                  <p class="lead">
                    Stay in the know with all upcoming hackathons right here!
                    Register with your friends and have fun while learning and
                    creating!!
                  </p>
                </div>
              </div>{" "}
              <div class="col-md-5">
                <img class="imagesl" src={feature4} />
              </div>
            </div>
          </div>
        </div>

        <div class="footer ">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <header>
                  <h1 class="final heading ">Having unresolved queries?</h1>
                </header>
              </div>
              <div class="col-md-12 contactus">
                <p class="lead ">Contact Us</p>

                <div class="btn-group" role="group" aria-label="Basic example">
                  <a
                    type="button"
                    href="https://www.youtube.com/channel/UC3APG4AIn5H7PK4opSid_Vw"
                    class="btn btn-outline-light btn-lg"
                  >
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a
                    type="button"
                    href="https://www.instagram.com/placexpvitc/"
                    class="btn btn-outline-light btn-lg"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a
                    type="button"
                    href="https://www.linkedin.com/company/place-xp-vitc/"
                    class="btn btn-outline-light btn-lg"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div class="col-md-12 TermsofUse">
                  <a href="/Policy">Terms of Use</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
