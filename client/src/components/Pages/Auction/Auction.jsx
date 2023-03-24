import React from 'react'
import './Auction.css'
export default function Auction() {
    return (
        <div classname="auction1" style={{ color: "#00FFD1" }}>
            <h1 className='text-center'>Auction 2.0</h1>

            <div className='row justify-content-center' style={{width:"100%"}}>
                <div className='col-12 p-0 col-md-8'>
                    <table class=" table maptable pqr  ">
                        <thead>
                            <tr style={{ color: "#ffbd00", fontSize: "2rem" }}>

                                <th scope="col">Department Name</th>
                                <th scope="col">Faculty Coordinator</th>
                                <th scope="col">Student Coordinator</th>

                            </tr>
                        </thead>
                        <tbody style={{ color: "white", fontSize: "1.5rem" }}>

                            <tr><td>Management</td><td><div className='d-flex flex-wrap justify-content-center'><p>Prof. Sneha Raghuvanshi </p><p>Prof. Sneha Raghuvanshi </p></div></td> <td><div className='d-flex flex-wrap justify-content-center'><p>Prof. Sneha Raghuvanshi </p><p>Prof. Sneha Raghuvanshi </p></div></td> </tr>

                            <tr><td>Information Technology</td><td><div className='d-flex flex-wrap justify-content-center'><p>Prof. Sneha Raghuvanshi </p><p>Prof. Sneha Raghuvanshi </p></div></td> <td><div className='d-flex flex-wrap justify-content-center'><p>Prof. Sneha Raghuvanshi </p><p>Prof. Sneha Raghuvanshi </p></div></td> </tr>



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
