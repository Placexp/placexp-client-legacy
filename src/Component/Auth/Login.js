import React,{useState} from 'react'
import './login.css'
import usericon from './login.gif'

function Login({setauthpage}) {
    //the user object 
    const [user, setuser] = useState({
        email:'',
        password:''
    })
    console.log(user)
    let handlesubmit=e=>{
        e.preventDefault();
        
        //verifying the creditantials
    }
    return (
   
        <div className="container" >
          
          <div className="left_container">
             <h1>WelcomeBack!</h1>
              <h2>Are you new around here? Sign up to get connected with us.</h2>
              <button onClick={()=>setauthpage("signup")}>SIGN UP</button>
        </div>
        <div className="login_container">
            <h1>LOGIN TO PLACEXP</h1>
            <img src={usericon} alt="user icon" className="user_icon"/>
            <form className="login_form" onSubmit={handlesubmit}>
                <h5>Email</h5>
               <input type="email" value={user.email} onChange={e=>setuser({...user,email:e.target.value})} placeholder="Enter your email"/>
                <h5>Password</h5>
               <input type="password" value={user.password} onChange={e=>setuser({...user,password:e.target.value})}  placeholder="Enter your password"  />
               
                <h3>Not Registered yet?<button  onClick={()=>setauthpage("signup")} style={{color:"#00bcd4"}}>Sign up</button></h3>
               <button>LOGIN</button>
               <h3 className="forgotpass" color="red"  onClick={()=>setauthpage("forgot") } style={{color:"#00bcd4"}}>Forgot Password?</h3>
            </form>
        </div>
        </div>
     
        
    )
}

export default Login;