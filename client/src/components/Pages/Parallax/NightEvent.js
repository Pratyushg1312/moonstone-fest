import React from 'react'
import "./Parallax.css"
import SoloEventCard from './SoloEventCard'
const NightEvent = (props) => {
  return (
    <section className="section-background parallax3">
      <h2>Day {props.DayNum}<i class="fa-solid fa-moon" style={{ color: "#fab005" }}></i></h2>
      <div className="card-bunch">
        <div className="card-bunch-child">
          {props.DayNum === 1 ? <><SoloEventCard imagefront={"/images/bandupper.jpg"} imageBack={"/images/bandupper.jpg"} name={"Band Competiton"}/>
          </> : (props.DayNum === 2 ? <><SoloEventCard imagefront={"/images/fashion2.jpg"} imageBack={"/images/fashion2.jpg"} name={"Fashion Show"}/>
          <SoloEventCard imagefront={"/images/2.jpg"} imageBack={"/images/2.jpg"} name={"Cultural Competiton"}/></> : <><SoloEventCard imagefront={"https://im.whatshot.in/img/2018/Oct/shutterstock-1009040557-1539776465.jpg"} imageBack={"https://im.whatshot.in/img/2018/Oct/shutterstock-1009040557-1539776465.jpg"} name={"DJ Night"}/>
          <SoloEventCard imagefront={"/images/bandEvent.jpg"} imageBack={"/images/bandEvent.jpg"} name={"Star Night"}/></>)}
        </div>
      </div>
    </section>
  )
}

export default NightEvent
