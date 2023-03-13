import e from "cors";
import React, { useState ,useRef,useEffect} from "react";
import { createHashRouter, NavLink } from "react-router-dom";
import "./header.css";
export default function Header() {
  const [appstate, chngeState] = useState("./images/logomono.png");
  const chkbox= useRef();
  const [checked, setChecked] = useState();
  
  return (
    <>
    <input ref={chkbox} type="checkbox" checked={checked} id="nav-tog" style={{display:"none"}}/>
            <label for="nav-tog" class="nav-tog-lab" onClick={
              (e)=>{
                setChecked(!checked)
              }
            }>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </label>
    <div className="nav-header" style={{ backgroundColor: "#061F25" }}>
      {/* {display ? (
        <> */}
           
          <div className="header-bar">
            <div className="header-container">
              <li onClick={(e)=>{
                setChecked(!checked)
              }}>
                <NavLink to="/aboutus" style={({ isActive }) => ({

                  textShadow: isActive ? '0px 0px 20px #00FFD1' : 'none',
                })}>About Us</NavLink>
              </li>
              <li onClick={(e)=>{
                setChecked(!checked)
              }}>
                <NavLink to="/events" style={({ isActive }) => ({

                  textShadow: isActive ? '0px 0px 20px #00FFD1' : 'none',
                })} >Events</NavLink>
              </li>
              <li onClick={(e)=>{
                setChecked(!checked)
                
              }}>
                <NavLink to="/" className={({ isActive }) => {
                  chngeState(isActive ? "./images/logomono.png" : "./images/loogodim.png")
                }} >
                  <img
                    className="logo-img"
                    src={appstate}
                    alt=""
                    width={"100px"}
                  />
                </NavLink>
              </li>
              <li onClick={(e)=>{
                setChecked(!checked)
              }}>
                <NavLink to="/glimpses" style={({ isActive }) => ({

                  textShadow: isActive ? '0px 0px 20px #00FFD1' : 'none',
                })} >Glimpses</NavLink>
              </li>
              <li onClick={(e)=>{
                setChecked(!checked)
              }}>
                <NavLink to="/contactus" style={({ isActive }) => ({

                  textShadow: isActive ? '0px 0px 20px #00FFD1' : 'none',
                })} >Contact</NavLink>
              </li>
            </div>
          </div>
        {/* </>
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
            {view ? (<p className="cross" onClick={() => setView(!view)}> X </p>) :
              (<div className="burger" onClick={() => setView(!view)}>
                <div className="line"></div>
                <div className="line"></div>
              </div>)}
          </div>
          {view ? (<div className="R-header-container">
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
          </div>) : (<></>)}
        </div>
      )} */}
    </div>
    </>
  );
}
