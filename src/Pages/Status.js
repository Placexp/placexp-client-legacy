import React, { useContext } from "react";
import Sidebar from "../Component/Layout/Sidebar";
import Header from "../Component/Layout/Header";
import { Container } from "react-bootstrap";
import Slider from "../Component/Layout/Slider";
import Footer from "../Component/Layout/Footer";
import Statusview from "./Statusview";
import './Status.css';

const Status = ({ text, date }) => {
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
        <img src={a} className="w-25" style={{float:"right"}} />
          <h1 className="font-weight-light  mt-4 mb-0 font-size-20">About Us  </h1>
          <div
        style={{
          width: '1.9375em',
          margin: '0px auto',
          marginLeft:"50px",
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: '#ef4c23',
          borderImage: 'initial',
         
        }}
      />
      <br />
      <Statusview text="Submitted" />
      <Statusview text="Under Process" />
      <Statusview text="Published" />
      <Footer />
    <div/>
  );
};
