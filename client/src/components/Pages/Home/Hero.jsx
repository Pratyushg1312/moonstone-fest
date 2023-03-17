import React, { useRef, useState } from 'react'

import "./hero.css"
import { Aboutmoon } from './Aboutmoon';
export const Hero = () => {

  

  return (
    <div className="hero-con">
      <div className='hero'>
        
      </div>
      <div className="logotyp-con">
        <div className="logo1" >
          <img src='./images/logomono.png'  class="img-fluid rounded mx-auto d-block p-2"  alt="" />
        </div>
        <div className="typ" >
          <Aboutmoon/>
        </div>
      </div>
    </div>
  )
}
