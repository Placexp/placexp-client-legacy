import React, { useEffect, useState } from "react";
import './Events.css';
import FuzzySearch from 'fuzzy-search';
import LazyLoad from 'react-lazyload';
import EventIcon from "@material-ui/icons/Event";
import { eventData } from "./eventData";
import Sidebar from "../Layout/Sidebar";
import Header from "../Layout/Header";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {Url} from '../../Url';
import { useCookies } from 'react-cookie';
function Event() {
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
const [event,setEvent]=useState([]);
const [search,setSearch]=useState('');
const fuzzySearcher = new FuzzySearch(event, ['title', 'subject']);
const result = fuzzySearcher.search(search);
const [cookies, setCookie] = useCookies(['user']);

  useEffect(async() => {
        
    const response= await axios({
     method: 'get',
     withCredentials: true,
     url: Url()+"/event/showAll?id="+cookies.user.id+"&role="+cookies.user.role+"&token="+cookies.user.token,
   });
   console.log(response);
   setEvent(response.data.data);
   console.log(event)
   setLoading(false)
 }, [isLoading]);
 const goToEvent = i => {

          history.push("/details/" + result[i]._id);
        };
 const eventShow=()=>
    {
    const card=[];
    var p=0;
    if(search!='' && result.length==0)
    {
        card.push(<div>No result found</div>);
    }
    else
    {
    for(let i=0;i<result.length;i++)
    {
      if( result[i].isVerified)
        card.push(

          <div className="events__card" onClick={e=>goToEvent(i)}>
          <div className="events__info">
            <img src={result[i].attachment} alt="banner" />
            <div className="events__infoContainer">
              <div
                className="events__image"
                style={{ backgroundImage: `url(${result[i].attachment})` }}
              ></div>

              <div className="events__infoTitle">
                {result[i].title
                }
                <p>{//item.companyName
                }</p>
              </div>
              <div className="type">
                <center>	<div >
              <h4 class="display-6"><span class="badge badge-primary"><i className="fas fa-calendar"></i> {result[i].eventDate.split("T")[0].split("-").reverse().join("-")+" "+result[i].eventDate.split("T")[1].slice(0,5)}</span></h4>
			
			</div></center>
              </div>

              <div className="events__location"></div>
            </div>
          </div>
        </div>

        );
        else
        {
          
        }
    }   }
    return card;
    };
  return (
    <>
      <div className="home" >
      <Header />
        <Sidebar />
       
      </div>
      <br/>
     
      <div className="events">
        <div className="events__header"></div>
        <div className="container">    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner w-100 h-100 ">
    <div class="carousel-item active max-vh-100 ">
      <img class="d-block w-100" src="https://i.ibb.co/z6ZLzgN/Blog-header1-e1551340040550.png" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 max-vh-100" src="https://i.ibb.co/G33qDbp/download.png" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 max-vh-100" src="https://i.ibb.co/wSRV9PD/ASO-keywords-tips-450x231.png" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators"  role="button" data-slide="prev">
    <span class="carousel-control-prev-icon"  aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
<br/>
        <div className="events__container">
          
          <h4>UPCOMING EVENTS</h4>

          <div className="card__section">
          {eventShow()}
          </div>
          <div className="loadmore">View more</div>
        </div>
      </div>
    </>
  );
}

export default Event;