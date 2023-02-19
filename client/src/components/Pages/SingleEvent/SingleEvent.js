import React from 'react'
import './SingleEvent.css'
export default function SingleEvent() {
    return (
        <div>
            <div className='overlay'></div>
            <video src='./videos/SingleEvent.mp4' autoPlay loop muted />

        </div>
    )
}
