import React from 'react'
import Hello from './Hello'
import './registration.css'
export default function Registration() {
  return (
    <div>
    <div className='registration-form'>
          <div >
            <div className="styled-input1">
              <input type="text" required />
              <label>Name</label>
            </div>
          </div>  
          <Hello/>
          </div>        
     </div>
  )
}
