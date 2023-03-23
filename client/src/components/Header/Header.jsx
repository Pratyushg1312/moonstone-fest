import e from "cors";
import React, { useState, useRef, useEffect } from "react";
import { createHashRouter, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./header.css";
export default function Header() {
  const [appstate, chngeState] = useState("./images/logomono.png");
  const chkbox = useRef();
  const [checked, setChecked] = useState();
  const [arrow1, setArrow1] = useState(false)
  const [arrow2, setArrow2] = useState(false)
  const [arrow3, setArrow3] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [pathname])

  useEffect(() => {
    scrollToTop();
  }, [])

  return (
    <>
      <input ref={chkbox} type="checkbox" checked={checked} id="nav-tog" style={{ display: "none" }} />
      <label for="nav-tog" class="nav-tog-lab" onClick={
        (e) => {
          setChecked(!checked)
        }
      }>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </label>
      <div className="nav-header" style={{ backgroundColor: "#061F25" }}>
        <div className="header-bar">
          <div className="header-container">
            <li onClick={(e) => {
              setChecked(!checked)
            }}>
              <NavLink to="/Auction" style={({ isActive }) => ({

                textShadow: isActive ? '0px 0px 20px #00FFD1' : 'none',
              })} >Auction 2.0</NavLink></li>
            <li onClick={(e) => { setChecked(!checked) }} className="drop-down-parent" onMouseEnter={() => setArrow1(!arrow1)} onMouseLeave={() => setArrow1(!arrow1)}>
              <NavLink to="/aboutus" style={({ isActive }) => ({ textShadow: isActive ? '0px 0px 20px #00FFD1' : 'none', })}>
                About Us {arrow1 ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-sharp fa-solid fa-chevron-down"></i>}
                <ul className="drop-down">
                  <li>About MoonStone</li>
                  <li className="drop-down-nested-parent">Commitee 2k23
                    <ul className="drop-down-nested">
                      <li>Sports Commitee</li>
                      <li>Cultural Commitee</li>
                      <li>Techno Management Commitee</li>
                    </ul>
                  </li>
                </ul>
              </NavLink>
            </li>
            <li onClick={(e) => { setChecked(!checked) }} className="drop-down-parent" onMouseEnter={() => setArrow2(!arrow2)} onMouseLeave={() => setArrow2(!arrow2)}>
              <NavLink to="/events" style={({ isActive }) => ({ textShadow: isActive ? '0px 0px 20px #00FFD1' : 'none' })}>
                Events {arrow2 ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-sharp fa-solid fa-chevron-down"></i>}
              </NavLink>
              <ul className="drop-down">
                <li>Cultural</li>
                <li>Sports</li>
                <li>Techno Management</li>
                <li>Night Events</li>
              </ul>
            </li>
            <li onClick={(e) => { setChecked(!checked) }}>
              <NavLink to="/" className={({ isActive }) => { chngeState(isActive ? "./images/logomono.png" : "./images/loogodim.png") }} >
                <img className="logo-img" src={appstate} alt="" width={"100px"} />
              </NavLink>
            </li>
            <li onClick={(e) => {
              setChecked(!checked)
            }}>
              <NavLink to="/glimpses" style={({ isActive }) => ({
                textShadow: isActive ? '0px 0px 20px #00FFD1' : 'none',
              })} >Glimpses</NavLink>
            </li>
            <li onClick={(e) => {
              setChecked(!checked)
            }}>
              <NavLink to="/contactus" style={({ isActive }) => ({

                textShadow: isActive ? '0px 0px 20px #00FFD1' : 'none',
              })} >Contact</NavLink>
            </li>
            <li onClick={(e) => { setChecked(!checked) }} className="drop-down-parent" onMouseEnter={() => setArrow3(!arrow3)} onMouseLeave={() => setArrow3(!arrow3)}>
              <NavLink to="/Sponsors" style={({ isActive }) => ({ textShadow: isActive ? '0px 0px 20px #00FFD1' : 'none', })} >
                Sponsors {arrow3 ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-sharp fa-solid fa-chevron-down"></i>}
              </NavLink>
              <ul className="drop-down sponsor">
                <li>Sponsorship</li>
                <li>Sponsorship Opportunities</li>
              </ul>
            </li>

          </div>
        </div>
      </div>
    </>
  );
}
