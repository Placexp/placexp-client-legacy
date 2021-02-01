import React,{useState} from 'react';
import './queries.css';
import Logo from './logos.PNG';
import App from "./show-more"

function  Queries() {
  return (
    <div class="wrapper">
        <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
           <div class="container-fluid">
            <button type="button" id="sidebarCollapse" class="navbar-btn">
              <span></span>
              <span></span>
              <span></span>
            </button>
           </div>
            <img class="logo-image" src={Logo} alt="" />
            <a class="navbar-brand" href="#">PlaceXP Admin</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarNav">
           <ul class="navbar-nav">
             <li class="nav-item active">
               <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
             </li>
             <li class="nav-item active">
               <a class="nav-link" href="#">Events</a>
             </li>
             <li class="nav-item active">
               <a class="nav-link" href="#">Profile</a>
             </li>
           </ul>
        </div>
      </nav>
        </header>
        <nav id="sidebar">
            <ul class="list-unstyled components">
                <li>
                    <a href="#eventSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Event</a>
                    <ul class="collapse list-unstyled" id="eventSubmenu">
                        <li>
                            <a href="">View Events</a>
                        </li>
                    </ul>
                </li>
                <li>
                <br />
                    <a href="#doubtSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Doubt</a>
                    <ul class="collapse list-unstyled" id="doubtSubmenu">
                        <li>
                            <a href="#">View Doubts</a>
                        </li>
                        <li>
                            <a href="#">Ask Doubts</a>
                        </li>
                    </ul>
                </li>
                <li>
                <br />
                    <a href="#profileSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Profile</a>
                    <ul class="collapse list-unstyled" id="profileSubmenu">
                        <li>
                            <a href="#">View Profile</a>
                        </li>
                        <li>
                            <a href="#">View Doubts</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>

        <div id="content">
        </div>

        <div class="stuff">
          <div class="event-approval">
            <p class="event-heading">Queries</p>
            <br />
            <table class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col">Queries</th>
                  <th scope="col">Responses</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="queries">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <App />
                  </td>
                  <td class="response">
                    <div class="form-group">
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="queries">Jacob</td>
                  <td class="response">Thornton</td>
                </tr>
                <tr>
                  <td class="queries">Larry the Bird</td>
                  <td class="response">@twitter</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
  );
}

export default Queries;
