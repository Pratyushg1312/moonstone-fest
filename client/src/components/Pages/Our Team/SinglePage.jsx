import React from 'react'
import "./Team.css"

export const Team = (props) => {
  return (
    <div className='profile-cards'>
      <div className="profile-card-header" >
        <div className="profile-image" >
          <img src={props.image} alt="developers photo" />
        </div>

        <div className="profile-info">
          <h3 className="profile-name">{props.name}</h3>
          <p className="profile-desc">{props.desc}</p>
          <p className="profile-desc">{props.desc1}</p>
        </div>
      </div>

      <div className="profile-card-body">
        <ul class="icons clearfix">
          <li><a href={props.link1}><i class={props.icon1} aria-hidden="true"></i></a></li>
          <li><a href={props.link2}><i class={props.icon2}></i></a></li>
          <li><a href={props.link3}><i class={props.icon3}></i></a></li>
        </ul>
      </div>
    </div>
  )
}