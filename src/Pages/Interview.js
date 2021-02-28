import React, {useRef, useEffect, useState,Fragment } from "react";
import SunEditor from 'suneditor-react';
import DateTimePicker from 'react-datetime-picker';
import 'suneditor/dist/css/suneditor.min.css';
import axios from 'axios';
import FuzzySearch from 'fuzzy-search';
import Swal from 'sweetalert2';
import {Url} from '../Url';
import './Interview.css'
import { useHistory } from "react-router-dom";
import Header from '../Component/Layout/Header';
import { useCookies } from 'react-cookie';
import "./Button.css"
const Interview=()=>{
  //window.location('/interview')
  const history = useHistory();
  const [interview ,setInterview]=useState([]);
  const fuzzySearcher = new FuzzySearch(interview, ['title','company']);
  const [search,setSearch]=useState('');
  const result = fuzzySearcher.search(search);
 
  const [isLoading,setLoading]=useState(true);
  useEffect(async() => {
        
    const response= await axios({
     method: 'post',
     withCredentials: true,
     url: Url()+"/post/getall",
   });
   console.log(response);
   setInterview(response.data.data);
   setLoading(false)
 }, [isLoading]);

 const goToEvent = i => {

 history.push("/interview/" + i);
};
return (
<div >
<Header/>

<br/>
<div className="container">

<div className="events__container">
          
          <h4>Interviews</h4>
          <center><input placeholder="Search" value={search} onChange={e=>setSearch(e.target.value)}/></center> 
          
          <br/>
          <div className="card__section">
        
     
{result.length>0?result.map((item)=>(
 <div class="events__card h-100" onClick={e=>goToEvent(item._id)}>
 <div class="card-body text-center">
   
   <span className="text-primary">
     <h3 style={{
       fontSize: '20px',
       fontWeight: '700',

     }}>{item.company}</h3>
   </span>
   <span className="secondary" style={{
       fontSize: '15px',
       //fontWeight: '700',

     }}>
     {item.postTitle}
   </span>
   <br />
  
 </div>
</div>
)):"Try Again"}
</div>
</div>
</div>
     
</div>
);

};
export default Interview;