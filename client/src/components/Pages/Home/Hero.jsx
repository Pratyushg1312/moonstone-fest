import React, { useRef, useState } from 'react'

import "./hero.css"
import { Aboutmoon } from './Aboutmoon';
import { trusted } from 'mongoose';
export const Hero = () => {

const[ chng,chngstyl]=useState();
const[ chng1,chngstyl1]=useState();
const[ chng2,chngstyl2]=useState();
const[ chng3,chngstyl3]=useState(true);
const[ chng4,chngstyl4]=useState();
// const handleToggleMute = () => chngstyl3(current => !current);
  return (
    <div className="hero-con">
      <video autoPlay muted={chng3} loop id="hero" >
        <source src="./Videos/moonstone.mp4" type="video/mp4" />
      </video>
      <div className="pause"  style={{
        transition:"transform 1s ease",
        transitionDelay:"0.5s",
        transitionProperty:"transform",
        transform:chng4
      }}
      onClick={()=>{
        chngstyl("rotate(90deg)")
        chngstyl1("scale(1)")
        chngstyl2("scale(1)")
        chngstyl3(current => !current)
        chngstyl4("scale(0)")
      }}
      >
        <img src="./images/pause.png" alt="" />
      </div>
      <div className="screener" style={{
        transition:"transform 0s ease",
        transitionDelay:"0.5s",
        transitionProperty:"transform",
        transform:chng2
      }}
      >
        <div className="hero">
          <div className="circle" style={{
             transitionDelay:"0.3s",
             transitionProperty:"transform",
            transform:chng1
          }} onClick={()=>{
                  chngstyl("rotate(110deg)")
                  chngstyl1("scale(10)")
                  chngstyl2("scale(0)")
                  chngstyl4("scale(0.5)")
                  chngstyl3(current => !current)
          }}>
            <div className="triangle" style={{
              transitionDelay:"0s",
              transitionProperty:"transform",
                  transform:chng ,
              
                  
                  
            }} ></div>
          </div>
        </div>

        <div className="logotyp-con">
          <div className="logo1" >
            <img src='./images/logomono.png' class="img-fluid rounded mx-auto d-block p-2" alt="" />
          </div>
          <div className="typ" >
            <Aboutmoon />
          </div>
        </div>
      </div>
    </div>
  )
}
