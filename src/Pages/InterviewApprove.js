import React ,{useContext,useState,useEffect} from "react";
import "../Component/Admin/table.css";
import {Url} from '../Url';
import { useCookies } from 'react-cookie';
import { Link, Redirect } from 'react-router-dom';
import Header from "../Component/Layout/Header";
import axios from 'axios';
import "./Interview.css";
import Swal from 'sweetalert2';

import FuzzySearch from "fuzzy-search";
import { DropdownButton, Dropdown } from "react-bootstrap";
const jwt    = require('jsonwebtoken')
const InterviewApprove= ({history}) => {
    
    
        
    const [doubtpage, setdoubtpage] = useState('view')
        const [cookies, setCookie] = useCookies(['user']);   
        const [isLoading,setLoading]=useState(false);
        const [event , setEvent]=useState([]);
        const fuzzySearcher = new FuzzySearch(event, ['postTitle','company','status']);
        const [search,setSearch]=useState('');
         const result = fuzzySearcher.search(search);
         if(cookies.user==null || jwt.verify(cookies.user.role,"placexp@123").role!="A")
history.push("/")
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
                  status:0
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
    const DeleteHandle=async(id)=>{
      try{
          const response= await axios({
              method: 'post',
              withCredentials: true,
              url: Url()+"/post/delete/?id="+cookies.user.id+"&role="+cookies.user.role+"&token="+cookies.user.token,
             data:{
                postId:id
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

for(let i=0;i<result.length;i++)
{
    card.push( <tr>
       
       <td data-title="Email" >{result[i].authorId.email}</td>
       <td data-title="Company" >{result[i].company}</td>
        <td data-title="Date"><a href={"/interview_edit/"+result[i]._id}>Edit Link</a></td>
        <td data-title="Link" data-type="currency"><a href={"/interview/"+result[i]._id} >See Details</a></td>
        <td data-title="Action" > <button  className="btn btn-primary" onClick={result[i].status==-1?e=>ApproveHandle(result[i]._id):e=>UnApproveHandle(result[i]._id)}>{result[i].status==-1?'Approve':'Reject'}</button></td>
        <td data-title="Action" > <button  className="btn btn-secondary" onClick={e=>DeleteHandle(result[i]._id)}>Delete</button></td>
      </tr>)
}
return card;
 };
//  const UnverifyEvent=()=>
//  {

//  };   
const handleSelect = (e) => {
    setSearch(e)
   };
     
return (

<div >
    <Header/>

    <br/><br/>
    <div>
    <center>
    <div className="search_filter row">
            <form className="search">
              <label>Search</label>
              <input type="text"value={search} onChange={e=>setSearch(e.target.value)}/>
              </form>

            <div className="filterDiv">
              <DropdownButton
                id="dropdown-item-button"
                title="Filter"
                onSelect={handleSelect}
              >
                  <Dropdown.Item  eventKey="">
          Clear Filter
      </Dropdown.Item>
            <Dropdown.Item  eventKey="0">
          Approved
      </Dropdown.Item>
      <Dropdown.Item  eventKey="-1">
       Not Approved 
      </Dropdown.Item>
              </DropdownButton>
              
            </div>
         
          </div>
         
          </center>
          </div>
    <table class="responsive-table">
<caption>Verify Interview</caption>
<thead>
  <tr>
 
  <th scope="col">Email</th>
  <th scope="col">Company</th>
    <th scope="col">Edit </th>
    <th scope="col">Link</th>
    <th scope="col">Action</th>
    <th scope="col">Delete</th>
   
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