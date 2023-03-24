import React from 'react'
import Events from '../Events/Events'
import { Hero } from '../Home/Hero.jsx'
// import Sponsor from './Sponsor'
import NewSponsor from './NewSponsor'

import Temp from './Temp'
import Map from './Map'
export default function Home() {
  return (
    <div>
      <Hero/>
      <Events/>
      <NewSponsor/>


      {/* <Map/> */}
    </div>
  )
}
