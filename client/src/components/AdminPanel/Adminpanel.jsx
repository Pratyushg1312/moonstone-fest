import React from 'react'
import { Header } from './component/Header'
import Login from './component/Login'
import { Registerstats } from './component/Registerstats'

export default function adminpanel() {
  return (
    <div className="home">
        {/* <Header/> */}
        <Registerstats/>
        <Login/>
    </div>
  )
}
