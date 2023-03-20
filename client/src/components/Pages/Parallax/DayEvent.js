import React from 'react'
import SoloEventCard from './SoloEventCard'
import "./Parallax.css"
const DayEvent = (props) => {
  return (
    <section className="section-background parallax">
      <h2>Day {props.DayNum}<i class="fa-solid fa-sun" style={{ color: "#fab005" }}></i></h2>
      <div className="card-bunch">
        <div className="card-bunch-child">
        {props.DayNum === 1 ? <SoloEventCard imagefront={"/images/4.jpg"} imageBack={"/images/4.jpg"} name={"Begin"}/>
           : (props.DayNum === 2 ? <><SoloEventCard imagefront={"/images/3.jpg"} imageBack={"/images/3.jpg"} name={"NSS"}/>
          </> : <><SoloEventCard imagefront={"/images/3.jpg"} imageBack={"/images/3.jpg"} name={"Sports Event"}/>
          <SoloEventCard imagefront={"/images/10.jpg"} imageBack={"/images/10.jpg"} name={"Sports Event"}/>
          <SoloEventCard imagefront={"/images/9.jpg"} imageBack={"/images/9.jpg"} name={"Sports Event"}/></>)}
        </div>
      </div>
    </section>
  )
}

export default DayEvent
