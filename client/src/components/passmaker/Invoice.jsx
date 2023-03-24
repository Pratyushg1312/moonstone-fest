import React from 'react'
import './slip.css'
export const Invoice = () => {
    return (
        <div className="invoice">
            <h1>Invoice</h1>
            <div className="pt1">
                <p >Serial No. : </p>
                <p >Date of Registration :</p>
            </div>
            <div className="pt2">
                <p >Event Name : </p>
                <p >Date of Event :</p>
            </div>
            <div className="pt4">

            <div className="pt3">
                <p> Name of Participant: </p>
                <p>Mobile No.: </p>
                <p>College Name: </p>
            </div>
            <p>Amount:(pending)</p>
            </div>
        </div>
    )
}
