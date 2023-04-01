import React from 'react'
import SingleEventCard from './SingleEventCard'
import { NavLink } from 'react-router-dom'
import "./EventParentCategory.css"


function NightEventParentCategory() {
    return (
        <div className='parent-Event' style={{

            display: "flex",
            flexDirection: "column"
        }} >
            <div className="star-night" style={{}}>
                <h1 style={{ fontFamily: "poppins", fontWeight: "300", margin: "auto" }}>STAR NIGHT</h1>
                <div className="deanbox">
                    <div class="root12" style={{
                        overflow: "hidden",
                        width: "40%",
                        height: "80%",
                        margin: "auto auto",
                        marginTop: "2%"
                    }}>
                        <div class="wrap1">
                            <img src="/images/darshan.jpg" />

                        </div>
                    </div>
                    <div className="degi" style={{ width: "40%" }}>

                        <h3 style={{ color: "#D3BD3B", fontWeight: "800" }}>DARSHAN RAWAL</h3>
                        <div className="desc" style={{
                            display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", color: "#00FFD1"
                        }}><p>08.04.2023 | 6:30PM ONWARDS</p>
                            <p>Venue | Medi-Caps University Campus</p></div>
                    </div>
                </div>
            </div>
            <div className="dj-night" style={{ marginTop: "15px" }}>
                <h1 style={{ fontFamily: "poppins", fontWeight: "300" }}>DJ NIGHT</h1>
                <div className="mains" style={{ display: "flex" }}>
                    <div className="h">

                        <h1 className="subtitle" style={{justifyContent:"center"}}>
                            <p id="countdown" className="countdowns fadeThrees">
                                We will update you soon.
                            </p>
                        </h1>

                    </div>
                    {/* <p className="content-techno" style={{ color: "red" }}>We will update you soon</p> */}
                </div>
            </div>
        </div>
    )
}

export default NightEventParentCategory
