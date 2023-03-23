import React from 'react'
import Events from './Events/Events'
import { Hero } from './Hero/Hero'
import NewSponsor from './Sponsor/NewSponsor'
export default function Home() {
  return (
    <div>
      <Hero/>
      <Events/>
      <NewSponsor/>
    </div>
  )
}
