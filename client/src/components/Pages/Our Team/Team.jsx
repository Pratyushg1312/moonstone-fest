import React from 'react'
import { Team } from '../Our Team/SinglePage'
import "./Team.css"

export const Teams = () => {
  return (
    <div className='team-container'>
        <div className="team-body">
        <Team image={"./images/dishi.jpg"} name={"Dishika Jain"}/>
        <Team image={"./images/vishal.jpg"} name={"Vishal Sharma"}/>
        <Team image={"./images/kalash.jpeg"} name={"Kalash Jain"}/>
        <Team image={"./images/1.png"} name={"Pratyush Gupta"}/>
        <Team image={"./images/mukta.jpg"} name={"Mukta Gupta"}/>
        
        </div>
    </div>
  )
}
