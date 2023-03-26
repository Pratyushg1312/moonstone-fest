import React from 'react'
import Coordinator from '../SingleEvent/Coordinator'
import './commite.css'

export default function Commities2k23(props) {
    return (
        <div className='comitee text-center'>
            <span className=' heading1 ' id={props.event}>{props.event} </span>
            <div className=' d-flex flex-wrap justify-content-around my-5'>
                {props.event === `Techno Management`?<><Coordinator image={"/images/AjayKulkarni.jpeg"} name={"Prof. Ajay Kulkarni"} designation={"Technichal Events"}/><Coordinator image={"/images/AnkurSaxena.jpeg"} name={"Prof. Ankur Saxena"} designation={"Management Events"}/></>:<Coordinator image={props.img} name={props.name} designation={props.designation}/>}
            </div>
        </div>
    )
}
