import React,{useState,useContext} from 'react'
import Register from '../Component/Auth/Register'
import Login from '../Component/Auth/Login';
import Context from '../context';
import Forgot from '../Component/Auth/Forget';
import { Link, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
const Auth = ({ defaultRoutine = 'login' }) => {
   
    const { State, dispatch } = useContext(Context);
    const [authpage, setauthpage] = useState(defaultRoutine)
    const [cookies, removeCookie] = useCookies(['user']);
    const handlerender = authpage=>{
        if (State.isAuth) {
            if (authpage === 'logout') {
                removeCookie('user', null, { maxAge: 0 });
             
                dispatch({ type: 'LOGOUT_USER' });
        
              }
        return <Redirect to="/" />;
        }
        switch (authpage) {
            case 'signup':
               return <Register setauthpage={setauthpage} />
             
            case 'login': return <Login setauthpage={setauthpage} />
              
            default:

            return <Forgot/>    
             }
        }
    return (<div className="auth">{handlerender(authpage)}</div>)
}

export default Auth