import React from 'react'
import './SingleEvent.css'
import { NavLink, useParams } from 'react-router-dom'
import SingleEventContent from './SingleEventContent'
// import temp from '/public/Videos/temp.mp4'
import Coordinator from './Coordinator'
import Entryallowed from './Entryallowed'

export default function SingleEvent() {
    let event = useParams();
    console.log(event.id);
    let arr = SingleEventContent.find(e => e.Event === event.id)
    console.log(arr);
    return (
        <div>
            <div className='main'>
                <div className='overlay'></div>
                <video autoPlay loop muted >
                    <source src="/Videos/temp.mp4" type="video/mp4" /></video>
                <div className='content'>
                    <h1 class="eventname">{arr.Event}</h1>
                </div>
            </div>
            <div className='About container mt-4'>
                <h1 className='text-center abttt' >About </h1>
                <p className='text-center'>{arr.Description}
                </p>
            </div>
            <div className='Schedule container mt-4'>

                <div className='row'>
                    <div className='col-md-8 col-12 justify-content-center d-flex flex-wrap'>
                        <div className=' slot m-2'>
                            <h1 className='text-center m-1' style={{ fontSize: "25px" }}>Duration:</h1>
                            <p className='text-center'>{arr.Duration}</p>

                        </div>
                    </div>
                    <div className='col-md-4 col-12 d-flex align-items-center justify-content-evenly'>
                        <div className='m-2 text-center dir' >

                            <img src="/images/location.png" style={{ width: "40px", height: "40px", margin: "10px" }} />
                            <p>{arr.Venue}</p>
                        </div>
                        <div className='m-2 text-center navi' >

                            <a href={arr.Direction} target={'_blank'}><img src="/images/navigation.jpg" style={{ width: "40px", height: "40px", margin: "10px" }} /></a>
                            <p>Directions</p>

                        </div>

                    </div>
                </div>
            </div>
            <h1 className='text-center  mt-4 abttt' >Entry Allowed</h1>
            <Entryallowed single={arr.Single} duo={arr.Duo} team={arr.Team} />
            <div className='d-flex justify-content-evenly flex-wrap'>
                <div>
                    <h1 className='text-center abttt '>Prices</h1>
                    <p style={{color:"#56FFc7"}}>{arr.Prices}</p>
                </div>
                <div>
                    <h1 className='text-center abttt '>Event Registration</h1>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} > <NavLink to="/registration"  ><button class="fancy" style={{ margin: "20px" }} >
                        <span class="top-key"></span>
                        <span class="text">Register</span>
                        <span class="bottom-key-1"></span>
                        <span class="bottom-key-2"></span>
                    </button ></NavLink></div>
                </div>

            </div>
            {/* Coordinators Card Section */}
            {/* <h1 className='text-center abttt'>Coordinators</h1>
            <div className='container d-flex flex-wrap justify-content-center'>

                <Coordinator/>
                <Coordinator/>



            </div> */}
        </div>
    )
}
