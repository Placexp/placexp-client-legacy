import React,{useState} from 'react'
import usericon from './login.gif'
import './register.css';

function Register({setauthpage}) {
   //the user object 
   const [user, setuser] = useState({
    name:'',   
    email:'',
    password:''
})
let handlesubmit=e=>{
    e.preventDefault();
    
    //verifying the creditantials
}
return (
   
    <div className="container" >
      
      <div className="left_container">
         <h1>Hi Welcome to PlaceXP</h1>
          <h2>Already a user? To get connected with us please login using your account.</h2>
          <button onClick={()=>setauthpage("login")}>LOGIN</button>
    </div>
    <div className="signup_container">
        <h1 className="header_mobile">SIGNUP </h1>
        <h1 className="header">SIGNUP TO PLACEXP</h1>
        <img src={usericon} alt="user icon" className="user_icon"/>
        <form className="signup_form" onSubmit={handlesubmit}>
            <h5>Full Name</h5>
            <input type="text"  value={user.name} onChange={e=>setuser({...user,name:e.target.value})} placeholder="Enter your name" /  >
            <h5>Email</h5>
           <input type="email" value={user.email} onChange={e=>setuser({...user,email:e.target.value})} placeholder="Enter your email"/>
            <h5>Password</h5>
           <input type="password" value={user.password} onChange={e=>setuser({...user,password:e.target.value})}  placeholder="Enter your password"  value={user.password}/>
           <h3>Already a user?<a onClick={()=>setauthpage("login")} style={{color:"#00bcd4"}}> Login</a></h3>
           <button>REGISTER</button>
        </form>
    </div>
    </div>
    
)
}


export default Register