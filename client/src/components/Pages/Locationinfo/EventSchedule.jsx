import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../Auction/Auction.css'
import Schedule from './Schedule.js'
import './EventSchedule.css'
export default function EventSchedule() {
    const [day, setDay] = useState(1);
    console.log(day);
    let location = "Ground";
    let props = Schedule.find(item => item.place.hasOwnProperty(location));
    // console.log(props.place[location].day1.e1.name);
    let Day;
    if (day === 1)
        Day = props.place[location].day1;
    else if (day === 2)
        Day = props.place[location].day2;
    else if (day === 3)
        Day = props.place[location].day3;

    // Object.keys(Day).map((e) => {
    //     console.log(e + " " + Day[e]);

    // })
    return (
        <div>
            <h1 className="text-center">Event Schedule for {location} </h1>
            <div className='d-flex justify-content-evenly mb-5'  >
                <p className='btn m-1  abcd' style={{ backgroundColor: day === 1 ? "rgb(0, 255, 209) " : "gray" }} onClick={() => setDay(1)} >Day 1 </p>
                <p className=' btn m-1 abcd' style={{ backgroundColor: day === 2 ? "rgb(0, 255, 209) " : "gray" }} onClick={() => setDay(2)}>Day2</p>
                <p className=' btn m-1 abcd' style={{ backgroundColor: day === 3 ? "rgb(0, 255, 209) " : "gray" }} onClick={() => setDay(3)}>Day3</p>
            </div>
            <div className='row justify-content-center' style={{ width: "100%" }}>
                <div className='col-12 p-0 col-md-8'>
                    <table class=" table maptable pqr  ">
                        <thead>
                            <tr style={{ color: "#ffbd00", fontSize: "2rem", textAlign: "center" }}>

                                <th scope="col-3">Event Name</th>
                                <th scope="col-3">From</th>
                                <th scope="col-3">To</th>

                            </tr>
                        </thead>
                        <tbody style={{ color: "white", fontSize: "1.5rem" }}>

                            {Object.keys(Day).map((e) => {
                                console.log(e + " " + Day[e]);
                                let from = Day[e].substring(0, 5);
                                let to = Day[e].substring(6, 11);

                                return (<tr><td className='text-center'>{e}</td><td><div className='d-flex flex-wrap justify-content-center'><p>{from} </p></div></td> <td><div className='d-flex flex-wrap justify-content-center'><p>{to} </p></div></td> </tr>);
                            })}

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
