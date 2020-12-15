import React, { useEffect, useState } from "react";
import io from "socket.io-client";
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
return (
<div>
<div>
<form onSubmit={sendMessage}>
<input type="text" value={message} onChange={e=>setMessage(e.target.value)}/>

<button className="btn btn-primary">Submit</button>




</form>



</div>

<div>{messages.map((e)=>(<p>{e.subject}</p>))
}
</div>
</div>

);

};
export default Contact;