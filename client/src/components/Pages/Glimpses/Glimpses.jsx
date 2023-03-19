import React from 'react'
import "./Glimpses.css"

export default function Glimpses() {
  return (
    <div className='G-maincontainer'>
      <div className="g-container">
      <div className="g-heading">
        <h1>Glimpses</h1>
      </div>
      <div className="grid-wrapper">
       
        <div className="wide"><img src="./images/13.webp" alt="" /> </div>
        <div className="big"><img src="./images/11.jpg" alt="" /></div>
        <div className="item"><img src="./images/12.jpg" alt="" /> </div>
        <div className="tall"><img src="./images/1.jpg" alt="" /> </div>
        
        
        <div className="item"><img src="./images/10.jpg" alt="" /></div>
        <div className="tall"><img src="./images/6.jpg" alt="" /></div>
        <div className="big"><img src="./images/4.jpg" alt="" /></div>
        <div className="item"><img src="./images/7.jpg" alt="" /></div>
        <div className="item"><img src="./images/9.jpg" alt="" /></div>
        <div className="wide"><img src="./images/3.jpg" alt="" /></div>
        
        
        {/* <div className="big"><img src="./images/danceEvent.jpeg" alt="" /></div>
        <div className="tall"><img src="./images/bikeEvent.jpg" alt="" /></div>
        <div className="item"><img src="./images/danceEvent.jpeg" alt="" /></div>
        <div className="item"><img src="./images/danceEvent.jpeg" alt="" /></div> */}
      </div>
      </div>
    </div>
  )
}
