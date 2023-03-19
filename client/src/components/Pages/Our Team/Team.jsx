import React from 'react'
import { Team } from '../Our Team/SinglePage'
import "./Team.css"

export const Teams = () => {
  return (
    <>
    <div className='team-container'>
        <div className="team-body">
          <Team image={"./images/dishi.jpg"} name={"Dishika Jain"}/>
          <Team image={"./images/vishal.jpg"} name={"Vishal Sharma"}/>
          <Team image={"./images/1.png"} name={"Kalash Jain"}/>
          <Team image={"./images/1.png"} name={"Pratyush Gupta"}/>
          <Team image={"./images/mukta.jpg"} name={"Mukta Gupta"}/>
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
