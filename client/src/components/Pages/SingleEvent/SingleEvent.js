import React from 'react'
import CardComponent from './CardComponent'
export default function SingleEvent() {
    return (
        <div>

            <div className=' container-fluid p-0' >
                <div className='d-flex  my-2 align-items-center justify-content-center row'>
                    <video className='col-12' style={{ zIndex: "-1", opacity: ".7", bottom: 0 }} autoPlay muted loop >
                    <h1 className='text-center' style={{ color: "white" ,position:"absolute"}} >Event Name</h1>
                        <source src="/Videos/temp.mp4" type="video/mp4" />
                    </video></div>
                <div className='my-2'>
                    <h1 className='text-center'>
                        EVENTS OF THE DAY
                    </h1>

                </div>
                <div className='d-flex row'>
                <CardComponent /></div>
                {/* <CardComponent />
                <CardComponent /> */}
            </div>


        </div>
    )
}
