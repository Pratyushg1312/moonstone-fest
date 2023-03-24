import React from 'react'
import Events from "../Home/Events/Events.jsx"
import { Hero } from '../Home/Hero/Hero.jsx'
// import Sponsor from './Sponsor'
import NewSponsor from '../Home/Sponsor/NewSponsor.js'

// import Temp from './Temp'
// import Map from './Map'
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