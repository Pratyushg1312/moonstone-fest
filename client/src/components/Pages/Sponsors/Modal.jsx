import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Modalcontent from './Modalcontent';
import './Sponsors.css'
export default function Modal(props) {
  let arr=Modalcontent[props.sponsor];
  let j=props.sponsor;
  // console.log(props.sponsor);
  // console.log(props.arr);
  // console.log(Modalcontent[props.sponsor]);
const[sponsor,setsponser]=useState("Title");
// setsponser(j);
// useEffect(() => {
// }, j);

  return (
    <>
     
        <p>{props.sponsor} Sponsor</p>

       
      
    </>
  );

}
