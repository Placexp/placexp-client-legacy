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
const jwt = require('jsonwebtoken')
const Mockinterviewct=({history})=>{

const [sub,setSub]=useState('');
const [fname,setFName]=useState('');
const [link,setLink]=useState('');
const [company,setCompany]=useState('');
const [tag,setTag]=useState('');
const [question, setQuestion]=useState('');
const [option1, setOption1]=useState('');
const [option2, setOption2]=useState('');
const [option3, setOption3]=useState('');
const [option4, setOption4]=useState('');
const [answer, setAnswer]=useState('');
const [answerExp, setAnswerExp]=useState('');
const [marks, setMarks]=useState(0);
const [codeQuestion, setCodeQuestion]=useState('');
const [compilerLink, setCompilerLink]=useState('');
const [deadline, setDeadline]=useState(new Date());
const [cookies, setCookie]=useCookies(['user']);

if(cookies.user==null || jwt.verify(cookies.user.role,"placexp@123").role!="A")
history.push("/auth")
    const handleSubmit=async(e)=>
    {
      try{
e.preventDefault();
const response= await axios({
  method: 'post',
  withCredentials: true,
  url: Url()+"/mock/new?id="+cookies.user.id+"&role="+cookies.user.role+"&token="+cookies.user.token,
  data:{
    mockTitle:title,
    mockBody:sub,
    Organizer:company.value,
    tags:tag,
    question:question,
    option1:option1,
    option2:option2,
    option3:option3,
    option4:option4,
    answer:answer,
    explanation:answerExp,
    Marks:marks,
    link:link,
    codeQuestion:codeQuestion,
    compilerLink:compilerLink
  }
});
console.log(response);
setLink('');
setTitle('');setSub('');setCompany('');setTag('');setQuestion('');setOption1('');setOption2('');setOption3('');setOption4('');
setAnswer('');setAnswerExp('');setMarks(0);setCodeQuestion('');setCompilerLink('');

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
   <center> <h5 >Create Mock Interview</h5> </center><div
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
    <label for="staticEmail" class="col-sm-2 col-form-label">Tags</label>
    <div class="col-sm-10">
      <input type="text"  value={tag} onChange={e=>setTag(e.target.value)} class="form-control" id="inputPassword"/>
    </div>
  </div>
  
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Organizer</label>
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
    <label for="staticEmail" class="col-sm-2 col-form-label">MCQ Question</label>
    <div class="col-sm-10">
    <ReactQuill value={question} onChange={setQuestion} theme="snow"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">MCQ Options</label>
    <div class="col-sm-10">
      <div class="row">
          <div class="col-3">
            <input type="text" value={option1} onChange={e=>setOption1(e.target.value)} class="form-control" id="inputPassword" placeholder="Option 1"/>
          </div>
          <div class="col-3">
            <input type="text" value={option2} onChange={e=>setOption2(e.target.value)} class="form-control" id="inputPassword" placeholder="Option 2"/>
          </div>
          <div class="col-3">
            <input type="text" value={option3} onChange={e=>setOption3(e.target.value)} class="form-control" id="inputPassword" placeholder="Option 3"/>
          </div>
          <div class="col-3">
            <input type="text" value={option4} onChange={e=>setOption4(e.target.value)} class="form-control" id="inputPassword" placeholder="Option 4"/>
          </div>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">MCQ Answer</label>
    <div class="col-sm-10">
      <input type="text"  value={answer} onChange={e=>setAnswer(e.target.value)} class="form-control" id="inputPassword"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">MCQ Answer Explanation</label>
    <div class="col-sm-10">
    <ReactQuill value={answerExp} onChange={setAnswerExp} theme="snow"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Marks</label>
    <div class="col-sm-10">
      <input type="number"  value={marks} onChange={e=>setMarks(e.target.value)} class="form-control" id="inputPassword"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Coding Question</label>
    <div class="col-sm-10">
    <ReactQuill value={codeQuestion} onChange={setCodeQuestion} theme="snow"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Compiler Link</label>
    <div class="col-sm-10">
      <input type="text"  value={compilerLink} onChange={e=>setCompilerLink(e.target.value)} class="form-control" id="inputPassword"/>
    </div>
  </div>

  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Deadline</label>
    <div class="col-sm-10">
      <DateTimePicker
        onChange={e=>setDeadline(e.target.value)}
        value={deadline}
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
export default Mockinterviewct;
