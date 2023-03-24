import React from 'react'
import EventCategory from './EventCategory'
import './Events.css'
function Events() {
  return (
    <div className='Major-Events'>
      <div className="major-events-container">
        <EventCategory />
        <EventCategory />
        <EventCategory />
        <EventCategory />
      </div>
    </div>
  )
}

export default Events
