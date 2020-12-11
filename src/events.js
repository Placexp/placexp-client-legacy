import React from 'react';
import './events.css';
import Logo from './logo.PNG'

function Events() {
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
            <p class="event-heading">Events</p>
            <br />
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th class="col-6"><h3 class="text-center">Event listing</h3></th>
                  <th class="col-6"><h3 class="text-center">Approval</h3></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="data1">Event1</td>
                  <td class="data2">
                      <form class="event-listing">
                        <div class="form-row">
                        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                            <div class="btn-group mr-0" role="group" aria-label="First group">
                              <button type="button" class="btn-lg btn-success">Approve</button>
                              <button type="button" class="btn-lg btn-danger">Disapprove</button>
                            </div>
                          </div>
                        </div>
                      </form>
                  </td>
                </tr>
                <tr>
                  <td class="data1">Event2</td>
                  <td class="data2">
                      <form class="event-listing">
                        <div class="form-row">
                            <div class="">
                                <button type="button" class="btn btn-lg btn-success">Approve</button>
                                <button type="button" class="btn btn-lg btn-danger">Disapprove</button>
                            </div>
                        </div>
                      </form>
                  </td>
                </tr>
              </tbody>
            </table>

            </div>

          </div>
        </div>
  );
}

export default Events;
