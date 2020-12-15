import React ,{useContext,useState} from "react";
import View from "../Component/Doubt/View";
import CreateDoubt from "../Component/Doubt/CreateDoubt";
import Context from '../context';
import { useCookies } from 'react-cookie';
import { Link, Redirect } from 'react-router-dom';
import Sidebar from "../Component/Layout/Sidebar";
import Header from "../Component/Layout/Header";
const Doubt = () => {
    
    const { State, dispatch } = useContext(Context);
    const [doubtpage, setdoubtpage] = useState('view')
        const [cookies, setCookie] = useCookies(['user']);   
    if (!State.isAuth) {
        return <Redirect to="/" />;
        }

        

        const displayRoute = doubtpage=>{
           
            switch (doubtpage) {
                case 'view':
                   return <View setdoubtpage={setdoubtpage} />
                 
                
                  
                default:
    
                return <CreateDoubt setdoubtpage={setdoubtpage}/>    
                 }
            }
        return (<div className=""><Header/><br/><br/>{displayRoute(doubtpage)}</div>)
};

export default Doubt;