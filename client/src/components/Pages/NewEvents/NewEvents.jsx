import React from 'react'
import Day1 from './Days/Day1'
import './newevents.css'
import SingleEventBox from './SingleEventBox'
export default function NewEvents() {
  
  return (
  <div className='eventpage'>
        <h1>#Day 1</h1>
    <Day1/>
    <h1>#Day 2</h1>
    <Day1/>
    </div>
  )
}
