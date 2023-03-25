import React from 'react'
import { NavLink } from 'react-router-dom'
import "./EventCategory.css"
function EventCategory(props) {
  return (
    <div className='Event-Page'>
      <div className="majorEventImg">
        <img src="images/1.jpg" alt="" />
        <div className="content-event">
          <h2>{props.event_name}</h2>
          <p>{props.event_desc}</p>
          <NavLink to ={props.event_link}><button className='view-event-button'>View</button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default EventCategory
