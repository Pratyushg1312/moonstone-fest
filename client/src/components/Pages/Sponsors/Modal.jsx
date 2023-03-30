import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Modalcontent from './Modalcontent';
export default function Modal(props) {
console.log(props.sponsor);
let arr=Modalcontent[props.sponsor];
let j=props.sponsor;
  // console.log(Modalcontent[props.sponsor]);
const[sponsor,setsponser]=useState("Title");
// setsponser(j);
  return (
    <>
      <div className=' col-md-4 col-8 p-5 m-2 text-center aaaa' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{
        border: "3px solid #56FFC7",
        borderRadius: "5px",
        

      }}>
        <p>{props.sponsor} Sponsor</p>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{color:"black"}}>
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              
              <h1>{props.sponsor} Sponsorship</h1>
              {/* {console.log(props.sponsor)} */}
              <div className="modal-body" style={{ textAlign: "start" }}>
                <h3 className='text-center' style={{fontWeight:"bolder" ,borderBottom:"1px solid black" ,paddingBottom:"4px "}}>Perks</h3>

                <ul>
                  {arr.map((key,idx) => {
                    return (<li>{key}</li>)
                  })}
                </ul>
              </div>
              <div className="modal-footer">
                <NavLink to="/contactus">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">contact for Sponsorship</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}
