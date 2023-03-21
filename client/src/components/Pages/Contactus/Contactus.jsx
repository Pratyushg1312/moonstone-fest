import React from 'react'
import './contactus.css'
import TechnicalTeam from './TechnicalTeam'
import { Teams } from '../Our Team/Team'
import NewContactus from './NewContactus'
import ContactMap from './ContactMap'


export default function Contactus() {
  return (
    <div>
      <NewContactus/>
      <ContactMap/>
<div className="our-team">
    <h2 className="team-name">Our Developers</h2>
    <Teams/>
  </div> 
</div>
  )
}

