import React from 'react'
import './abouthero.css'
export default function Abouthero() {
  return (
    <div className='herobody'>
        <h1 style={{textAlign:"center"}}>About US</h1>
<section id="solar-system">
  <div id="sun"></div>
  <article id="mercury-trajectory">
    <div id="mercury"></div>
  </article>
  <article id="venus-trajectory">
    <div id="venus"></div>
  </article>
  <article id="earth-trajectory">
    <div id="earth"></div>
  </article>
  <article id="mars-trajectory">
    <div id="mars"></div>
  </article>
         <article id="main-asteroid-belt-trajectory"></article>
         <article id="jupiter-trajectory"></article>
         <article id="saturn-trajectory"></article>
         <article id="uranus-trajectory"></article>
         <article id="neptune-trajectory"></article>
     
</section>
    </div>
  )
}
