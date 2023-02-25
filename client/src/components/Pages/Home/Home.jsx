import React from 'react'
import Events from '../Events/Events'
import { Hero } from './Hero'
import Sponsor from './Sponsor'
import NewSponsor from './NewSponsor'
export default function Home() {
  return (
    <div className='container'>
        <Hero/>
      {/* <Sponsor/> */}
      <Events/>
      <NewSponsor/>
    </div>
  )
}
