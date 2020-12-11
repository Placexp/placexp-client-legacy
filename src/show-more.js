import React,{useState} from 'react';
import './queries.css';

function App() {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">
      Qui, consectetur neque ab porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero commodi officia aliquam! Maxime.
      </p>
  </div>
  const linkName=readMore?'Read Less':'Read More'
  return (
    <div className="App">
      {readMore && extraContent}
      <button class="btn btn-outline-dark btn-sm" onClick={()=>{setReadMore(!readMore)}}><h2 class="link-name">{linkName}</h2></button>
    </div>
  );
}

export default App;
