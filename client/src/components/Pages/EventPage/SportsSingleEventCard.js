import React from 'react'
import { NavLink } from 'react-router-dom'
import "./SingleCardEvent.css"
function SportsSingleEventCard(props) {
  return (
    <div className='SingleEventCard-section'>
      <div className="Event-card-upper">
        
        <div className="event-info">
        <div className="event-name">{props.name}</div>
        <div className='event-desc'><i class="fa fa-indian-rupee-sign"></i> {props.desc}</div>
        
        
        </div>
      </div>
      <div className="Event-Card-lower">
        
        <NavLink to= {props.link}>
        <button className="card-buttons"><span>Register</span></button></NavLink>
      </div>
      </div>
    
  )
}

export default SportsSingleEventCard
