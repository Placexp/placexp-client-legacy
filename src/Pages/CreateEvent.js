import React, {useRef, useEffect, useState,Fragment } from "react";
import SunEditor from 'suneditor-react';
import DateTimePicker from 'react-datetime-picker';
import 'suneditor/dist/css/suneditor.min.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import {Url} from '../Url';
import Select from 'react-select';
import  FormData from 'form-data';
import Header from '../Component/Layout/Header';
import { useCookies } from 'react-cookie';
import "./Button.css"
const CreateEvent=()=>{
  const [time ,setTime]=useState(new Date())
const [sub,setSub]=useState('');
const [fname,setFName]=useState('');
const [link,setLink]=useState('');
const [visible,setVisible]=useState('');
const [cookies, setCookie] = useCookies(['user']);

const optionVis = [
  { label: 'SCE', value: 'SCE' },
  { label: 'SCOPE', value: 'SCOPE' },
  { label: 'SELECT', value: 'SELECT' },
  { label: 'SENSE', value: 'SENSE' },
  { label: 'VFIT', value: 'VFIT' },
  { label: 'SMEC', value: 'SMEC' },
  { label: 'ALL', value: 'ALL' }
];
const editorRef = useRef();
    useEffect(() => {
        // Get underlining core object here
        // Notice that useEffect is been used because you have to make sure the editor is rendered.
        console.log(editorRef.current.editor.core);
    }, []);
    const handleSubmit=async(e)=>
    {
      try{
e.preventDefault();
let vis=[];
for(let i=0;i<visible.length;i++)
vis.push(visible[i].value);
const response= await axios({
  method: 'post',
  withCredentials: true,
  url: Url()+"/event/addEvent?id="+cookies.user.id+"&role="+cookies.user.role,
  data:{
    title:title,
    subject:sub,
   isVisible:vis,
   link:link,
   eventDate:time
  }
});
console.log(response);
setLink('');
setTitle('');setSub('');setVisible('');setFName('');

Swal.fire({
       
    title: 'Success',
    text: 'Event Registered. Verification Pending from SWC ',
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
return (<div  className="card  w-100  px-6 p-4  "> 
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
    <label for="staticEmail" class="col-sm-2 col-form-label">Subject</label>
    <div class="col-sm-10">
    <SunEditor ref={editorRef} setContent={sub} showToolbar={false} onChange={hand} onScroll={true} />
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Title</label>
    <div class="col-sm-10">
      <input type="text"  value={title} onChange={e=>setTitle(e.target.value)} class="form-control" id="inputPassword"/>
    </div>
  </div>
  
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Visible to</label>
    <div class="col-sm-5"><Fragment>
    <Select
                    placeholder="Select"
                    value={visible}
                    onChange={option => setVisible(option)}
                    options={optionVis}
                    isMulti
                    isSearchable
                    required
                />
            {(
            <input
              tabIndex={-1}
              autoComplete="off"
              style={{ opacity: 0, height: 0 }}
              value={visible}
              required
            />
            )}
      
      
      </Fragment> </div>
    
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Event Brocehure</label>
    <div class="col-sm-10">
 <div class="input-group is-invalid">
    <div class="custom-file">
      <input type="file" class="custom-file-input" id="validatedInputGroupCustomFile" multiple onChange={e=>setFName(e.target.files[0])} required/>
      <label class="custom-file-label" for="validatedInputGroupCustomFile">Choose file...</label>
    </div>
    <div class="input-group-append">
       <button class="btn btn-secondary" type="button" onClick={uploadHandle}>Upload</button>
    </div>
  </div>
  <div className="invalid-feedback">
    {fname.name?"Selected file : "+fname.name:''}
    {console.log(fname)}<br/>
            {link!=''?(<a href={link}>{link}</a>):''}
  </div> 
  </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Data </label>
    <div class="col-sm-4">
    <DateTimePicker value={time} onChange={setTime}
              />
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
export default CreateEvent;
