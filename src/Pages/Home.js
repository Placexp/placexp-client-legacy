import React, { useContext } from "react";
import Sidebar from "../Component/Layout/Sidebar";
import Header from "../Component/Layout/Header";
import { Container } from "react-bootstrap";
import Slider from "../Component/Layout/Slider";
import Footer from "../Component/Layout/Footer";
import './Home.css';
import Context from '../context'
const Home = () => {
    const {State,dispatch}=useContext(Context)
  return (
    <div>
      <div className="home" id="homepage">
     {State.isAuth &&   <Sidebar />}
        <Header />
      </div>
      <Container className="main home-container">
        <h1 className="title font-weight-light text-center text-lg-center mt-4 mb-0 font-size-20">Welcome to Placexp</h1>
        <div
        style={{
          width: '1.9375em',
          margin: '0px auto',
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: '#ef4c23',
          borderImage: 'initial'
        }}
      />
      <br />
        <Slider />
        <div className="about">
          <h1 className="font-weight-light text-center text-lg-center mt-4 mb-0 font-size-20">About Us</h1>
          <div
        style={{
          width: '1.9375em',
          margin: '0px auto',
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: '#ef4c23',
          borderImage: 'initial'
        }}
      />
      <br />
          <p className="about-p1">
            The idea of bringing various integrated marketing service needs
            under one roof is our reason to exist.
          </p>
          <p>
            We've put together an Integrated Team of Creators, Designers,
            Technologists, Media Planners and Film Creators under one roof to
            deliver your Business the whole Schbang. Our Team of 250 sits across
            the cities of Mumbai and Bengaluru to serve our clients across
            categories.
          </p>
        </div>

        <div className="about">

          <h1 className="font-weight-light text-center text-lg-center mt-4 mb-0 font-size-20">Our Services</h1>
          <div
        style={{
          width: '1.9375em',
          margin: '0px auto',
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: '#ef4c23',
          borderImage: 'initial'
        }}
      />
      <br />
            
         
          <p className="about-p1">
            The idea of bringing various integrated marketing service needs
            under one roof is our reason to exist.
          </p>
          <p>
            We've put together an Integrated Team of Creators, Designers,
            Technologists, Media Planners and Film Creators under one roof to
            deliver your Business the whole Schbang. Our Team of 250 sits across
            the cities of Mumbai and Bengaluru to serve our clients across
            categories.
          </p>
          <div className="contactUs">
            <div>
              <img
                className="contact-img"
                src="https://i.pinimg.com/originals/43/28/c3/4328c30611e0c3a5556fa1d4cb35dae7.png"
              />
              <p>Calculator</p>
            </div>
            <div>
              <img
                className="contact-img"
                src="data:image/jpeg;base64,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"
              />
              <p>Mail</p>
            </div>
            <div>
              <img
                className="contact-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMIZCjP-Kxo1YHtOPKc6PlD3CCUpn5b-nKgw&usqp=CAU"
              />
              <p>Info</p>
            </div>
            <div>
              <img
                className="contact-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyqm-crfP0qgK-WR4U-pBoOocOBbMYLjUZvQ&usqp=CAU"
              />
              <p>Chat</p>
            </div>
            <div>
              <img
                className="contact-img"
                src="data:image/png;base64,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"
              />
              <p>Notifications</p>
            </div>
          </div>
        </div>

        <div className="about ">
          <h1 className="contact-heading font-weight-light text-center text-lg-center mt-4 mb-0 font-size-20">Contact Us</h1>
            <div
        style={{
          width: '1.9375em',
          margin: '0px auto',
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: '#ef4c23',
          borderImage: 'initial'
        }}
      />
      <br />
          <div className="contactUs">
            <div>
              <img
                className="contact-img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
              />
              <p>Instagram</p>
            </div>
            <div>
              <img
                className="contact-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgvRWnaCHb6by8oA_iz9Z6QsXCiK56EtnCBw&usqp=CAU"
              />
              <p>Facebook</p>
            </div>
            <div>
              <img
                className="contact-img"
                src="https://image.flaticon.com/icons/png/512/174/174857.png"
              />
              <p>LinkedIn</p>
            </div>
            <div>
              <img
                className="contact-img"
                src="https://cdn.worldvectorlogo.com/logos/messages-ios.svg"
              />
              <p>Messaging</p>
            </div>
            <div>
              <img
                className="contact-img"
                src="https://image.flaticon.com/icons/png/512/281/281769.png"
              />
              <p>Email</p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;