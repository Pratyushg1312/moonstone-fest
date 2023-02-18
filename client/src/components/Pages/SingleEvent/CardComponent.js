import React from 'react'
import './SingleDay.css'
export default function CardComponent(props) {
  return (
    <>
      <div className='card'>
        <h1 className='text-center'>Event 1</h1>
        <div className='event'>
          <img src={props.image} alt="eventimage" />
          <div className='txt d-flex row justify-content-end '>
            <p> loreum ipsum</p>
            <div>
            <i className="fa fa-map-marker  m-2 "  aria-hidden="true"></i>
            <span > Online </span></div>
            <br/>
            <div>
            <i className="fa fa-calendar m-2 " aria-hidden="true"></i>
            <span>12 January,2023</span></div>
            <div>
              <button className='btn btn-primary btn-md m-2'>Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
