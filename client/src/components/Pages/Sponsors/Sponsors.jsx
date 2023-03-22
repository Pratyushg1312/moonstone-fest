import React from 'react'
import Sponsorsicon from './Sponsorsicon'
import './Sponsors.css'
export default function Sponsors() {
  return (
    <div style={{ color: "white" }}>
      <div className='first'>
        <h1 className='text-center m-4' style={{ color: "#00FFD1" }}>Our Sponsors</h1>
        <div className='d-flex row justify-content-evenly container-fluid' id="1">
          <Sponsorsicon />
          <Sponsorsicon />
          <Sponsorsicon />
          <Sponsorsicon />
          <Sponsorsicon />
          <Sponsorsicon />
        </div>
      </div>
      <div className='container' id="2">
        <h1 className='text-center' style={{ color: "#00FFD1" }}>Sponsorship Opportunities</h1>
        <p>Sponsorship opportunities allow you to increase your brand awareness, attract new clients and enhance your business relationships with current customers. As an IEDC sponsor, you will earn the recognition of your peers for your commitment to and leadership in the economic development community. Whether you are looking to market your services as an exhibitor or gain unparalleled exposure as an event sponsor, IEDC has the perfect opportunity for you. IEDC offers a range of sponsorship packages and exhibit opportunities to fit any budget. Your sponsorship allows us to provide world-class speakers, a dynamic conference program, and a valuable networking forum for economic development professionals. Exhibitors have direct access to the leading public and private sector decision makers, and local, state and federal government officials.</p>
        <h2 style={{color:"#00FFD1"}}>Brand Benefits</h2>
        <ul>
          <li>It will enhance the reputation and image of the company through association.</li>
          <li>It will increase the product visibility drastically among key audiences.</li>
          <li>Focal point for marketing efforts and sales campaigns.</li>
          <li>Generates publicity and media coverage.</li>
          <li>Increase your brand presence in youth.</li>
          <li>Interaction with the workforce of students.</li>
        </ul>
        
        <h2 className='text-center' style={{color:"#00FFD1"}}>Sponsorship Categories</h2>
        <div className='d-flex row justify-content-evenly container-fluid' style={{fontWeight:"bolder",fontFamily:"monospace"}}>
        <div className=' col-md-4 col-8 p-5 m-2 text-center' style={{color:"black",backgroundColor:"pink"}}><p>TITLE Sponsor</p></div>
        <div className=' col-md-4 col-8 p-5 m-2 text-center' style={{color:"black",backgroundColor:"#5aaf88"}}><p>Co Sponsor</p></div>
        <div className=' col-md-4 col-8 p-5 m-2 text-center' style={{color:"black",backgroundColor:"#FFD700"}}><p>GOLD Sponsor</p></div>
        <div className=' col-md-4 col-8 p-5 m-2 text-center' style={{color:"black",backgroundColor:"silver"}}><p>Silver Sponsor</p></div>
        <div className=' col-md-4 col-8 p-5 m-2 text-center' style={{color:"black",backgroundColor:"Brown"}}><p>Bronze Sponsor</p></div>
        <div className=' col-md-4 col-8 p-5 m-2 text-center' style={{color:"black",backgroundColor:"green"}}><p>Event Sponsor</p></div>
        <div className=' col-md-4 col-8 p-5 m-2 text-center' style={{color:"black",backgroundColor:"white"}}><p>Event Co Sponsor</p></div>
        
        </div>
      </div>
    </div>
  )
}
