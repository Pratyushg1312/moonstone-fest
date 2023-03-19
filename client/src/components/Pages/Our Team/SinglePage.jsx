import React from 'react'
import "./Team.css"

export const Team=(props) => {
  return (
    
    <div className='profile-cards'>
        <div className="profile-card-header" >
            <div className="profile-image" >
              <img src={props.image} alt="developers photo" />
            </div>

            <div className="profile-info">
                <h3 className="profile-name">{props.name}</h3>
                <p className="profile-desc">{props.desc}</p>
            </div>
        </div>

        <div className="profile-card-body">
            
            <ul class="icons clearfix">
            <li><a href="#"><i class="fa fa-brands fa-facebook-f" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-brands fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-brands fa-linkedin-in"></i></a></li>
          </ul>
            

        </div>
    </div>
  )
}
