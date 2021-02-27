import React, { useContext } from "react";
import Header from "../Component/Layout/Header";
import Slider from "../Component/Layout/Slider";
import s1 from '../assets/Images/slider1.png'
import {Link} from 'react-router-dom';
import logo from '../assets/Images/logo.png'
import s2 from '../assets/Images/Slider2.png'
import Floating from "../Component/Layout/Floating"
import Context from '../context';
import { useCookies } from 'react-cookie';
const Home = () => {

  const { State, dispatch } = useContext(Context);
   

  const [cookies, setCookie] = useCookies(['user']);
  return (
    <div >
    
   <nav class="navbar navbar-expand-lg navbar-light fixed-top">
  <div class="container-fluid">
   <Link className="nav-link" to="/"><img style={{width:"50px"}}  src={logo}/>Placexp</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Interview
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link className=" dropdown-item" to="/interview">View</Link>
        {State.isAuth && cookies.user.role=='A'&& <Link className="link" to="/interview_create">Add</Link>}
        {State.isAuth && cookies.user.role=='A'&& (<Link className="link dropdown-item" to="/verifyinterview">Veriy</Link>)}   
         
          </div>
        </li>
<li class="nav-item">
{!State.isAuth && cookies.user==null&& (<Link className="nav-link " to="/auth">SignIn</Link>)}
          {State.isAuth && cookies.user.role=='A'&& (<Link className="nav-link " to="/logout"><font color="red">Logout</font></Link>)}
        </li>
</ul>
</div>
</div>
</nav>

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>

</ol>
<div class="carousel-inner">
    <div class="carousel-item active"  style={{backgroundImage:s1}}>
      <img class="d-block w-100"  height="625px" src={s1} alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
    
</div>
</div>
<div class="carousel-item">
      <img class="d-block w-100"  height="625px"  src={s2} alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block">
      
</div>
</div>

</div>
<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<Floating/> 
    </div>
  );
};

export default Home;
