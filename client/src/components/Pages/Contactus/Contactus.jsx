import React from 'react'
import './contactus.css'
import TechnicalTeam from './TechnicalTeam'

export default function Contactus() {
  return (
    <div className='contactus-page '>
      <h1 className='contactus-heading'>Contact Us</h1>
      <div className="contactus-form">
        <h1 className='contactus-heading'>Feedback / Message</h1>
      <input className='contactus-input' type="text" name="Name" placeholder="Name"/>
      <input className='contactus-input' type="text" name="Subject" placeholder="Subject"/>
      <input className='contactus-input' type="text" name="Phoneno" placeholder="Phone Number"/>
      <textarea id="message" name="message" placeholder="Enter your message here..."></textarea>
      <button className='btn btn-primary'>Submit</button>
      </div>
    </div>
  )
}

