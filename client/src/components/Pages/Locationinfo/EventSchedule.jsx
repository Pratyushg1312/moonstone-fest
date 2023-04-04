import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../Auction/Auction.css'
import Schedule from './Schedule.js'
import './EventSchedule.css'
import Places from './Places';
import Directions from './Direction'

export default function EventSchedule() {
    const [day, setDay] = useState(1);
    const [direction,setdirection]=useState(Directions[0]);
//    console.log(Places    .length,Directions.length);
 
    console.log(Places.length, Directions.length)
    const [venue, setVenue] = useState(Places[0]);
    const [location, setlocation] = useState(Places[0]);
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
    const onSearch = (searchItem,idx) => {
        setVenue(searchItem);
        if (Places.includes(searchItem)){
            setlocation(searchItem);
            setdirection(Directions[idx]);}
        //    console.log("search"+searchItem);
    }
    const f1 = (e,idx) => {
        onSearch(e,idx);
    }

    const print = (e) => {
        if (Places.includes(e))
            setlocation(e);
    }


    return (
        <div>
            <div>
                <h1 className='text-center mt-4' style={{color:"#D3BD3B" ,fontFamily:"Montserrat",fontWeight:"bold"}}>Discover Exciting Events Near You</h1>
                <div className='text-center mt-5'>
                    <input className='text-center  barsrch' type="text" value={venue} onChange={onChange} style={{ height: "40px", width: "auto ", fontSize: "16px" }} />
                    <button className='btn btn-sm btn-dark searchBtn'  onClick={() => print(venue)}> Search </button>
                    <div className='d-flex justify-content-center location' >
                        <ul className='drop' >
                            {Places.filter((item) => {
                                let searchterm = venue.toLowerCase();
                                let term = item.toLowerCase();
                                return (term.includes(searchterm) && (searchterm != term));

                            }).map((place,idx) => {
                                    return <li className='down' onClick={() => f1(place,idx)} >{place}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <h1 className="text-center"  style={{color:"#D3BD3B"}} >Event Schedule for {location} <span><a href={direction}target={'_blank'}><img className='directionicon' src="/images/navigation.jpg" style={{ width: "40px", height: "40px", margin: "10px" }} /></a></span></h1>
            
            <div className='d-flex justify-content-evenly mb-5'  >
                <p className='btn m-1  abcd' style={{ backgroundColor: day === 1 ? "rgb(0, 255, 209) " : "gray" }} onClick={() => setDay(1)} >Day 1 </p>
                <p className=' btn m-1 abcd' style={{ backgroundColor: day === 2 ? "rgb(0, 255, 209) " : "gray" }} onClick={() => setDay(2)}>Day2</p>
                <p className=' btn m-1 abcd' style={{ backgroundColor: day === 3 ? "rgb(0, 255, 209) " : "gray" }} onClick={() => setDay(3)}>Day3</p>
            </div>
            <div className='row justify-content-center' style={{ width: "100%" }}>
                <div className='col-12 p-0 col-md-8'>
                    <table class=" table maptable pqr  ">
                        <thead>
                            <tr style={{ color: "#DC3545",  textAlign: "center" ,fontFamily:"Poppins"}}>

                                <th scope="col-3" style={{
                                    fontWeight:"normal",
                                    fontFamily:"Poppins"
                                }}>Event Name </th>
                                <th scope="col-3" style={{
                                    fontWeight:"normal",
                                    fontFamily:"Poppins"
                                }}>Start</th>
                                <th scope="col-3" style={{
                                    fontWeight:"normal",
                                    fontFamily:"Poppins"
                                }}>End</th>

                            </tr>
                        </thead>
                        <tbody style={{ color: "#00ffd1", fontSize: "1.5rem" }}>

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
