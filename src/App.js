import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Component/Header.js";
import Slider from "./Component/Slider.js";
import Footer from "./Component/Footer.js";
import "./App.css";

const App = () => {
  return (
    <div className="main-div">
      <Header />
      <main>
        <Container className="main">
          <h1 className="title">Welcome to Placexp</h1>
          <Slider />
          <div className="about">
            <h1>About Us</h1>
            <p>Who are we?</p>
            <p className="about-p1">
              The idea of bringing various integrated marketing service needs
              under one roof is our reason to exist.
            </p>
            <p>
              We've put together an Integrated Team of Creators, Designers,
              Technologists, Media Planners and Film Creators under one roof to
              deliver your Business the whole Schbang. Our Team of 250 sits
              across the cities of Mumbai and Bengaluru to serve our clients
              across categories.
            </p>
          </div>

          <div className="about">
            <h1>Our Services</h1>
            <p>Who are we?</p>
            <p className="about-p1">
              The idea of bringing various integrated marketing service needs
              under one roof is our reason to exist.
            </p>
            <p>
              We've put together an Integrated Team of Creators, Designers,
              Technologists, Media Planners and Film Creators under one roof to
              deliver your Business the whole Schbang. Our Team of 250 sits
              across the cities of Mumbai and Bengaluru to serve our clients
              across categories.
            </p>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default App;
