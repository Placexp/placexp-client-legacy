import React,{useEffect, useState} from 'react'
import usericon from '../Component/Auth/user.png'
import '../Component/Auth/register.css';
import Swal from 'sweetalert2';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import axios from 'axios';
import {Url} from '../Url';
const  SignupC=(props)=> {
   //the user object 
   const [fname,setFName]=useState('');
   const [link,setLink]=useState('');
   const [user, setuser] = useState({
    name:'',   
    email:'',
    password:'',
    regno:'',
    branch:'',
    program:''

});
useEffect(async()=>{
    console.log(Url());
    const response=await axios({
        method: 'get',
        url: Url()+'/refer?id='+props.match.params.id,
        
      });
      console.log(response)
      if(response.data.msg=="next")
      {
          setCodeValid(2);
      }
      else
      setCodeValid(1);


},[]);
const [isCodeValid,setCodeValid]=useState(0);
const [conpasswd,setConPasswd]=useState('');
const [submitting, setSubmitting] = useState(false);
const [isEmailValid, setEmailValidity] = useState(false);
const [isBack,setBack]=useState(false);
const handleEmail=async(e)=>{
    try{
    e.preventDefault();
    setSubmitting(true);
   
    const response=await axios({
        method: 'post',
        url: Url()+'/user/exists',
        data: {
          email:user.email,
          
        }
      });
      console.log(response.data);
      setSubmitting(false);
      if(response.data.msg=="NO")
      {
          setBack(false);
      setEmailValidity(true);
      }
      else
      {
        Swal.fire({
            
            title: 'Error',
            text: 'This email is already registered',
            type: 'error',
            icon:'error',
            confirmButtonText: 'Please try Again'
          });
      }
    }

    catch(err)
    {
console.log(err);
    }
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
const handleSubmit=async(e)=>{
    try{
    e.preventDefault();
    if(conpasswd==user.password)
    {
    setSubmitting(true);
    
    const data=await axios({
        method: 'post',
        url: Url()+'/signup/club',
        data: {
          email:user.email,
          faculty:user.program,
          link:link,
          password:user.password,
          name:user.name,
          president:user.regno,
          code:props.match.params.id
        }
      });
      console.log(data);
      setSubmitting(false);
      setEmailValidity(false);
      setuser({
        name:'',   
        email:'',
        password:'',
        regno:'',
        branch:'',
        program:''
    
    });
    Swal.fire({
       
        title: 'Success',
        text: 'Registration Successfull',
        icon:'success',
        type: 'success',
        confirmButtonText: 'Okay'
      });
      setCodeValid(3);
}
else
{
    Swal.fire({
        
        title: 'Error',
        text: 'Password Dont match',
        type: 'error',
        icon:'error',
        confirmButtonText: 'Please try Again'
      });
}
    }
    catch(err)
    {
console.log(err);
Swal.fire({
    
    title: 'Error',
    text: err,
    type: 'error',
    icon:'error',
    confirmButtonText: 'Please try Again'
  });
    }
}
return (
    <Container id="signup">
      <Row>
      <Col id="signup1">
         <h1>Welcome to PlaceXP</h1>
         

    </Col>
    <Col>
        <Container id="signup3">
        <h1 >SIGNUP</h1>
       {isCodeValid==2?   (isBack||!isEmailValid) ?(
             
        <form className="signup_form" onSubmit={handleEmail}>
            <img src={usericon} alt="user icon" className="sign_icon"/>
           
            <input required type="text"  value={user.name} onChange={e=>setuser({...user,name:e.target.value})} placeholder="Enter  Club name" disabled={submitting}/  >
           
           <input required type="email" value={user.email} onChange={e=>setuser({...user,email:e.target.value})} placeholder="Enter Club email" disabled={submitting} data-toggle="tooltip" data-placement="bottom" title="Eg. example@vitstudent.ac.in"/>
          
           <input required type="text" value={user.regno} onChange={e=>setuser({...user,regno:e.target.value})}  placeholder="Enter Club President Name" disabled={submitting} />
          
        <button> {submitting?( <div>Loading  <div class="spinner-border " role="status">
  <span class="sr-only">Loading...  </span>
</div></div>):'Next'}  </button>
     
        </form>
        ):(

            <form className="signup_form" onSubmit={handleSubmit}>
            <br/>
            <input required type="text"  value={user.program} onChange={e=>setuser({...user,program:e.target.value})} placeholder="Enter Club Faculty Coordinator" /  >
            <div class="">
 <div class="input-group is-invalid">
    <div class="custom-file">
      <input type="file" class="custom-file-input" id="validatedInputGroupCustomFile" multiple onChange={e=>setFName(e.target.files[0])} required/>
      <label class="custom-file-label" for="validatedInputGroupCustomFile">Choose Club Logo...</label>
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
           
           <input required type="password" value={user.password} onChange={e=>setuser({...user,password:e.target.value})} placeholder="Enter your password"/>
            
           <input required type="password" value={conpasswd} onChange={e=>setConPasswd(e.target.value)}  placeholder="Enter your password again"  />
          
          <button>{submitting?( <div>Loading  <div class="spinner-border " role="status">
  <span class="sr-only">Loading...  </span>
</div></div>):'Sign Up'}</button><button onClick={()=>setBack(true)}>Back</button> 

</form>

        ):isCodeValid==0?'Validating Code...':isCodeValid==3?'Register Done':'Link Invalid'}
        </Container>
    </Col>
    
      </Row>
    </Container>
      
     
    
)
}


export default SignupC