import React from 'react'
import SingleEventCard from './SingleEventCard'
import { NavLink } from 'react-router-dom'
import "./EventParentCategory.css"
var arr1 = [
  {
    day1: [
      {
        event_name: "SYMPHONY",
        event_desc: "Music Competition",
        
      },
      {
        event_name: "ACCORD",
        event_desc: "The Band Showdown",

      }

    ]
  },

  {
    day2: [
      {
        event_name: "THE GROOVE",
        event_desc: "Dance Competition",
        event_price: "",
      },
      {
        event_name: "MELANGE",
        event_desc: "Fashion Show",
        event_price: "",
      },

    ]
  },
  {
    day3: [
      {
        event_name: "MEDICAPS GOT TALENT",
        event_desc: "Talent Show",
        event_price: "",
      },

    ]
  }
]

function EventParentCategory() {
  return (
    <div className='parent-Event' >
      <div className="cutural-container">
        <div className="head-desc" id = "day-1">
          {/* <div className='d-flex justify-content-end me-2' style={{ position: "absolute", bottom: "168px", right: "5px" }}>
            <button className="floatingButton">
              <p style={{ borderRadius: "50%", fontSize: "25px" }}> 
                <a href="#day-2">
                  <i class="fa-solid fa-arrow-down"></i>
                </a>
              </p>
            </button>
          </div> */}
          <h1 className='D-heading'>Day 1</h1>
          <div className="day1">
            {
              arr1[0].day1.map(e => (
                <SingleEventCard name={e.event_name}
                  desc={e.event_desc} 
                />
              ))
            }
          </div>
        </div>
        <div className="head-desc" id="day-2">
          {/* <div className='d-flex justify-content-end me-2' style={{ position: "absolute", bottom: "200px", right: "5px" }}>
            <button className="floatingButton">
              <p style={{ borderRadius: "50%", fontSize: "25px" }}>
                <a href="#day-3">
                  <i class="fa-solid fa-arrow-down"></i></a>
              </p>
            </button>
          </div> */}
          <h1 className='D-heading'>Day 2</h1>
          <div className="day2" >
            {
              arr1[1].day2.map(e => (
                <SingleEventCard name={e.event_name}
                  desc={e.event_desc} 
                />
              ))
            }
          </div>
        </div>
        <div className="head-desc" id="day-3">
          <h1 className='D-heading'>Day 3</h1>
          <div className="day3">
            {
              arr1[2].day3.map(e => (
                <SingleEventCard name={e.event_name}
                  desc={e.event_desc} 
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventParentCategory
