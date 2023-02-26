import React from 'react'
import Events from '../Events/Events'
import { Hero } from './Hero'
import Sponsor from './Sponsor'
import NewSponsor from './NewSponsor'
import Temp from './Temp'
export default function Home() {
  return (
    <div>
      <Temp/>
        {/* <Hero/> */}
      {/* <Sponsor/> */}
      <Events/>
      <NewSponsor/>
    </div>
  )
}
