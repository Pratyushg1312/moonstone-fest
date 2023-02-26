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
       
        <div className="item"><img src="./images/danceEvent.jpeg" alt="" /> </div>
        <div className="item"><img src="./images/eventimage.jpeg" alt="" /> </div>
        <div className="tall"><img src="./images/danceEvent.jpeg" alt="" /> </div>
        <div className="wide"><img src="./images/bandEvent.jpg" alt="" /></div>
        
        <div className="item"><img src="./images/bikeEvent.jpg" alt="" /></div>
        <div className="tall"><img src="./images/danceEvent.jpeg" alt="" /></div>
        <div className="big"><img src="./images/eventimage.jpeg" alt="" /></div>
        <div className="item"><img src="./images/danceEvent.jpeg" alt="" /></div>
        <div className="item"><img src="./images/danceEvent.jpeg" alt="" /></div>
        <div className="wide"><img src="./images/bikeEvent.jpg" alt="" /></div>
        
        
        <div className="big"><img src="./images/danceEvent.jpeg" alt="" /></div>
        <div className="tall"><img src="./images/bikeEvent.jpg" alt="" /></div>
        <div className="item"><img src="./images/danceEvent.jpeg" alt="" /></div>
        <div className="item"><img src="./images/danceEvent.jpeg" alt="" /></div>
      </div>
      </div>
    </div>
  )
}
