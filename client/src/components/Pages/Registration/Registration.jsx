import React from 'react'
import './registration.css'
export default function Registration() {
  return (
    <div className='registration-form'>
          <h1 style={{fontSize:"50px",textAlign:"center",color:"#999"}}>Registration Form</h1>

          <div class="typewriter">
            <h1>What is Your Name ?</h1>
          </div>
          <input type="text" placeholder="FullName" required/>
          <div className='btn-left'>
          <button className='nxt-btn'> Next <i class="fa-solid fa-arrow-right"></i> </button>
          </div>
          
    </div>        
  )
}
