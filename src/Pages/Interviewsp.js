import React ,{useContext,useState,useEffect} from "react";
import { useCookies } from 'react-cookie';
import './interviewsp.css'
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

// fake articles arrray
const articles =[{title:"Amazon Interview Experience For Software Developer Intern"},{title:"Minimum number of pigs required to find the poisonous bucket"},
                         {title:"Amazon Interview Experience for SWE Summer Internship 2021"},{title:"Amazon Interview Experience for SDE Internship (On-Campus)"}]
 return (

    <div >
        <Header/>

        <div class="container-fluid gedf-wrapper">
            <div class="row  b_color">
            <div class="col-md-8 gedf-main right_col m-3 p-3">
                    {isLoading?"loading":(
                <div><div class="">
                    <div >
                        <div class="d-flex justify-content-between align-items-center p-4">
                          
                            <div>
                             <h1>{event[0].postTitle}</h1>
                             <a class="font-italic text-secondary" href={isLoading?"loading":companyJ[event[0].company]} targer="_blank"> {isLoading?"loading":event[0].company +" LinkedIn Profile"} </a>
                            </div>
                        </div>
                       
                    </div>
                    <div class="">
                      
                        <a class="" href="#">
                         
                    <h5 class=""></h5>
                        </a>
                      
                        <p class=" " dangerouslySetInnerHTML={{__html:event[0].postBody}}>
                            
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
            <br/> </div>)}
            </div>
            {/* <div class=" mt-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="h7 text-muted">About Company Name : {isLoading?"loading":event[0].company}<br/>
                            <a href={isLoading?"loading":companyJ[event[0].company]} targer="_blank"> {isLoading?"loading":event[0].company +" LinkedIn Profile"} </a></div>
                            <div class="h7">
                            </div>
                        </div>
                      
                    </div>
                </div> */}
                
                <div class="col-md-3 mt-3">
                    <div className="d-flex flex-column   ">   
                        <h4 style={{color:"#2b6dad"}}>Related Articles</h4> 
                        <hr style={{marginTop:"0"}}/>
                        {articles.map(article=>{
                            return <span>{article.title}</span>
                        })}
                     </div>
                </div>
               
               

        </div>
                </div>
                </div>
 );

}
export default Interviewsp;