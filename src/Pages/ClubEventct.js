import React from 'react';
import './ClubEventct.css'

function ClubEventct() {

  function showNavbar(){
    document.querySelector(".header-nav-links-mobile").style.display = "flex";
}
function hideNavbar(){
    document.querySelector(".header-nav-links-mobile").style.display = "none";
}

const addClubEvents = [["Title", "text"], ["Description", "text"], ["Organizer", "text"], ["Tags", "text"], ["Link", "text"], ["Date", "date"], ["Deadline", "date"], ["Time", "time"]]
console.log(addClubEvents)
  return (
    <>
      <header className='header'>
            <div className='logo-container'>
                <img src={require("../assets/logo.png")} alt="" />
                <h2>PlaceXP</h2>
            </div>

            <div className='header-nav-links'>
                <a href=''>Home</a>
                <a href=''>Interviews</a>
                <a href=''>Hackathons</a>
                <a href='' className='active'>Club Events</a>
                <a href=''>Contact Us</a>
                <img onClick={showNavbar} className='mobile-menu' src="https://img.icons8.com/ios-filled/50/000000/menu--v4.png"/>
            </div>
            

        </header>
        <div className='header-nav-links-mobile'>
            <img onClick={hideNavbar} className='close-btn' src="https://img.icons8.com/material-rounded/24/000000/cancel--v2.gif"/>
                <a href=''>Home</a>
                <a href=''>Interviews</a>
                <a href=''>Hackathons</a>
                <a href='' className='active'>Club Events</a>
                <a href=''>Contact Us</a>
        </div>
    
      <div className='clubEventct'>
        <div className='clubEventsct-container'>
              <h1>Add Club Events</h1>
              <svg width="130" height="25" className='line-style-ct' viewBox="0 0 183 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 26C144.6 -0.220646 180 1.23606 180 5.24199" stroke="#8372EB" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
        </div>
              <div className='add-clubEvents-form'>
                {addClubEvents.map((element) => (
                    <div>
                      <label for={element[0]}>{element[0]}: </label>
                      <input type={element[1]} name="" value="" placeholder={"Enter the "+element[0]}/>
                    </div>
                ))
                }
                <input className='submit-btn' type="button" name="" value="Submit" />
              </div>
        
      </div>
    </>
  );
}

export default ClubEventct;
