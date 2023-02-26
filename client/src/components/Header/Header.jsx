import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
export default function Header() {
  const [display, setDisplay] = useState(
    window.innerWidth > 1024 ? true : false
  );
  const [view, setView] = useState(true);
  return (
    <div className="nav-header" style={{ backgroundColor: "#061F25" }}>
      {display ? (
        <div className="header-bar">
          <div className="header-container">
            <li>
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img
                  className="logo-img"
                  src="./images/logomoon.jpeg"
                  alt=""
                  width={"80px"}
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/ourteam">Glimpses</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">Contact</NavLink>
            </li>
          </div>
        </div>
      ) : (
        <div className="R-header-bar">
          <div className="Responsive-header">
            <NavLink to="/">
              <img
                className="logo-img"
                src="./images/logomoon.jpeg"
                alt=""
                width={"80px"}
              />
            </NavLink>
            {view ?(<p className="cross" onClick={()=>setView(!view)}> X </p>) : 
            (<div className="burger" onClick={()=>setView(!view)}>
              <div className="line"></div>
              <div className="line"></div>
            </div>)}
          </div>
          {view?(<div className="R-header-container">
            <li>
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
            <li>
              <NavLink to="/ourteam">Glimpses</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">Contact</NavLink>
            </li>
          </div>):(<></>)}
        </div>
      )}
    </div>
  );
}
