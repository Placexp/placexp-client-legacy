import React,{useEffect, useState} from 'react'
import usericon from '../Component/Auth/user.png'
import '../Component/Auth/register.css';
import Swal from 'sweetalert2';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import './profile.css'
import axios from 'axios';
import {Url} from '../Url';
const  Profile=(props)=> {
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
    <div class="container">
    <div class="row profile">
		<div class="col-md-3">
			<div class="profile-sidebar">
				
				<div class="profile-userpic">
					<img src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg" class="img-responsive" alt=""/>
				</div>
				
				<div class="profile-usertitle">
					<div class="profile-usertitle-name">
						Marcus Doe
					</div>
					<div class="profile-usertitle-job">
						Developer
					</div>
				</div>
				
				<div class="profile-userbuttons">
					<button type="button" class="btn btn-success btn-sm">Follow</button>
					<button type="button" class="btn btn-danger btn-sm">Message</button>
				</div>
			
				<div class="profile-usermenu">
					<ul class="nav">
						<li class="active">
							<a href="#">
							<i class="fas fa-home"></i>
							Overview </a>
						</li>
						<li>
							<a href="#">
							<i class="fas fa-user"></i>
							Account Settings </a>
						</li>
						<li>
							<a href="#" target="_blank">
							<i class="fas fa-ok"></i>
							Tasks </a>
						</li>
						<li>
							<a href="#">
							<i class="glyphicon glyphicon-flag"></i>
							Help </a>
						</li>
					</ul>
				</div>
				
			</div>
		</div>
		<div class="col-md-9">
            <div class="profile-content">
			   Some user related content goes here...
            </div>
		</div>
	</div>
</div>
      
     
    
)
}


export default Profile