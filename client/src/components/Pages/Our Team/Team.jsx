import React from 'react'
import "./Team.css"

export const Team = () => {
  return (
    <div className='profile-cards'>
        <div className="profile-card-header">
            <div className="profile-image"></div>

            <div className="profile-info">
                <h3 className="profile-name">Mukta Gupta</h3>
                <p className="profile-desc">Developer / Coder</p>
            </div>
        </div>

        <div className="profile-card-body">
            {/* <div className="status">
            <div className='inside-status'>
 				<span className="status-value">532</span>
 				<span className="status-text">Posts</span>
 			</div>
 			<div className='inside-status'>
 				<span className="status-value">1.5m</span>
 				<span className="status-text">Followers</span>
 			</div>

 			<div className='inside-status'>
 				<span className="status-value">423</span>
 				<span className="status-text">Following</span>
 			</div>
            </div> */}
            <ul class="icons clearfix">
            <li><a href="#"><i class="fa fa-brands fa-facebook-f" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-brands fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-brands fa-linkedin-in"></i></a></li>
          </ul>
            

        </div>
    </div>
  )
}
