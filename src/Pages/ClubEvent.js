import React from 'react';
import './ClubEvent.css'

function ClubEvent() {

    function showNavbar(){
        document.querySelector(".header-nav-links-mobile").style.display = "flex";
    }
    function hideNavbar(){
        document.querySelector(".header-nav-links-mobile").style.display = "none";
    }
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

        <div className='clubEvents'>
            <div className='clubEvents-container'>
                <div className='clubEvents-left'>
                    <h2>ALL ABOUT CLUB EVENTS</h2>
                    <h1>Get it here.</h1>
                    <svg width="130" height="25" className='line-style' viewBox="0 0 183 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 26C144.6 -0.220646 180 1.23606 180 5.24199" stroke="#8372EB" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className='search'>
                    <input type="text" className='search-bar' placeholder='Search..'/>
                    <input type="button" className='filter-btn' value='Filter' />
                </div>
            </div>

            <div className='clubEvents-box'>
            {
                [0, 1, 2, 3, 4, 6].map((i) => (
                    <div className='clubEvents-card'>
                        <div className='clubEvents-sub-card'>
                            <h1>EVENT {i+1}</h1>
                            <p>Description: Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className='Tags'>
                        <h3>Tags:&nbsp;</h3>
                        {
                            [0, 1, 2].map((j) => (
                            <h3>Tag{j}&nbsp;</h3>
                            ))
                        }
                        </div>
                    </div>
                ))
            }  
            </div>
            
        </div>
        
    </>
    );
}

export default ClubEvent;
