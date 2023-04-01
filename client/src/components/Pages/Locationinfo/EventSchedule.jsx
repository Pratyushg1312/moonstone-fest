import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../Auction/Auction.css'
import Schedule from './Schedule.js'
import './EventSchedule.css'


export default function EventSchedule() {
    const [day, setDay] = useState(1);

    const places = ["Big Auditorium", "Canteen", "R Block Garden", "Small Auditorium", "Main Stage", "Medi-Square", "Block V", "Block V", "Block C", "Block Q", "Block M", "Multi Purpose Hall", "Kho-Kho Ground", "Mechanical Quadrangle", "Bus Parking Lawn", "Cricket Ground", "BasketBall Court", "Volleyball Court", "Medi-Caps University Campus", "Ampitheatre"];

    const [venue, setVenue] = useState(places[0]);
    const [location, setlocation] = useState(places[0]);
    console.log(day);

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
    const onChange = (e) => {
        setVenue(e.target.value);
    }
    const onSearch = (searchItem) => {
        setVenue(searchItem);
        if (places.includes(searchItem))
        setlocation(searchItem);
        //    console.log("search"+searchItem);
    }
    const f1 = (e) => {
        onSearch(e);
    }

    const print = (e) => {
        if (places.includes(e))
            setlocation(e);
    }


    return (
        <div>
            <div>
                <h1 className='text-center mt-4'>Discover Exciting Events Near You</h1>
                <div className='text-center mt-5'>
                    <input className='text-center' type="text" value={venue} onChange={onChange} style={{ height: "40px", width: "auto ", fontSize: "16px" }} />
                    <button className='btn btn-sm btn-dark searchBtn'  onClick={() => print(venue)}> Search </button>
                    <div className='d-flex justify-content-center location'>
                        <ul>
                            {places.filter((item) => {
                                let searchterm = venue.toLowerCase();
                                let term = item.toLowerCase();
                                return (searchterm && term.includes(searchterm) && (searchterm != term));

                            })
                                .map((place) => {
                                    return <li onClick={() => f1(place)} >{place}</li>
                                })}
                        </ul>
                    </div>
                </div>
            </div>

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
                                <th scope="col-3">Start</th>
                                <th scope="col-3">End</th>

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
