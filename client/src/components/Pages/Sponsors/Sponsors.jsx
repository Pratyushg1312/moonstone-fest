import React from 'react'
import Sponsorsicon from './Sponsorsicon'
import './Sponsors.css'
import EventSchedule from '../Locationinfo/EventSchedule'
import Modal from './Modal'
export default function Sponsors() {
  return (
    <div style={{ color: "white" }}>
      <div className='first'>
        <h1 className='text-center m-4' id="Sponsorship" style={{ color: "#07D685" }}>Our Sponsors</h1>
        <div className='d-flex row justify-content-evenly container-fluid' id="">
          <h3 style={{
            color: "#07D685",
            margin: "auto auto",
            textAlign: "center",
            alignItems:"center"
          }}> Comming Soon</h3>
          {/* <Sponsorsicon />
          <Sponsorsicon />
          <Sponsorsicon />
          <Sponsorsicon />
          <Sponsorsicon />
          <Sponsorsicon /> */}
        </div>
      </div>
      <div className='container' id="Sponsorship-Opportunities">
        <h1 className='text-center' style={{ color: "#07D685" }}>Sponsorship Opportunities 2K23</h1>
        <p style={{
          color: "#56FFC7",margin:"40px"
        }} >Sponsorship opportunities allow you to increase your brand awareness, attract new clients and enhance your business relationships with current customers. As an IEDC sponsor, you will earn the recognition of your peers for your commitment to and leadership in the economic development community. Whether you are looking to market your services as an exhibitor or gain unparalleled exposure as an event sponsor, IEDC has the perfect opportunity for you. IEDC offers a range of sponsorship packages and exhibit opportunities to fit any budget. Your sponsorship allows us to provide world-class speakers, a dynamic conference program, and a valuable networking forum for economic development professionals. Exhibitors have direct access to the leading public and private sector decision makers, and local, state and federal government officials.</p>
        <h2 style={{ color: "#07D685" }}>Brand Benefits</h2>
        <ul style={{
          color: "#56FFC7",margin:"30px"
        }}>
          <li>It will enhance the reputation and image of the company through association.</li>
          <li>It will increase the product visibility drastically among key audiences.</li>
          <li>Focal point for marketing efforts and sales campaigns.</li>
          <li>Generates publicity and media coverage.</li>
          <li>Increase your brand presence in youth.</li>
          <li>Interaction with the workforce of students.</li>
        </ul>

        <h2 className='text-center' style={{ color: "#07D685" }}>Sponsorship Categories</h2>
        <div className='d-flex row justify-content-evenly container-fluid' style={{ fontWeight: "bolder", fontFamily: "monospace" ,color:"black"}}>
          <Modal sponsor="Title" />
          <Modal sponsor="Co" />
          <Modal sponsor="Gold" />
          <Modal sponsor="Silver" />
          <Modal sponsor="Bronze" />
          <Modal sponsor="Event" />
          <Modal sponsor="Event_Co" />

        </div>
        {/* <Modal/> */}
      </div>
      {/* <EventSchedule/> */}
    </div>
  )
}
