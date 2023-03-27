import React from 'react'
import CardComponent from './CardComponent'
import './SingleEvent.css'
export default function SingleDay() {
    
    return (
        <div>

            <div className=' container-fluid p-0' >
                <div className='main'>
                    <div className='overlay'></div>
                    <video class='myvideo' muted autoPlay loop>
                        <source src='./Videos/temp.mp4' />
                    </video>
                    <div className='content'>
                        <h1>Day Name</h1>
                    </div>
                    </div>
                <div className='my-5'>
                    <h1 className='text-center effect'>
                        DAY EVENTS
                    </h1>
                    <div className='d-flex row'>
                        <CardComponent image="./images/musicEvent.jpeg"/>
                        <CardComponent image="./images/bandEvent.jpg"/>
                        <CardComponent image="./images/singEvent.jpg"/></div>
                </div>
                <div className='my-5'>
                    <h1 className='text-center effect'>
                        NIGHT EVENTS
                    </h1>
                    <div className='d-flex row'>
                        <CardComponent image="./images/danceEvent.jpeg" /></div>
                </div>

            </div>


        </div>
    )
}
