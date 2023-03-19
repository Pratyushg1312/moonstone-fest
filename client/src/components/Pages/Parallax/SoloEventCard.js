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
                <button data-text="Awesome" class="button-eventname">
                    <span class="actual-text">&nbsp;uiverse&nbsp;</span>
                    <span class="hover-text" aria-hidden="true">&nbsp;{props.name}&nbsp;</span>
                </button>
                    {/* <h3 style={{ color: "black" }}>{props.name}</h3> */}
                    <div className="buttons-section">
                        <NavLink to="/SingleEvent"><button className="btn-events">View Details</button></NavLink>
                        <NavLink to="/Registration"><button className="btn-events">Register</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoloEventCard
