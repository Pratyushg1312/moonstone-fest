import React from 'react'
import SingleEventCard from './SingleEventCard'
import "./Cultural.css"
import EventParentCategory from './EventParentCategory'
function Cultural() {
  return (
    <div className='Cultural-events'>
      <h1>Cutural Events</h1>
      <div className="event-cluster">
        <EventParentCategory/>
      </div>
    </div>
  )
}

export default Cultural
