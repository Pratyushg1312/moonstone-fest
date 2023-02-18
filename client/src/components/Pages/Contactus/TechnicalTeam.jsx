import React from 'react'
import './contactus.css'
export default function TechnicalTeam() {
  return (
    <div style={{color:"#999"}}>
    <div className='contactus-form-box input-container'>
        <h2 className='heading-text'>Moonstone Organizers</h2>
        <div style={{display:"flex",justifyContent:"center"}}>
        <i class="fas fa-phone fa-2x mx-2 my-2"></i>
         <h3 className='my-1 mx-2'>+91 9876543211</h3>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <i class="fa fa-envelope fa-2x mx-2 my-2"></i>
         <h3 className='my-1 mx-2'>abc@medicaps.ac.in</h3>
        </div>
    </div>
    <div className='contactus-form-box input-container'>
        <h2 className='heading-text '>Technical Team</h2>
        <div style={{display:"flex",justifyContent:"center"}}>
        <i class="fas fa-phone fa-2x mx-2 my-2"></i>
         <h3 className='my-1 mx-2'>+91 98765432XX</h3>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <i class="fa fa-envelope fa-2x mx-2 my-2"></i>
         <h3 className='my-1 mx-2'>xyz@medicaps.ac.in</h3>
        </div>
    </div>

    </div>
  )
}
