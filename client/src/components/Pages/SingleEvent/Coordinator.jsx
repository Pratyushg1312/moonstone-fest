import React from 'react'

export default function Coordinator() {
  return (
    <div>
       <div class=" profile-card my-2 " style={{borderRadius:"5%"}}>
                    <img src="https://i.imgur.com/S4GNFIW.jpg" alt="image2" class="profile-icon" />
                    <div class="profile-name text-danger">Name </div>
                    <div class="profile-position mb-1" >Designation </div>
                    <div class="  contact1">
                        <div className='mx-2'><a href="https://wa.me/+919617450917" target="_blank"><img src="/images/whatsapp_image.png" style={{ width: "20px", height: "20px" }} /></a></div>
                        <div className='mx-2'><a href="tel:+919617450917" target="_blank"><img src="/images/contactimage.png" style={{ width: "20px", height: "20px" }} /></a></div>
                        <div className='mx-2'><a href="https://www.instagram.com/the.kalashjain/" target="_blank"><img src="/images/insta.png" style={{ width: "20px", height: "20px" }} /></a></div>
                    </div>
                </div>
    </div>
  )
}
