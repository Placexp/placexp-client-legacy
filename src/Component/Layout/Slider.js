import React from "react";

import "./Slider.css"

import s1 from '../../assets/Images/slider1.png'
import s2 from '../../assets/Images/Slider2.png'
import AwesomeSlider from 'react-awesome-slider';
//import 'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
const Slider = () => {
  return (
    <div className="container " >    <AwesomeSlider  cssModule={AwesomeSliderStyles} >
   <div><img src={s1} className="w-100" /></div> 
   <div><img src={s2} className="w-100"/></div> 
 </AwesomeSlider>
 </div>
  );
};

export default Slider;
