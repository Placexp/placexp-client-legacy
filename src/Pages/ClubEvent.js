import React, { useEffect, useState, useContext } from "react";

import "./ClubEvent.css";

const ClubEvent = () => {
  return (
    <>
      <div className="ClubEvent__page">
        <div className="ClubEvent__container">
          <div className="ClubEvent__heading">
            <h1>Club Events</h1>
          </div>

          <div className="search_filter">
            <form className="search">
              <label>Search</label>
              <input type="text" />
            </form>
          </div>

          <div className="ClubEvent__section">
            <div className="ClubEvents">
              {
                [0, 1, 2, 3, 4].map((i) => (

                  <div className="ClubEvent__card">
                    <h2 className="ClubEvent__name">Club Event {i + 1}</h2>
                    <h3 className="ClubEvent_body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </h3>
                    <div className="tag__area">
                      <h3 className="ClubEvent__tag tag__header">tags: </h3>
                      <div className="ClubEvent__tag">
                        {
                          [0, 1, 2, 3, 4].map((j) => (
                            <div className="tag">tag{j + 1}</div>
                          ))
                        }
                      </div>
                    </div>
                  </div>

                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ClubEvent;
