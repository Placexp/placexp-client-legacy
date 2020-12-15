import React ,{useContext,useState,useEffect} from "react";


import Approve from '../Component/Admin/Approve';
import Context from '../context';
import { useCookies } from 'react-cookie';
import { Link, Redirect } from 'react-router-dom';

import Header from "../Component/Layout/Header";
import axios from 'axios';
import Swal from 'sweetalert2';
const ApproveEvent = () => {
    
    const { State, dispatch } = useContext(Context);
    if (!State.isAuth) {
        return <Redirect to="/" />;
        }
        
   
return (

<>
<Approve/>
</>

)
    }
    export default ApproveEvent;