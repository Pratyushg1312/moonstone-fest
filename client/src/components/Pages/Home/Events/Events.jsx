import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Events.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Events() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="styles-content">
        <div className="eventcen">
          <h1 className="Events-section">EVENTS</h1>
        </div>
        <div className="day-events">
          <NavLink to="/events"
            data-aos="flip-left"
            data-aos-delay="100"
            className="styles-container">
            <div className="style-text">
              <span></span>
              <img
                src="/images/bandupper.jpg"
                alt=""
                srcSet=""
              />
              <h1 data-text="Day 1">Day 1</h1>
            </div>
          </NavLink>
          <NavLink to = "/events"
            data-aos="flip-left"
            data-aos-delay="200"
            className="styles-container"
          >
            <div className="style-text">
              <span></span>
              <img
                src="https://i.ytimg.com/vi/8s3qx8RP0ak/maxresdefault.jpg"
                alt=""
                srcset=""
              />
              <h1>Day 2</h1>
            </div>
          </NavLink>
          <NavLink to="/events"
            data-aos="flip-left"
            data-aos-delay="300"
            className="styles-container"
          >
            <div className="style-text">
              <span></span>
              <img
                src="/images/bandEvent.jpg"
                alt=""
                srcset=""
              />
              <h1>Day 3</h1>
            </div>
          </NavLink>
        </div>
      </div>
      
    </>
  );
}

export default Events;
