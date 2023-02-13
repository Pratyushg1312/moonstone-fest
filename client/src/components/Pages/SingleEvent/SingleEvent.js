import React from 'react'

export default function SingleEvent() {
    return (
        <div>
         
            <div className='container-fluid p-0' >
            <video className='col-12' style={{position:"absolute",zIndex:"-1",opacity:".7"}} autoPlay muted loop >
                <source src="/Videos/temp.mp4" type="video/mp4" />
            </video>
            <h1> Hello</h1>
            </div>
            {/* <img src="/images/image1.jpeg"/> */}
        </div>
    )
}
