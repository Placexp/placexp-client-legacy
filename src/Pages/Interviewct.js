import React, {useRef, useEffect, useState,Fragment } from "react";
import ReactQuill from 'react-quill';
import DateTimePicker from 'react-datetime-picker';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import {Url} from '../Url';
import companyL from './companyJ.json';
import Select from 'react-select';
import  FormData from 'form-data';
import Header from '../Component/Layout/Header';
import { useCookies } from 'react-cookie';
import "./Button.css"
const Interviewct=({history})=>{

const [sub,setSub]=useState('');
const [fname,setFName]=useState('');
const [link,setLink]=useState('');
const [company,setCompany]=useState('');
const [cookies, setCookie] = useCookies(['user']);


    const handleSubmit=async(e)=>
    {
      try{
e.preventDefault();
const response= await axios({
  method: 'post',
  withCredentials: true,
  url: Url()+"/post/write/post/new?id="+cookies.user.id+"&role="+cookies.user.role+"&token="+cookies.user.token,
  data:{
    title:title,
    subject:sub,
   company:company.value,
   link:link,
   
  }
});
console.log(response);
setLink('');
setTitle('');setSub('');setCompany('');setFName('');

Swal.fire({
       
    title: 'Success',
    text: 'Post registered . Our content team will verify the content and will soon notify about the updates . Stay Tuned. ',
    imageUrl:"https://imgur.com/MiIjgkr.jpg",
    imageWidth: "50px",
    imageHeight:"50px",
    type: 'success',
    confirmButtonText: 'Okay'
  });
      }
      catch(err)
      {
console.log(err);
      }
    }
    const hand=content=>{
     setSub(content);

    }
    const uploadHandle=async ()=>
    {
try{
const formData=new FormData();
formData.append("image",fname);
var config = {
    method: 'post',
    url: 'https://api.imgur.com/3/image',
    headers: { 
      'Authorization': 'Client-ID c5d4b69a64be77e', 
     
    },
    data : formData
  };
  const res=await axios(config);
setLink(res.data.data.link)
console.log(res)
}catch(err)
{
console.log(err);
}
    };
const displayForm=()=>{
return (<div  className="card  w-100 h-100  px-6 p-4  "> 
   <center> <h5 >Create Interview</h5> </center><div
    style={{
      width: '1.9375em',
      margin: '0px auto',
      borderWidth: '3px',
      borderStyle: 'solid',
      borderColor: '#ef4c23',
      borderImage: 'initial'
    }}
  /><br/>
<form onSubmit={handleSubmit}>
<div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Title</label>
    <div class="col-sm-10">
      <input type="text"  value={title} onChange={e=>setTitle(e.target.value)} class="form-control" id="inputPassword"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Subject</label>
    <div class="col-sm-10">
    <ReactQuill value={sub} onChange={setSub} theme="snow"/>
    </div>
  </div>
  
  
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Company</label>
    <div class="col-sm-10">
    <Select
                    placeholder="Select"
                    value={company} 
                    onChange={option => setCompany(option)}
                    options={companyL}
                    isSearchable
                    required
                />
            {(
            <input
              tabIndex={-1}
              autoComplete="off"
              style={{ opacity: 0, height: 0 }}
              value={company}

              required
            />
            )}
      
      
   </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Video</label>
    <div class="col-sm-10">
      <input type="text"  value={link} onChange={e=>setLink(e.target.value)} class="form-control" id="inputPassword"/>
    </div>
  </div>
    <center><button className='btn btn-primary' >Submit</button></center>
</form>

</div>);

}

    const [title,setTitle]=useState('');
return (
<div >
<Header/>
<br/>
       {displayForm()
       }

     
</div>
);

};
export default Interviewct;