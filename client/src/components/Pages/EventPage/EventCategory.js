import React from 'react'
import "./EventCategory.css"
function EventCategory() {
  return (
    <div className='Event-Page'>
      <div className="majorEventImg">
        <img src="images/1.jpg" alt="" />
        <div className="content-event">
          <h2>Cultural</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus a accusantium pariatur voluptas itaque sed dignissimos nisi doloribus reiciendis, eos cum! Error, consequuntur laudantium cum laborum doloremque placeat quibusdam alias?</p>
          <button className='view-event-button'>View</button>
        </div>
      </div>
    </div>
  )
}

export default EventCategory
