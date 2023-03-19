import React from 'react'
import { Team } from '../Our Team/SinglePage'
import "./Team.css"

export const Teams = () => {
  return (
    <>
    <div className='team-container'>
        <div className="team-body">
          <Team image={"./images/dishi.jpg"} name={"Dishika Jain"} icon1={"fa-brands fa-linkedin fa-2x"} icon2={"fa-brands fa-github fa-2x"} icon3={"fa-brands fa-instagram fa-2x"} link1={""} link2={""} link3={""} desc={"Frontend Developer"}/>
          <Team image={"./images/vishal.jpg"} name={"Vishal Sharma"} icon1={"fa-brands fa-linkedin fa-2x"} icon2={"fa-brands fa-github fa-2x"} icon3={"fa-solid fa-envelope fa-2x"} link1={"https://www.linkedin.com/in/sharma39vishal/"} link2={"https://github.com/sharma39vishal"} link3={"mailto:sharma39vishal@gmail.com"} desc={"Full Stack"}/>
          <Team image={"./images/kalash.jpeg"} name={"Kalash Jain"} icon1={"fa-brands fa-linkedin fa-2x"} icon2={"fa-brands fa-github fa-2x"} icon3={"fa-solid fa-envelope fa-2x"} link1={"https://www.linkedin.com/in/kalash-jain-b50027203/"} link2={"https://github.com/KalashJain591"} link3={"mailto:kalashjain446@gmail.com"} desc={"Frontend Developer"}/>
          <Team image={"./images/pratyush.jpeg"} name={"Pratyush Gupta"} icon1={"fa-brands fa-linkedin fa-2x"} icon2={"fa-brands fa-github fa-2x"} icon3={"fa-brands fa-instagram fa-2x"} link1={""} link2={""} link3={""} desc={"Frontend Developer"}/>
          <Team image={"./images/mukta.jpg"} name={"Mukta Gupta"} icon1={"fa-brands fa-linkedin fa-2x"} icon2={"fa-brands fa-github fa-2x"} icon3={"fa-brands fa-instagram fa-2x"} link1={""} link2={""} link3={""} desc={"Frontend Developer"}/>
        </div>
      </div>
      {/* <div className="profile-card-body">
        <ul class="icons clearfix">
          <li>
            <a href="#">
              <i class="fa fa-brands fa-facebook-f" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-brands fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div> */}
    </>
  );
};
