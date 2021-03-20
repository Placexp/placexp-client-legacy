import React, {useRef, useEffect, useState,Fragment } from "react";
import SunEditor from 'suneditor-react';
import DateTimePicker from 'react-datetime-picker';
import 'suneditor/dist/css/suneditor.min.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Url} from '../Url';
import Select from 'react-select';
import  FormData from 'form-data';
import Header from '../Component/Layout/Header';
import { useCookies } from 'react-cookie';
import "./Button.css"
const Interviewed=(props)=>{

const [sub,setSub]=useState('');
const [fname,setFName]=useState('');
const [link,setLink]=useState('');
const [company,setCompany]=useState('');
const[isLoading,setLoading]=useState(true);
const [cookies, setCookie] = useCookies(['user']);

const companyL = [
  { label: 'SCE', value: 'SCE' },
  { label: 'SCOPE', value: 'SCOPE' },
  { label: 'SELECT', value: 'SELECT' },
  { label: 'SENSE', value: 'SENSE' },
  { label: 'VFIT', value: 'VFIT' },
  { label: 'SMEC', value: 'SMEC' },
  { label: 'ALL', value: 'ALL' }
];
useEffect(async() => {
        
    const response= await axios({
     method: 'get',
     withCredentials: true,
     url: Url()+"/post/get?id="+cookies.user.id+"&role="+cookies.user.role+"&i="+props.match.params.id+"&token="+cookies.user.token,
     data:{
         i:props.match.params.id
     }
   });
   if(response.data.code==400)
   {
   
   }
   else
   {
 
   setCompany(response.data.data[0].company);
   setLink(response.data.data[0].videoLink);
   setTitle(response.data.data[0].postTitle);
   setSub(response.data.data[0].postBody);
   setLoading(false)
}
 }, [isLoading]);


// const editorRef = useRef();
//     useEffect(() => {
//         // Get underlining core object here
//         // Notice that useEffect is been used because you have to make sure the editor is rendered.
//         console.log(editorRef.current.editor.core);
//     }, []);
    const handleSubmit=async(e)=>
    {
      try{
e.preventDefault();
const response= await axios({
  method: 'post',
  withCredentials: true,
  url: Url()+"/post/update/edit?id="+cookies.user.id+"&role="+cookies.user.role+"&token="+cookies.user.token,
  data:{
    title:title,
    subject:sub,
   company:company,
   link:link,
   i:props.match.params.id
   
  }
});

console.log(response)

Swal.fire({
       
    title: 'Success',
    text: 'Post Updated ',
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
const displayForm=()=>{
return (<div  className="card  w-100 h-100  px-6 p-4  "> 
   <center> <h5 >Create Event</h5> </center><div
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
      <input type="text"  value={company} onChange={e=>setCompany(e.target.value)} class="form-control" id="inputPassword"/>
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
export default Interviewed;