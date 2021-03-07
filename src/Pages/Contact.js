import React, { useEffect, useState, useContext } from "react";
import { Jumbotron } from "react-bootstrap";
import {Link} from 'react-router-dom';
import logo from '../assets/Images/logo-black.png'
import { useCookies } from 'react-cookie';
import io from "socket.io-client";
import Context from '../context';
import './Contact.css';
let socket;
const ENDPOINT = 'http://localhost:5000/';
const Contact=({location})=>{
  const [name, setName] = useState('d');
  const [room, setRoom] = useState('dd');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'http://localhost:5000/';

const postid="2";
  useEffect(() => {
    
  
    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { postid }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(message.data);
     
    });
    
    
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    console.log(messages);
    }
  }
  const [cookies, setCookie] = useCookies(['user']);
  const { State, dispatch } = useContext(Context);
return (
<div>
  <div class="top">
    <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand"><img src={logo} height="70px" align="left"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto">
          <li class="nav-item">
              <a class="nav-link active" href="/">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Interviews</a>
              <div class="dropdown-menu">
                {State.isAuth && cookies.user.role ==='A'&& <Link className="dropdown-item" to="/interview_create">Add Interviews</Link>}
                {State.isAuth && cookies.user.role ==='A'&& <Link className="dropdown-item" to="/verifyinterview">Verify Interviews</Link>}
                <Link className=" dropdown-item" to="/interview">View Interviews</Link>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Contact">Contact Us</a>
            </li>
            <li class="nav-item">
              {State.isAuth && cookies.user.role ==='A'&& (<Link className="nav-link" to="/logout"><font color="red"><i class="fas fa-power-off"></i></font></Link>)}
            </li>
          </ul>
        </div>
      </nav>

      <div class="container2">
        <div class="row no-gutters">
        <Jumbotron class="main">
          <h1 class="display-4">CONTACT US</h1>
          <form class="row g-3 needs-validation" novalidate onSubmit={sendMessage}>
            <div class="col-6">
              <label for="validationCustomUsername" class="form-label"><p class="lead">Username</p></label>
              <div class="input-group has-validation">
                <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
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
  <div>
    {messages.map((e)=>(<p>{e.subject}</p>))}
  </div>
</div>
);

};
export default Contact;




















