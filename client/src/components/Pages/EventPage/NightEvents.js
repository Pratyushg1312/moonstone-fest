import React from 'react'
import "./Cultural.css"
import "./Technomanagement.css"
import NightEventParentCategory from './NightEventParentCategory'

export const NightEvents = () => {
  return (
    <div className='Cultural-events'>
      <h1>Night Events</h1>
      <div className="event-cluster">
        <NightEventParentCategory/>
      </div>
    </div>
  )
}
