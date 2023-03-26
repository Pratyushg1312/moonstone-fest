import React from 'react'
import { NavLink } from 'react-router-dom'
import "./SingleCardEvent.css"
function SingleEventCard(props) {
  return (
    <div className='SingleEventCard-section'>
      <div className="Event-card-upper">
        {/* <div className="event-img"> */}
          {/* <img src="images/12.jpg" alt="" /> */}
        <div className="event-info">
        <div className="event-name">{props.name}</div>
        <div className='event-desc'>{props.desc}</div>
        </div>
      </div>
      <div className="Event-Card-lower">
        <NavLink to="/SingleEvent">
        <button className="card-buttons"><span>View</span></button></NavLink>
        <NavLink to= {props.link}>
        <button className="card-buttons"><span>Register</span></button></NavLink>
      </div>
      </div>
    // </div>
  )
}

export default SingleEventCard
