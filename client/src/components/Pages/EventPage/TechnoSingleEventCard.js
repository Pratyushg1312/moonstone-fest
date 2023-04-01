import React from 'react'
import { NavLink } from 'react-router-dom'
import "./SingleCardEvent.css"
import "./TechnoSingleEventCard.css"
function TechnoSingleEventCard(props) {
  return (
    <div className='SingleEventCard-section'>
      <div className="Event-card-upper">
        
        <div className="event-inf">
            <div className="event-n-d">
        <div className="event-name">{props.name}</div>
        <div className='event-desc'><i class="fa-sharp fa-solid fa-location-dot"></i> {props.desc}</div>
        </div>
        <div className="event-price" style={{color:"#00FFD1"}}><i class="fa fa-indian-rupee-sign"></i> <span>{props.price}</span> </div> 
        
        
        </div>
      </div>
      <div className="Event-Card-lower">
        <NavLink to="">
        <button className="card-buttons"><span>View</span></button></NavLink>
        <NavLink to="/registration">
        <button className="card-buttons"><span>Register</span></button></NavLink>
      </div>
      </div>
    
  )
}

export default TechnoSingleEventCard
