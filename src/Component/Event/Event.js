import React, { useEffect, useState } from "react";
import './Events.css';
import EventIcon from "@material-ui/icons/Event";
import { eventData } from "./eventData";
import Sidebar from "../Layout/Sidebar";
import Header from "../Layout/Header";

function Event() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="home" >
      <Header />
        <Sidebar />
       
      </div>
      <div className="events">
        <div className="events__header"></div>
        <div className="events__container">
          <h4>UPCOMING EVENTS</h4>

          <div className="card__section">
            {eventData?.map((item) => (
              <div className="events__card">
                <div className="events__info">
                  <img src={item.banner} alt="banner" />
                  <div className="events__infoContainer">
                    <div
                      className="events__image"
                      style={{ backgroundImage: `url(${item.logoImg})` }}
                    ></div>

                    <div className="events__infoTitle">
                      {item.info}
                      <p>{item.companyName}</p>
                    </div>
                    <div className="type">
                     
                      {item.date}
                    </div>
<EventIcon/>
                    <div className="events__location"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="loadmore">View more</div>
        </div>
      </div>
    </>
  );
}

export default Event;