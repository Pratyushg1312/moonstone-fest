import React from 'react'
import './contactus.css'
import TechnicalTeam from './TechnicalTeam'
export default function Contactus() {
  return (
    <div className='contactus-page '>
      <div  id="stars"></div>
    	<div id="moon" className='bg-img'>
		<div class="crater crater1"></div>
		<div class="crater crater2"></div>
		<div class="crater crater3"></div>
		<div class="crater crater4"></div>
		<div class="crater crater5"></div>
		<div class="crater crater6"></div>
	</div>
      {/* <img className='bg-img' src='https://cdn-icons-png.flaticon.com/512/2024/2024058.png' alt=''/> */}
        
        <div className="contactus-form">
        <div className="container ">
        <div className="row">
          <h1 style={{textAlign:"center",fontSize:"350%" }}>Contact us</h1>
        </div>
        <div className="row">
          <h4 style={{textAlign: 'center'}}>We'd love to hear from you!</h4>
        </div>
        <TechnicalTeam/>
        <div className="row contactus-form-box input-container">
           <h3 className='heading-text'>Message / Suggestions / Feedback</h3>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <input type="text" required />
              <label>Name</label> 
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input type="text" required />
              <label>Email</label> 
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{float: 'right'}}>
              <input type="text" required />
              <label>Phone Number</label> 
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <textarea required defaultValue={""} />
              <label>Message</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="btn-lrg submit-btn">Send Message</div>
          </div>
        </div>
      </div>
        </div>

    </div>
  )
}
