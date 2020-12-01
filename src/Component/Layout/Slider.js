import React from "react";
import { Container, Carousel } from "react-bootstrap";
//import "./Slider.css";

const Slider = () => {
  return (
    <div id='slider'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-200 carousel-img"
            src="https://previews.123rf.com/images/siridhata/siridhata1701/siridhata170100044/70094604-flat-calculator-vector-illustration-with-long-shadow.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" d-block w-200 carousel-img"
            src="https://image.freepik.com/free-vector/news-concept-illustration-flat-design_23-2148268772.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-200 carousel-img"
            src="https://thumbs.dreamstime.com/z/webinar-online-training-internet-based-seminar-banner-people-characters-cartoon-using-distance-communication-technology-e-162040425.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;