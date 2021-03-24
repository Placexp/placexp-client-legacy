import React, { useEffect, useState, useContext } from "react";
import { Jumbotron } from "react-bootstrap";
import {Link} from 'react-router-dom';
import logo from '../assets/Images/logo-black.png'
import { useCookies } from 'react-cookie';
import io from "socket.io-client";
import axios from 'axios';
import Context from '../context';
import Swal from 'sweetalert2';
import './Contact.css';
import {Url} from '../Url';
let socket;
const ENDPOINT = 'http://localhost:5000/';
const Contact=({location})=>{
  const [name, setName] = useState('d');
  const [room, setRoom] = useState('dd');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  const sendMessage = async (event) => {
    try
{
    event.preventDefault();

  const response= await axios({
    method: 'post',
    withCredentials: true,
    url: Url()+"/contact",
    data:{
        email:email,
        subject:message
    }})
    Swal.fire({
       
      title: 'Success',
      text: 'Query registered . Our content team will contact you . Stay Tuned. ',
      imageUrl:"https://imgur.com/MiIjgkr.jpg",
      imageWidth: "50px",
      imageHeight:"50px",
      type: 'success',
      confirmButtonText: 'Okay'
    });
}
catch(ERR)
{

}
   
  }
  const [cookies, setCookie] = useCookies(['user']);
  const { State, dispatch } = useContext(Context);
return (
<div>
  <div class="top">
      <Header />
      <div class="container2">
        <div class="row no-gutters">
        <Jumbotron class="main">
          <h1 class="display-4">CONTACT US</h1>
          <form class="row g-3 needs-validation" novalidate onSubmit={sendMessage}>
            <div class="col-6">
              <label for="validationCustomUsername" class="form-label"><p class="lead">Username</p></label>
              <div class="input-group has-validation">
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                <div class="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
            <div class="col-12">
                <label for="validationCustomUsername" class="form-label"><p class="lead">Your Query</p></label>
                <div class="input-group has-validation">
                  <textarea class="form-control" aria-label="With textarea" value={message} onChange={e=>setMessage(e.target.value)}></textarea>
                  <div class="invalid-feedback">
                    Please don't leave the field empty.
                  </div>
                </div>
            </div>
            <div class="col-12">
              <button class="btn btn-outline-primary btn-lg" type="submit">Submit</button>
            </div>
          </form>
        </Jumbotron>
    </div>

    </div>
  </div>

</div>
);

};
export default Contact;
