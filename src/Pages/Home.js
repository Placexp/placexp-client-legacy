import React, { useContext } from "react";
import Header from "../Component/Layout/Header";
import Slider from "../Component/Layout/Slider";
import Floating from "../Component/Layout/Floating"
const Home = () => {

  
  return (
    <div className="container">
        <Header />
      <Slider />
   <Floating/>
    </div>
  );
};

export default Home;