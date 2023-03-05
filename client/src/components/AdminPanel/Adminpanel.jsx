import React from 'react'
import { Header } from './component/Header'
import { Registerstats } from './component/Registerstats'

export default function adminpanel() {
  return (
    <div className="home">
        <Header/>
        <Registerstats/>
    </div>
  )
}
