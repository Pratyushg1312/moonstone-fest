import React from 'react'
import EventCategory from './EventCategory'
import './Events.css'
function Events() {
  return (
    <div className='Major-Events'>
      <div className="major-events-container">
        <EventCategory event_name = {"Cultural"} />
        <EventCategory event_name = {"Sports"} />
        <EventCategory event_name = {"Techno Management"} />
        <EventCategory event_name = {"Night Events"} />
      </div>
    </div>
  )
}

export default Events
