import React, { useEffect, useRef } from "react";
import "./Events.css";
import { NavLink } from 'react-router-dom'
import "aos/dist/aos.css";
function Events() {
  return (
    <div className="styles-content">
      
      <div className="eventcen">

      <h1 className="Events-section">EVENTS</h1>
      </div>
      <div className="day-events">
        <div
          data-aos="flip-left"
          data-aos-delay="100"
          className="styles-container"
        >
          <div className="style-text">
            <span></span>
            <img
              src="https://i.ytimg.com/vi/8s3qx8RP0ak/maxresdefault.jpg"
              alt=""
              srcset=""
            />
            <h1 data-text="Day 1">Day 1</h1>
          </div>
        </div>
    </section>
    <section className="section-background parallax3">
        <h2>Day 1<i class="fa-solid fa-moon" style={{ color: "#fab005" }}></i>(Night)</h2>
        <div className="card-bunch">
            <div className="card-bunch-child">
                <div className="card-event">
                    <div className="img-box-events">
                        <img src="/images/bandEvent.jpg" alt="" srcset="" />
                        <img src="/images/bandback.jpg" alt="" srcset="" />
                    </div>
                    <div className="details-events">
                        <div className="content-events">
                            <h3 style={{ color: "black" }}>Apps</h3>
                            <div className="buttons-section">
                                <NavLink to="/"><button className="button-section btn-view">View</button></NavLink>
                                <NavLink to="/Registration"><button className="button-section registration-btn">Register</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-event">
                    <div className="img-box-events">
                        <img src="/images/bandEvent.jpg" alt="" srcset="" />
                        <img src="/images/bandback.jpg" alt="" srcset="" />
                    </div>
                    <div className="details-events">
                        <div className="content-events">
                            <h3 style={{ color: "black" }}>Apps</h3>
                            <div className="buttons-section">
                                <NavLink to="/"><button className="button-section btn-view">View</button></NavLink>
                                <NavLink to="/Registration"><button className="button-section registration-btn">Register</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-event">
                    <div className="img-box-events">
                        <img src="/images/bandEvent.jpg" alt="" srcset="" />
                        <img src="/images/bandback.jpg" alt="" srcset="" />
                    </div>
                    <div className="details-events">
                        <div className="content-events">
                            <h3 style={{ color: "black" }}>Apps</h3>
                            <div className="buttons-section">
                                <NavLink to="/"><button className="button-section btn-view">View</button></NavLink>
                                <NavLink to="/Registration"><button className="button-section registration-btn">Register</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-event">
                    <div className="img-box-events">
                        <img src="/images/bandEvent.jpg" alt="" srcset="" />
                        <img src="/images/bandback.jpg" alt="" srcset="" />
                    </div>
                    <div className="details-events">
                        <div className="content-events">
                            <h3 style={{ color: "black" }}>Apps</h3>
                            <div className="buttons-section">
                                <NavLink to="/"><button className="button-section btn-view">View</button></NavLink>
                                <NavLink to="/Registration"><button className="button-section registration-btn">Register</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-delay="300"
          className="styles-container"
        >
          <div className="style-text">
            <span></span>
            <img
              src="https://i.ytimg.com/vi/8s3qx8RP0ak/maxresdefault.jpg"
              alt=""
              srcset=""
            />
            <h1>Day 3</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
