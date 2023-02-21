import React from 'react'
import './TeamPage.css'

export default function PersonDetail() {
  return (
    <div className="maincontainer">
          <div className="main-card">
            <div className="front">
              <img className='team-card-img-top' src="./images/image1.jpeg" alt="" />
              <div className="main-card-body">
                <h2 className='card-text'> Mukta Gupta</h2>
                <p className='post'> CSBS - 3Year Student</p>

              </div>
            </div>
            <div className="back">
              <p className="achievements">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Veritatis, tempora. Eveniet, fugiat. Odio, incidunt possimus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                consequuntur? Lorem ipsum dolor sit amet, consectetur adipisicing
                 elit. Soluta, laboriosam.
                {/* <ul>
                  <li>Frontent developer</li>
                  <li>3Star at codechef</li>
                  <li>working on live projects</li>
                </ul> */}
              </p>
              <ul class="follow-us clearfix">
                <li><a href="#"><i class="fa fa-brands fa-facebook-f" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
  )
}
