import React from 'react'
import './newevents.css'
import SingleEventBox from './SingleEventBox'
export default function NewEvents() {
  
  return (

<div className='eventpage'>
  
  <section className="hero-section">
    <div className="card-grid">
   <SingleEventBox/>
   <SingleEventBox/>
   <SingleEventBox/>
   <SingleEventBox/>
   <SingleEventBox/>
   <SingleEventBox/>
   <SingleEventBox/>
   <SingleEventBox/>
    </div>
  </section>

</div>
  )
}
