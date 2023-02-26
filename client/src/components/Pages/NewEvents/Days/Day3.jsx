import React from 'react'
import { useNavigate } from 'react-router-dom'
import SingleEventBox from '../SingleEventBox'

export default function Day3() {
  const navigate=useNavigate();
  return (
    <div className='eventpage single-component'>
        <h1>#Day 3 (<i class="fa-solid fa-sun" style={{color:"#fab005"}}></i> Day Events)</h1>
      <div className='single-event-box'>
      <SingleEventBox/>
      <SingleEventBox/>
      <SingleEventBox/>
      <SingleEventBox/>
      <SingleEventBox/>
       </div>
       <div onClick={()=>{navigate("/events/night-3")}} class="arrow-container">
       <div class="arrow-down my-2"></div>
       <div  class="arrow-down my-2"></div>
        </div>
    </div>
  )
}
