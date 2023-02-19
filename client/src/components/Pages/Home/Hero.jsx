import React from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import { Model } from './ModelDraco'
import  { Suspense} from 'react';
import "./hero.css"
export const Hero = () => {
  return (
    <div className="Container">

    <div className='hero'>
       <Canvas camera={{position:[4,7,0]}} >
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1}  color="green" />
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <Model ref={Model} />
          </Suspense>
        </Canvas>
        <div className="logo1">
            <h1>MOONSTONE</h1>
        </div>
    </div>
    </div>
  )
}
