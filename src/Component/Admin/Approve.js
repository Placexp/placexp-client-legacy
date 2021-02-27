import React ,{useContext,useState,useEffect} from "react";

import "./table.css";

import {Url} from '../../Url';
import { useCookies } from 'react-cookie';
import { Link, Redirect } from 'react-router-dom';


import Header from "../Layout/Header";
import axios from 'axios';
import Swal from 'sweetalert2';
const Approve= () => {
    
    
        
    const [doubtpage, setdoubtpage] = useState('view')
        const [cookies, setCookie] = useCookies(['user']);   
        const [isLoading,setLoading]=useState(false);
        const [event , setEvent]=useState([]);
   
        useEffect(async() => {
        
            const response= await axios({
             method: 'get',
             withCredentials: true,
             url: Url()+"/admin/unverifiedEvents?id="+cookies.user.id+"&role="+cookies.user.role+"&token="+cookies.user.token,
            
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
    const ApproveHandle=async(id)=>{
        try{
            const response= await axios({
                method: 'post',
                withCredentials: true,
                url: Url()+"/admin/verifyEvent/?id="+cookies.user.id+"&role="+cookies.user.role+"&token="+cookies.user.token,
               data:{
                   id:id,
                  
               }
              });
              console.log(response);
              setLoading(true);
        }
        catch(err)
        {

        }
    }    
 const VeriyEvents=()=>{
    let card=[]; 

for(let i=0;i<event.length;i++)
{
    card.push( <tr>
       
        <th  scope="row">{event[i].title}</th>
        <td data-title="Date">{event[i].eventDate.split("T")[0].split("-").reverse().join("-")+" "+event[i].eventDate.split("T")[1].slice(0,5)}</td>
        <td data-title="Worldwide Gross" >{event[i].authorId.personalDetails.name}</td>
        <td data-title="Link" data-type="currency"><a href={"/details/"+event[i]._id} >See Details</a></td>
        <td data-title="Action" > <button  className="btn btn-secondary" onClick={e=>ApproveHandle(event[i]._id)}>Approve</button></td>
     
      </tr>)
}
return card;
 };
//  const UnverifyEvent=()=>
//  {

//  };     
return (

<div className="container">
    <Header/>

    <br/><br/><br/><br/><br/>
    <table class="responsive-table">
<caption>Verify Event</caption>
<thead>
  <tr>
 
    <th scope="col">Event Title</th>
    <th scope="col">Date</th>
    <th scope="col">Organiser</th>
    <th scope="col">Link</th>
    <th scope="col">Action</th>
   
  </tr>

</thead>

<tbody>
 {VeriyEvents()}
 
</tbody>
</table>
</div>

)
    }
    export default Approve;