import React from 'react'
import './header.css'
export default function Header() {
  return (
    <div className='design-navbar'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img src='./images/medicaps.png' alt='' width={"100px"}/>  
    </a>
    <button style={{color:"white"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span style={{color:"black"}} className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/aboutus">Aboutus</a>
        <a className="nav-link" href="/contactus">Contactus</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
