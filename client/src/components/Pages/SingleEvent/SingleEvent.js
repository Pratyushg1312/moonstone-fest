import React from 'react'
import './SingleEvent.css'
import { NavLink } from 'react-router-dom'
// import temp from '/public/Videos/temp.mp4'
import Coordinator from './Coordinator'
import Entryallowed from './Entryallowed'

export default function SingleEvent() {
    return (
        <div>
            <div className='main'>
                <div className='overlay'></div>
                <video autoPlay loop muted >
                    <source src="/Videos/temp.mp4" type="video/mp4" /></video>
                <div className='content'>
                    <h1 >SYMPHONY</h1>
                </div>
            </div>
            <div className='About container mt-4'>
                <h1 className='text-center abttt' >About </h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                </p>
            </div>
            <div className='Schedule container mt-4'>
                <h1 className='text-center  mb-3 abttt'>Schedule </h1>
                <div className='row'>
                    <div className='col-md-8 col-12 justify-content-center d-flex flex-wrap'>
                        <div className=' slot m-2'>
                            <h1 className='text-center m-1' style={{ fontSize: "25px" }}>Event part 1</h1>

                        </div>
                    </div>
                    <div className='col-md-4 col-12 d-flex align-items-center justify-content-evenly'>
                        <div className='m-2 text-center dir' >

                            <img src="/images/location.png" style={{ width: "40px", height: "40px", margin: "10px" }} />
                            <p>Major Auditorium</p>
                        </div>
                        <div className='m-2 text-center navi' >

                            <a href="https://goo.gl/maps/zQmHkt6ha2dh6G7f6" target={'_blank'}><img src="/images/navigation.jpg" style={{ width: "40px", height: "40px", margin: "10px" }} /></a>
                            <p>Directions</p>

                        </div>

                    </div>
                </div>
            </div>
            <h1 className='text-center  mt-4 abttt' >Entry Allowed</h1>
            <Entryallowed single={true} duo={true} team={true}/>
            <h1 className='text-center abttt '>Event Registration</h1>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} > <NavLink to="http://moonstone2k23.medicaps.ac.in:5000/registration"  ><button class="fancy" style={{margin:"20px"}} >
          <span class="top-key"></span>
          <span class="text">Register</span>
          <span class="bottom-key-1"></span>
          <span class="bottom-key-2"></span>
          </button ></NavLink></div>
           
            {/* Coordinators Card Section */}
            {/* <h1 className='text-center abttt'>Coordinators</h1>
            <div className='container d-flex flex-wrap justify-content-center'>

                <Coordinator/>
                <Coordinator/>



            </div> */}
        </div>
    )
}
