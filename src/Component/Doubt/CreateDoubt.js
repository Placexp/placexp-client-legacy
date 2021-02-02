import React, {useRef, useEffect, useState,Fragment } from "react";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import axios from 'axios';
import Select from 'react-select';
import { useCookies } from 'react-cookie';

import {Url} from '../../Url';
const CreateDoubt=()=>{
  
const [sub,setSub]=useState('');
const [fname,setFName]=useState('');
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
  url: Url()+"/doubt/addDoubt?id="+cookies.user.id+"&role="+cookies.user.role+"&token="+cookies.user.token,
  data:{
    title:title,
    subject:sub,
   isVisible:vis
  }
});
setTitle('');
setFName('');
setSub('');
setVisible('');
console.log(response);
      }
      catch(err)
      {
console.log(err);
      }
    }
    const hand=content=>{
     setSub(content);

    }
const displayForm=()=>{
return (<div  className=" h-75  px-4 p-3  "> 
    
<form>
<div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Title</label>
    <div class="col-sm-10">
      <input type="text"  value={title} onChange={e=>setTitle(e.target.value)} class="form-control" id="inputPassword"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Subject</label>
    <div class="col-sm-10">
    <SunEditor ref={editorRef} setContent={sub}  onChange={hand} onScroll={true} />
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Visible to</label>
    <div class="col-sm-5"><Fragment>
    <Select
                    placeholder="Select current position"
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
  
{/* {  <div class="input-group is-invalid">
    <div class="custom-file">
      <input type="file" class="custom-file-input" id="validatedInputGroupCustomFile" multiple onChange={e=>setFName(e.target.files[0].name)} required/>
      <label class="custom-file-label" for="validatedInputGroupCustomFile">Choose file...</label>
    </div>
    <div class="input-group-append">
       <button class="btn btn-outline-secondary" type="button">Button</button>
    </div>
  </div>
  <div className="invalid-feedback">
    {"Selected Files : "+fname}
  </div> */}
  
</form>

</div>);

}

    const [title,setTitle]=useState('');
return (
<div >

<div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered ">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Post Your Question</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       {displayForm()
       }

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={handleSubmit}>Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
);

};
export default CreateDoubt;