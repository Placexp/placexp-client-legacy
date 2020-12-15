import React ,{useContext,useState,useEffect} from "react";
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Swal from 'sweetalert2';
import Context from '../context';
import DoubtTemp from '../Component/Doubt/DoubtTemp'
//import Sidebar from "../Component/Layout/Sidebar";
import Header from "../Component/Layout/Header";
import { data } from "jquery";
const Eventsp = (props) => {
const [isLoading,setLoading]=useState(true);
const [event,setEvent]=useState([]);
const [cookies, setCookie] = useCookies(['user']);
useEffect(async() => {
        
    const response= await axios({
     method: 'get',
     withCredentials: true,
     url: "http://localhost:5000/event/showEvent?id="+props.match.params.id,
     data:{
         id:props.match.params.id
     }
   });
   if(response.data.code==400)
   {
    console.log(response);
   }
   else
   {
   console.log(response);
   setEvent(response.data.data);
   setLoading(false)
}
 }, [isLoading]);


 return (

    <div className="container">
        <Header/>
    <br/><br/>
    
    
        <div class="container-fluid gedf-wrapper">
            <div class="row">
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="h5">Organiser</div>
                            <div class="h7 text-muted">Club Name : {}</div>
                            <div class="h7">
                            </div>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <div class="h6 text-muted">Followers</div>
                                <div class="h5">0</div>
                            </li>
                            <li class="list-group-item">
                                <div class="h6 text-muted">Following</div>
                                <div class="h5">0</div>
                            </li>
                            <li class="list-group-item"></li>
                        </ul>
                    </div>
                </div>
             
                <div class="col-md-8 gedf-main">
                    {isLoading?"loading":(
                <div><div class="card gedf-card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex justify-content-between align-items-center">
                            Event Date : {" "} <span className="badge badge-secondary">   {"  "+event.eventDate.split("T")[0].split("-").reverse().join("-")+" "+event.eventDate.split("T")[1].slice(0,5)}</span>
                               
                            </div>
                            <div>
                                <div class="dropdown">
                                    <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fa fa-ellipsis-h"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                        <div class="h6 dropdown-header">Configuration</div>
                                        <a class="dropdown-item" href="#">Save</a>
                                        <a class="dropdown-item" href="#">Hide</a>
                                        <a class="dropdown-item" href="#">Report</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="card-body">
                      
                        <a class="card-link" href="#">
                         
        <h5 class="card-title">{event.title}</h5>
                        </a>
                      
                        <p class="card-text " dangerouslySetInnerHTML={{__html:event.subject}}>
                            
                        </p>
                        <img className="w-50 h-50" src={event.attachment}/>
                    </div>
                    <div class="card-footer">
                        <a href="javascript:void(0)" class="card-link" >{//result[i].isLikedBy.length==0?'':result[i].isLikedBy.length
                        }<i  class="fab fa-gratipay" aria-hidden="true"></i>Like </a>
                       
                     {   //<a href="#" class="card-link"><i class="far fa-paper-plane"></i>Share</a>
                     }
                       
        
                    </div>
                
                </div>
               
<br/> </div>)}</div>
</div>
                
                
                
                
                
                </div>
                
                <DoubtTemp id={props.match.params.id}/>
                
                
                </div>
 );

}
export default Eventsp;