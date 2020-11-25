import React,{useState} from 'react'
import Register from './Register'
import Login from './Login';
import Forgot from './Forgot';

function Auth() {

    const [authpage, setauthpage] = useState('login')
    const handlerender = authpage=>{
        switch (authpage) {
            case 'signup':
               return <Register setauthpage={setauthpage} />
                break;
            case 'login': return <Login setauthpage={setauthpage} />
                break;
            case 'forgot':return <Forgot />    
             }
        }
    return (handlerender(authpage))
}

export default Auth
