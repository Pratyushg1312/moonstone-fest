import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import logoOnDemand from './texture/logoOnDemand.png'
// import{Spheree} from './Spheree'
import { Model } from './ModelDraco'
// import {Model} from './3dmoond'
// import{Model} from'./Nmdraco';
import { degToRad } from 'three/src/math/MathUtils';
import { Suspense } from 'react';
import "./hero.css"
import { Aboutmoon } from './Aboutmoon';
export const Hero = () => {
  const [colorr,setColorr]= useState('cyan');
 function changecolor(para){
      setColorr(para);
  }

  return (
    <div className="hero-con">
      <div className='hero'>
        <Canvas  >
          {/* <pointLight position={[0,0,0]} intensity={1} color="cyan" castShadow/> */}

          {/* <ambientLight intensity={1} /> */}
          <Suspense fallback={null}>
            <Model ref={Model }  colorr={colorr}/>
            {/* <Model/> */}
          </Suspense>
        </Canvas>
      </div>
      <div className="logotyp-con">
        <div className="logo1" onMouseOver={()=>{ changecolor('red')}}  onMouseOut={()=>{changecolor('cyan')}}>
          <img src={logoOnDemand}  class="img-fluid rounded mx-auto d-block p-2"  alt="" />
        </div>
        <div className="typ" onMouseOver={()=>{ changecolor('red')}}  onMouseOut={()=>{changecolor('cyan')}}>
          <Aboutmoon/>
        </div>
      </div>
    </div>
  )
}
