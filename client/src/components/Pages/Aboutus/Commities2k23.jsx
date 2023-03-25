import React from 'react'
import Coordinator from '../SingleEvent/Coordinator'
import './commite.css'

export default function Commities2k23(props) {
    return (
        <div className='comitee text-center'>
            <span className=' heading1 ' id={props.event}>{props.event} Commitee</span>
            <div className='container d-flex flex-wrap justify-content-evenly mt-3'>
                <Coordinator />
                <Coordinator/>
                <Coordinator/>
            </div>
        </div>
    )
}
