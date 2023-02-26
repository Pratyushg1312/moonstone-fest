import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SingleEventBox() {
  const navigate = useNavigate();
  return (
    <div className='single-event'>
        <h3>Event name</h3>  
        <div className='single-event-button'>
            <button>View Details</button>
            <button onClick={()=>{navigate("/registration")}}>Register</button>
          </div>
    </div>
  )
}
