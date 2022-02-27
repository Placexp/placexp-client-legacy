import React from 'react';
import './VerifyInterview.css'

function VerifyInterview() {

  function showNavbar() {
    document.querySelector(".header-nav-links-mobile").style.display = "flex";
  }
  function hideNavbar() {
    document.querySelector(".header-nav-links-mobile").style.display = "none";
  }


  return (
    <>
      {/*Header starts here Use it as a component */}
      <header className='header'>
        <div className='logo-container'>
          <img src={require("../assets/logo.png")} alt="" />
          <h2>PlaceXP</h2>
        </div>

        <div className='header-nav-links'>
          <a href=''>Home</a>
          <a href=''>Interviews</a>
          <a href='' className='active'>Hackathons</a>
          <a href=''>Club Events</a>
          <a href=''>Contact Us</a>
          <img onClick={showNavbar} className='mobile-menu' src="https://img.icons8.com/ios-filled/50/000000/menu--v4.png" />
        </div>


      </header>
      <div className='header-nav-links-mobile'>
        <img onClick={hideNavbar} className='close-btn' src="https://img.icons8.com/material-rounded/24/000000/cancel--v2.gif" />
        <a href=''>Home</a>
        <a href='' className='active'>Interviews</a>
        <a href=''>Hackathons</a>
        <a href=''>Club Events</a>
        <a href=''>Contact Us</a>
      </div>
      {/* Header ends here */}

      <div className='verify-interview'>
        <div className='search'>
          <input type="text" className='search-bar' placeholder='Search..' />
          <input type="button" className='filter-btn' value='Filter' />
        </div>
        <div className='edit-interview'>
          {[0, 1, 2, 3, 4].map(() => (
            <div>
              <h4>123@gmail.com</h4>
              <h4>JP Morgan</h4>
              <a href=''>Edit Link</a>
              <a href=''>See details</a>
              <button>Reject</button>
              <button>Delete</button>
            </div>
          ))
          }
        </div>

      </div>

      <footer className='footer'>
        <div className='footer-container'>
          <h3 className='footer-heading'>Connect With Us</h3>
          <div className='footer-social-media'>
            <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10H14C11.7909 10 10 11.7909 10 14V50C10 52.2091 11.7909 54 14 54H50C52.2091 54 54 52.2091 54 50V14C54 11.7909 52.2091 10 50 10Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22 46V18L44 32L22 46Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42 2H6C3.79086 2 2 3.79086 2 6V42C2 44.2091 3.79086 46 6 46H42C44.2091 46 46 44.2091 46 42V6C46 3.79086 44.2091 2 42 2Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M39 10C39.5523 10 40 9.55228 40 9C40 8.44772 39.5523 8 39 8C38.4477 8 38 8.44772 38 9C38 9.55228 38.4477 10 39 10Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <svg width="30" height="30" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_271_61)">
                <path d="M6.10026 0C2.56563 0 0 2.49082 0 5.9221C0 9.3513 2.51483 11.8404 5.97874 11.8404C7.77536 11.8404 9.3234 11.2454 10.4559 10.119C11.5421 9.03854 12.1409 7.54807 12.1398 5.89504C12.0603 2.42422 9.57639 0 6.10026 0ZM8.87807 8.46148C8.17646 9.15936 7.17321 9.52796 5.97874 9.52796C3.79099 9.52796 2.26289 8.04547 2.26289 5.9221C2.26289 3.76334 3.80535 2.31242 6.10026 2.31242C8.34439 2.31242 9.8261 3.7401 9.87691 5.92268C9.87691 6.91921 9.52223 7.82071 8.87807 8.46148Z" fill="black" />
                <path d="M1.08508 51.9999H11.2548V13.7937H1.08508V51.9999ZM3.34797 16.1061H8.99192V49.6875H3.34797V16.1061Z" fill="black" />
                <path d="M38.1179 14.1819C33.402 14.1819 30.5148 15.845 28.842 17.4094L28.5238 14.1819H17.0182V52.3881H28.2862V32.3074C28.2862 31.4426 28.6287 29.6466 28.8442 29.1725C30.2055 26.1764 32.0418 26.1764 34.8229 26.1764C38.0261 26.1764 40.7321 29.2459 40.7321 32.8788V52.3881H52.0465V30.8012C52.0465 19.3825 44.8259 14.1819 38.1179 14.1819ZM49.7836 50.0757H42.995V32.8788C42.995 27.992 39.2526 23.864 34.8229 23.864C31.981 23.864 28.7602 23.864 26.7912 28.1992C26.3846 29.0951 26.0233 31.2427 26.0233 32.3074V50.0757H19.2811V16.4943H26.4775L26.9393 21.1705H28.7933L29.1248 20.6239C29.8795 19.3825 32.2662 16.4943 38.1179 16.4943C43.7364 16.4943 49.7836 20.9711 49.7836 30.8012V50.0757Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_271_61">
                  <rect width="52" height="52" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </footer>
    </>
  );
}

export default VerifyInterview;
