import React from 'react'
import "./Cultural.css"
import "./Technomanagement.css"
import { TechnoEventParentCategory } from './TechnoEventParentCategory'

export const Technomanagement = () => {
  return (
    // <div className='Cultural-events'>
    //   <h1 className='tech-head'>Technical Events</h1>
    //   <div className="main">
    //     <div className="hero-bodys">
    //       <div className="contents">
    //         <h1 className="titles">
    //           <span className="fades fadeOnes">COMING</span>
    //           <span className="fades fadeTwos">SOON</span>
    //         </h1>
    //         <h2 className="subtitle">
    //           <p id="countdown" className="countdowns fades fadeThrees">
    //             We will update you soon.
    //           </p>
    //         </h2>
    //       </div>
    //     </div>
    //     {/* <p className="content-techno" style={{ color: "red" }}>We will update you soon</p> */}
    //   </div>
    // </div>
    <div className='Cultural-events'>
      <h1>Techno-Management 2k23</h1>
      <div className="event-cluster">
        <TechnoEventParentCategory/>
      </div>
    </div>
  )
}
