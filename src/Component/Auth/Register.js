import React,{useState} from 'react'
import usericon from './user.png'
import './register.css';
import Swal from 'sweetalert2';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import axios from 'axios';
function Register({setauthpage}) {
   //the user object 
   const [user, setuser] = useState({
    name:'',   
    email:'',
    password:'',
    regno:'',
    branch:'',
    program:''

});
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
        url: 'https://placexp.herokuapp.com/user/exists',
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
const handleSubmit=async(e)=>{
    try{
    e.preventDefault();
    if(conpasswd==user.password)
    {
    setSubmitting(true);
    
    const data=await axios({
        method: 'post',
        url: 'https://placexp.herokuapp.com/signup/student',
        data: {
          email:user.email,
          program:user.program,
          branch:user.branch,
          password:user.branch,
          name:user.name,
          regno:user.regno
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
          <h2>Already a user? To get connected with us please login using your account.</h2>
          <button id="btn1" onClick={()=>setauthpage("login")}>LOGIN</button>
    </Col>
    <Col>
        <Container id="signup3">
        <h1 >SIGNUP</h1>
       
        {  (isBack||!isEmailValid) ?(
             
        <form className="signup_form" onSubmit={handleEmail}>
            <img src={usericon} alt="user icon" className="sign_icon"/>
           
            <input required type="text"  value={user.name} onChange={e=>setuser({...user,name:e.target.value})} placeholder="Enter your name" disabled={submitting}/  >
           
           <input required type="email" value={user.email} onChange={e=>setuser({...user,email:e.target.value})} placeholder="Enter your email" disabled={submitting}/>
            
           <input required type="text" value={user.regno} onChange={e=>setuser({...user,regno:e.target.value})}  placeholder="Enter your register number" disabled={submitting} />
           <h3>Already a user?<a id="link1" onClick={()=>setauthpage("login")} > Login</a></h3>
        <button> {submitting?( <div>Loading  <div class="spinner-border " role="status">
  <span class="sr-only">Loading...  </span>
</div></div>):'Next'}  </button>
     
        </form>
        ):(

            <form className="signup_form" onSubmit={handleSubmit}>
            <br/>
            <input required type="text"  value={user.program} onChange={e=>setuser({...user,program:e.target.value})} placeholder="Enter your program" /  >
            <input required type="text"  value={user.branch} onChange={e=>setuser({...user,branch:e.target.value})} placeholder="Enter your branch" /  >
           
           <input required type="password" value={user.password} onChange={e=>setuser({...user,password:e.target.value})} placeholder="Enter your password"/>
            
           <input required type="password" value={conpasswd} onChange={e=>setConPasswd(e.target.value)}  placeholder="Enter your password again"  />
           <h3>Already a user?<a id="link1" onClick={()=>setauthpage("login")} > Login</a></h3>
          <button>{submitting?( <div>Loading  <div class="spinner-border " role="status">
  <span class="sr-only">Loading...  </span>
</div></div>):'Sign Up'}</button><button onClick={()=>setBack(true)}>Back</button> 

</form>

        )}
        </Container>
    </Col>
    
      </Row>
    </Container>
      
     
    
)
}


export default Register