import React,{useState,useContext} from 'react'
import './login.css'
import { useCookies } from 'react-cookie';
import usericon from './user.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import axios from 'axios';
import Swal from 'sweetalert2';
import Context from '../../context';
function Login({setauthpage}) {
    //the user object 
    const [user, setuser] = useState({
        email:'',
        password:''
    })
    const { dispatch } = useContext(Context);
    const [cookies, setCookie] = useCookies(['user']);
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
          if(response.data.msg=="Yes")
          {
              setBack(false);
          setEmailValidity(true);
          }
          else
          {
            Swal.fire({
                
                title: 'Error',
                text: 'Email Dont Exists',
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
    const handlesubmit=async(e)=>{
        try
        {
        e.preventDefault();
        setSubmitting(true);
       
        const response=await axios({
            method: 'post',
            url: 'https://placexp.herokuapp.com/login',
            data: {
              email:user.email,
              password:user.password
            }
          });
          console.log(response);
          if(response.data.msg==='Login Successfull')
          {
            const user = {
                
                role: response.data.data.role,
                email: response.data.data.email,
                id: response.data.data.id
              };
              const userCookie = JSON.stringify(user);
              setCookie('user', userCookie, { path: '/', maxAge: 86400 });
              console.log(cookies);
              dispatch({ type: 'LOGIN_USER', payload: {response} });
              setSubmitting(false);
          }
          else
          {
            Swal.fire({
            
                title: 'Error',
                text: 'Invalid Password and Email Combination',
                type: 'error',
                icon:'error',
                confirmButtonText: 'Please try Again'
              });
setSubmitting(false);
          }
        }
        catch(err)
        {

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
        
       <Container id="login">
          <Row>
              <Col id="login1">
              <h1>Welcome Back!</h1>
              <h2>Are you new around here? Sign up to get connected with us.</h2>
              <button onClick={()=>setauthpage("signup")} id="btn0">SIGN UP</button>
              </Col>
              <Col  >
              <Container id="login3">
              <h1>LOGIN </h1>
            <img src={usericon} alt="user icon" className="login_icon w-50 h-50"/>
            <br/>
            {  (isBack||!isEmailValid) ?(
            <form className="login_form" onSubmit={handleEmail}>
                
               <input type="email" value={user.email} onChange={e=>setuser({...user,email:e.target.value})} placeholder="Enter your email"/>
                
              
                <h4  id="link" onClick={()=>setauthpage("forgot") } style={{color:":#834F80"}}>Forgot Password?</h4>
                <h4>Not Registered yet?<a id="link" onClick={()=>setauthpage("signup")} style={{color:":#834F80"}}>Sign up</a></h4>
                <button> {submitting?( <div>Loading  <div class="spinner-border " role="status">
  <span class="sr-only">Loading...  </span>
</div></div>):'Next'}  </button>
            </form>
            ):
            ( <form className="login_form" onSubmit={handlesubmit}>
                
           
             
            <input type="password"  onChange={e=>setuser({...user,password:e.target.value})}  placeholder="Enter your password"  value={user.password}/>
             <h4  id="link" onClick={()=>setauthpage("forgot") } style={{color:":#834F80"}}>Forgot Password?</h4>
             <h4>Not Registered yet?<a id="link" onClick={()=>setauthpage("signup")} style={{color:":#834F80"}}>Sign up</a></h4>
             <button>{submitting?( <div>Loading  <div class="spinner-border " role="status">
  <span class="sr-only">Loading...  </span>
</div></div>):'Login'}</button><button onClick={()=>setBack(true)}>Back</button> 
         </form>)}
              </Container>
             
              </Col>
          </Row>
          
        </Container>
        
        
    )
}

export default Login;