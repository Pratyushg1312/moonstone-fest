import React from 'react'
import PersonDetail from './PersonDetail'
import './TeamPage.css'
import { Team } from '../Our Team/Team'

export default function TeamPage() {
  return (
    <div className='team-container'>
      <div className="card-center">
     


        <div className="person-card"><Team/></div>
        <div className="person-card"><PersonDetail/></div>
        {/* <div className="person-card"><PersonDetail/></div>
        <div className="person-card"><PersonDetail/></div>
        <div className="person-card"><PersonDetail/></div>  */}
      </div>
    </div>
  )
}
