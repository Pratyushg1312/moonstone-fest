import React from 'react'
import PersonDetail from './PersonDetail'
import './TeamPage.css'

export default function TeamPage() {
  return (
    <div className='team-container'>
      <div className="card-center">
        {/* <div className="maincontainer">
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
                <ul>
                  <li>Frontent developer</li>
                  <li>3Star at codechef</li>
                  <li>working on live projects</li>
                </ul>
              </p>
              <ul class="follow-us clearfix">
                <li><a href="#"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="d-flex col flex-wrap justify-content-evenly">
          <div ><PersonDetail /></div>
          <div ><PersonDetail /></div>
          <div ><PersonDetail /></div>



          {/* <div className="col"><PersonDetail/></div> */}
          <div ><PersonDetail /></div>
          <div ><PersonDetail /></div>
        </div>


      </div>
    </div>
  )
}
