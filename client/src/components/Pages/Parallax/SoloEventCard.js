import React from 'react'
import "./Parallax.css"
import { NavLink } from 'react-router-dom'
const SoloEventCard = (props) => {
    return (
        <div className="card-event">
            <div className="img-box-events">
                <img src={props.imagefront} alt="" srcset="" />
                <img src={props.imageBack} alt="" srcset="" />
            </div>
            <div className="details-events">
                <div className="content-events">
                    <h3 style={{ color: "black" }}>Apps</h3>
                    <div className="buttons-section">
                        <NavLink to="/"><button className="button-section btn-view">View</button></NavLink>
                        <NavLink to="/Registration"><button className="button-section registration-btn">Register</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoloEventCard
