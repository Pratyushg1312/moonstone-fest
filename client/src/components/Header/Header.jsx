import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
export default function Header() {
  
  const [display, setDisplay] = useState(window.innerWidth > 1024? true : false);
  return (
    <div style={{paddingBottom:"70px"}}>
    <div className="nav-header">
      <div className="header-bar">
        <div className="header-img-container">
          <NavLink to="/">
            <img src="./images/medicaps.png" alt="" width={"80px"} />
          </NavLink>
          {display ? (
            <p className="cross" onClick={() => setDisplay(!display)}>
              X
            </p>
          ) : (
            <div className="burger" onClick={() => setDisplay(!display)}>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          )}
        </div>
        {display ? <div className="nav-items">
          <div className="item1">
            <NavLink to="/aboutus">About Us</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/ourteam">Our Team</NavLink>
          </div>
          <div className="item2">
            <NavLink to="/contactus">Contact</NavLink>
          </div>
        </div>:<></>}
      </div>
      </div>
    </div>
  );
}
