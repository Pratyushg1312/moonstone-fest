import React from 'react'
import Events from '../Events/Events'
import { Hero } from './Hero'
import Sponsor from './Sponsor'
import NewSponsor from './NewSponsor'
import Temp from './Temp'
import Map from './Map'
export default function Home() {
  return (
    <div>
      {/* <Temp/> */}
        <Hero/>
      {/* <Sponsor/> */}
      <Events/>
      <NewSponsor/>
      {/* <Map/> */}
    </div>
  )
}
