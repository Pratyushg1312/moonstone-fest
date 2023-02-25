import React from 'react'
import './NewSponsor.css';
export default function NewSponsor() {
    return (
        <div style={{ color: "white" }}>
            <div class="containr">
                <div class="  d-flex row static-column align-items-center justify-content-center ">
                    <h1  className='text-center section-heading'>Our Sponsors</h1>
                    <p className='start-0'>Our sponsors include architects, engineers, contractors, material suppliers, building owners, policymakers, nonprofits, and government organizations, providing a 360-degree view of the challenges we face in the built environment. Their insights and resources are invaluable in accelerating action, in our highly collaborative environment.</p>

                </div>
                <div class="scrollable-column">
                    <div className='sponsor-logos m-2'><img  src="./images/25year.png"/></div>
                    <div className='sponsor-logos m-2'><img  src="./images/25year.png"/></div>
                    <div className='sponsor-logos m-2'><img  src="./images/25year.png"/></div>
                    <div className='sponsor-logos m-2'><img  src="./images/25year.png"/></div>
                    <div className='sponsor-logos m-2'><img  src="./images/25year.png"/></div>
                    <div className='sponsor-logos m-2'><img  src="./images/25year.png"/></div>
                    <div className='sponsor-logos m-2'><img  src="./images/25year.png"/></div>


                </div>
            </div>

        </div>
    )
}
