import React ,{useContext,useState,useEffect} from "react";
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Swal from 'sweetalert2';
import Context from '../context';
import {Url} from '../Url';
import Header from "../Component/Layout/Header";
import { data } from "jquery";
const Interviewsp = (props) => {
const [isLoading,setLoading]=useState(true);
const [event,setEvent]=useState([]);
const [cookies, setCookie] = useCookies(['user']);
useEffect(async() => {
        
    const response= await axios({
     method: 'get',
     withCredentials: true,
     url: Url()+"/post/get",
     data:{
         i:props.match.params.id
     }
   });
   console.log(response);
   if(response.data.code==400)
   {
    console.log(response);
   }
   else
   {
  
   setEvent(response.data.data);
   console.log(event);
  
 }
 setLoading(false)
}
 , [isLoading]);


 return (

    <div className="container">
        <Header/>
    <br/><br/>
    
    
        <div class="container-fluid gedf-wrapper">
            <div class="row">
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="h7 text-muted">Company Name : {isLoading?"loading":event[0].company}</div>
                            <div class="h7">
                            </div>
                        </div>
                      
                    </div>
                </div>
             
                <div class="col-md-8 gedf-main">
                    {isLoading?"loading":(
                <div><div class="card gedf-card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                          
                            <div>
                            {event[0].postTitle}
                            </div>
                        </div>

                    </div>
                    <div class="card-body">
                      
                        <a class="card-link" href="#">
                         
        <h5 class="card-title"></h5>
                        </a>
                      
                        <p class="card-text " dangerouslySetInnerHTML={{__html:event[0].postBody}}>
                            
                        </p>
                       
                    </div>
                 <center>
                 <iframe width="560" height="315" src={"https://www.youtube.com/embed/4RTLX2UaVzE"} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
                </div>
               
<br/> </div>)}</div>
</div>
                </div>
                </div>
 );

}
export default Interviewsp;