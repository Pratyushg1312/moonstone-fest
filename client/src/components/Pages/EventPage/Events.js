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
      <div className='timetable'>
          <h1>TimeLines</h1>
        <div className='placelist'>

          <h3>Place 1</h3>
          <h3>Place 1</h3>
          <h3>Place 1</h3>
          <h3>Place 1</h3>
        </div>
      </div>

    </div>
  )
}

export default Events
