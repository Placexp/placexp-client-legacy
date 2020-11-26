import React,{useState} from 'react'
import Register from '../Component/Auth/Register'
import Login from '../Component/Auth/Login';
import Forgot from '../Component/Auth/Forget';

function Auth() {

    const [authpage, setauthpage] = useState('login')
    const handlerender = authpage=>{
        switch (authpage) {
            case 'signup':
               return <Register setauthpage={setauthpage} />
             
            case 'login': return <Login setauthpage={setauthpage} />
              
            default:

            return <Forgot />    
             }
        }
    return (handlerender(authpage))
}

export default Auth