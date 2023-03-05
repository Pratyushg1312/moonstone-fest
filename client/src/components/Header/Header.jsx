import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
export default function Header() {
  const [appstate,chngeState]=useState({activeobj:null, objects:[{id:1},{id:2},{id:3},{id:4},{id:5}]});
  const [display, setDisplay] = useState(
    window.innerWidth > 1024 ? true : false
  );
  const [view, setView] = useState(false);
  function activeate(){

  }
  return (
    <div className="nav-header" style={{ backgroundColor: "#061F25" }}>
      {display ? (
        <>
        <div className="line"></div>
        <div className="header-bar">
          <div className="header-container">
            <li onmouse>
              <NavLink to="/aboutus"  style={({ isActive }) => ({
    
    textShadow:isActive ?  '0px 20px 10px #00FFD1' :'none',
    })}>About Us</NavLink>
            </li>
            <li>
              <NavLink to="/events" style={({ isActive }) => ({
    
    textShadow:isActive ?  '0px 20px 10px #00FFD1' :'none',
    })} >Events</NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img
                  className="logo-img"
                  src="./images/logomon.png"
                  alt=""
                  width={"100px"}
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/glimpses" style={({ isActive }) => ({
    
    textShadow:isActive ?  '0px 20px 10px #00FFD1' :'none',
    })} >Glimpses</NavLink>
            </li>
            <li>
              <NavLink to="/contactus" style={({ isActive }) => ({
    
    textShadow:isActive ?  '0px 20px 10px #00FFD1' :'none',
    })} >Contact</NavLink>
            </li>
          </div>
        </div>
        </>
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
