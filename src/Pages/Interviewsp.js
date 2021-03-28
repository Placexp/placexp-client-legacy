import React ,{useContext,useState,useEffect} from "react";
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Swal from 'sweetalert2';
import Context from '../context';
import companyJ from './company.json';
import {Url} from '../Url';
import Header from "../Component/Layout/Header";
import { data } from "jquery";
import Disqus from "disqus-react"
import ReactDisqusComments from 'react-disqus-comments';
const Interviewsp = (props) => {
const [isLoading,setLoading]=useState(true);
const [event,setEvent]=useState([]);
const [cookies, setCookie] = useCookies(['user']);
const disqusShortname = "placexp-2"
const disqusConfig = {
  url: "https://placexp.netlify.app/interview",
  identifier: "placexp1",
  title: "Title of Your Article"
}
useEffect(async() => {
        
    const response= await axios({
     method: 'get',
     withCredentials: true,
     url: Url()+"/post/get?i="+props.match.params.id,
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

    <div >
        <Header/>
    <br/><br/>
    <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v10.0&appId=213831017165762&autoLogAppEvents=1" nonce="7k9s0JTj"></script>
<div class="fb-comments" data-href="http://localhost:3000/interview" data-width="" data-numposts="5"></div>
        <div class="container-fluid gedf-wrapper">
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="h7 text-muted">About Company Name : {isLoading?"loading":event[0].company}<br/>
                            <a href={isLoading?"loading":companyJ[event[0].company]} targer="_blank"> {isLoading?"loading":event[0].company +" LinkedIn Profile"} </a></div>
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
             {event[0].videoLink &&   ( <iframe className="w-75 d-none d-sm-block d-sm-none d-md-block"  height="330px" src={event[0].videoLink} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)}
               { event[0].videoLink && (<iframe className="w-75 d-lg-none"   src={event[0].videoLink} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)}</center>
               <br/>
                </div>
                <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
                

<br/> </div>)}</div>

</div>
                </div>
                </div>
 );

}
export default Interviewsp;