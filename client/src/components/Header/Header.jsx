import e from "cors";
import React, { useState, useRef, useEffect } from "react";
import { createHashRouter, NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import "./header.css";
export default function Header() {
  const [appstate, chngeState] = useState("./images/logomono.png");
  const chkbox = useRef();
  const [checked, setChecked] = useState();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const [arrow1, setArrow1] = useState(false);
  const [arrow2, setArrow2] = useState(false);
  const [arrow3, setArrow3] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <input
        ref={chkbox}
        type="checkbox"
        checked={checked}
        id="nav-tog"
        style={{ display: "none" }}
      />
      <label
        for="nav-tog"
        class="nav-tog-lab"
        onClick={(e) => {
          setChecked(!checked);
        }}
      >
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </label>
      {/* <div className="mobview">
        <div className="llogo">
          <img src="./images/logomono.png" alt="" />
        </div>
      </div> */}
      <div className="nav-header" style={{ backgroundColor: "#061F25" }}>
        <div className="header-bar">
          <div className="header-container">
            <li
              onClick={(e) => {
                setChecked(!checked);
              }}
            >
              <NavLink
                to="/Auction"
                style={({ isActive }) => ({
                  textShadow: isActive ? "0px 0px 20px #00FFD1" : "none",
                })}
              >
                Auction 2.0
              </NavLink>
            </li>
            <li
              onClick={(e) => {
                setChecked(!checked);
              }}
              className="drop-down-parent"
              onMouseEnter={() => setArrow1(true)}
              onMouseLeave={() => setArrow1(false)}
            >
              <NavLink
                to="/aboutus"
                style={({ isActive }) => ({
                  textShadow: isActive ? "0px 0px 20px #00FFD1" : "none",
                })}
              >
                About Us
                {arrow1 ? (
                  <i className="fa-solid fa-chevron-up atr arrows"></i>
                ) : (
                  <i class="fa-sharp fa-solid fa-chevron-down atr arrows"></i>
                )}
                <ul className="drop-down">
                  <Link to="aboutus/#about-moonstone">
                    <li>About MoonStone</li>
                  </Link>
                  <Link to="aboutus/#committee">
                    <li className="drop-down-nested-parent">
                      Committee 2k23
                      <ul className="drop-down-nested">
                        <Link to="aboutus/#21"><li>Cultural Commitee</li></Link>
                        <Link to="aboutus/#22"><li>Sports Commitee</li></Link>
                        <Link to="aboutus/#23"><li>Techno Management Commitee</li></Link>
                      </ul>
                    </li>
                  </Link>
                </ul>
              </NavLink>
            </li>
            <li
              onClick={(e) => {
                setChecked(!checked);
              }}
              className="drop-down-parent"
              onMouseEnter={() => setArrow2(!arrow2)}
              onMouseLeave={() => setArrow2(!arrow2)}
            >
              <NavLink
                to="/events"
                style={({ isActive }) => ({
                  textShadow: isActive ? "0px 0px 20px #00FFD1" : "none",
                })}
              >
                Events{" "}
                {arrow2 ? (
                  <i className="fa-solid fa-chevron-up atr"></i>
                ) : (
                  <i class="fa-sharp fa-solid fa-chevron-down atr"></i>
                )}
              </NavLink>
              <ul className="drop-down">
                <NavLink to="/Cultural">
                  <li>Cultural</li>
                </NavLink>
                <NavLink to="/Sports">
                  <li>Sports</li>
                </NavLink>
                <NavLink to="/Techno-Management">
                  <li>Techno Management</li>
                </NavLink>
                <NavLink to="/Night-Events">
                  <li>Night Events</li>
                </NavLink>
              </ul>
            </li>
            <li
              onClick={(e) => {
                setChecked(!checked);
              }}
            >
              <NavLink
                to="/"
                className={({ isActive }) => {
                  chngeState(
                    isActive ? "./images/logomono.png" : "./images/loogodim.png"
                    );
                  }}
              >
              <img
              className="logo-img"
                  src={appstate}
                  alt=""
                  width={"100px"}
                  />
              </NavLink>
            </li>
            <li
              onClick={(e) => {
                setChecked(!checked);
              }}
            >
            <NavLink
            to="/glimpses"
            style={({ isActive }) => ({
                  textShadow: isActive ? "0px 0px 20px #00FFD1" : "none",
                })}
                >
                Glimpses
                </NavLink>
            </li>
            <li
            onClick={(e) => {
                setChecked(!checked);
              }}
            >
              <NavLink
                to="/contactus"
                style={({ isActive }) => ({
                  textShadow: isActive ? "0px 0px 20px #00FFD1" : "none",
                })}
              >
              Contact
              </NavLink>
            </li>
            <li
              onClick={(e) => {
                setChecked(!checked);
              }}
              className="drop-down-parent"
              onMouseEnter={() => setArrow3(!arrow3)}
              onMouseLeave={() => setArrow3(!arrow3)}
            >
              <NavLink
                to="/Sponsors"
                style={({ isActive }) => ({
                  textShadow: isActive ? "0px 0px 20px #00FFD1" : "none",
                })}
              >
                Sponsors{" "}
                {arrow3 ? (
                  <i class="fa-solid fa-chevron-up atr"></i>
                ) : (
                  <i class="fa-sharp fa-solid fa-chevron-down atr"></i>
                )}
              </NavLink>
              <ul className="drop-down sponsor">
                <Link to="Sponsors/#Sponsorship"><li>Sponsorship</li></Link>
                <Link to="Sponsors/#Sponsorship-Opportunities"><li>Sponsorship Opportunities</li></Link>
              </ul>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}
