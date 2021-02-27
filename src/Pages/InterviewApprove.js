import React ,{useContext,useState,useEffect} from "react";
import "../Component/Admin/table.css";
import {Url} from '../Url';
import { useCookies } from 'react-cookie';
import { Link, Redirect } from 'react-router-dom';
import Header from "../Component/Layout/Header";
import axios from 'axios';
import Swal from 'sweetalert2';
const InterviewApprove= () => {
    
    
        
    const [doubtpage, setdoubtpage] = useState('view')
        const [cookies, setCookie] = useCookies(['user']);   
        const [isLoading,setLoading]=useState(false);
        const [event , setEvent]=useState([]);
   
        useEffect(async() => {
        
            const response= await axios({
             method: 'get',
             withCredentials: true,
             url: Url()+"/admin/post/unverifiedEvents?id="+cookies.user.id+"&role="+cookies.user.role+"&token="+cookies.user.token,
            
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
                url: Url()+"/admin/post/verifyEvent/?id="+cookies.user.id+"&role="+cookies.user.role+"&token="+cookies.user.token,
               data:{
                   i:id,
                  status:1
               }
              });
              console.log(response);
              setLoading(true);
        }
        catch(err)
        {

        }
    }   
    const UnApproveHandle=async(id)=>{
        try{
            const response= await axios({
                method: 'post',
                withCredentials: true,
                url: Url()+"/admin/post/verifyEvent/?id="+cookies.user.id+"&role="+cookies.user.role+"&token="+cookies.user.token,
               data:{
                   i:id,
                  status:-1
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
       
       <td data-title="Worldwide Gross" >{event[i].authorId.email}</td>
        <td data-title="Date"><a href={"/interview_edit/"+event[i]._id}>Edit Link</a></td>
        <td data-title="Link" data-type="currency"><a href={"/interview/"+event[i]._id} >See Details</a></td>
        <td data-title="Action" > <button  className="btn btn-secondary" onClick={event[i].status==-1?e=>ApproveHandle(event[i]._id):e=>UnApproveHandle(event[i]._id)}>{event[i].status==-1?'Approve':'Reject'}</button></td>
     
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
<caption>Verify Interview</caption>
<thead>
  <tr>
 
  <th scope="col">Email</th>
    <th scope="col">Edit Link</th>
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
    export default InterviewApprove;