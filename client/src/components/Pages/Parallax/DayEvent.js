import React from 'react'
import SoloEventCard from './SoloEventCard'
import "./Parallax.css"
const DayEvent = () => {
  return (
    <section className="section-background parallax">
      <h2>Day 1<i class="fa-solid fa-sun" style={{ color: "#fab005" }}></i>(Day)</h2>
      <div className="card-bunch">
        <div className="card-bunch-child">
          <SoloEventCard/>
        </div>
      </div>
    </section>
  )
}

export default DayEvent
