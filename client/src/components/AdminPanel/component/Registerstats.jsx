import React, { useEffect } from 'react'
import './regstat.css'
import axios from "axios";
export const Registerstats = () => {
    
    useEffect(() => {
        axios.get("/onlyforadmin/allregistration")
        .then((res)=>{console.log(res)})
    }, [])
    
  return (
    <div className="regstat">
        <div className="box">
            <p className='tagname'>VISITORS</p>
            <p className='tagamt'>27000</p>
        </div>
        <div className="box">
            <p className='tagname'>VISITORS</p>
            <p className='tagamt'>27000</p>
        </div>
        <div className="box">
            <p className='tagname'>VISITORS</p>
            <p className='tagamt'>27000</p>
        </div>
        <div className="box">
            <p className='tagname'>VISITORS</p>
            <p className='tagamt'>27000</p>
        </div>

        <div className="box">
            <p className='tagname'>VISITORS</p>
            <p className='tagamt'>27000</p>
        </div>
        <div className="box">
            <p className='tagname'>VISITORS</p>
            <p className='tagamt'>27000</p>
        </div>

        <div className="box">
            <p className='tagname'>VISITORS</p>
            <p className='tagamt'>27000</p>
        </div>

        <div className="box">
            <p className='tagname'>VISITORS</p>
            <p className='tagamt'>27000</p>
        </div>
        <div className="box">
            <p className='tagname'>VISITORS</p>
            <p className='tagamt'>27000</p>
        </div>

        <div className="box">
            <p className='tagname'>VISITORS</p>
            <p className='tagamt'>27000</p>
        </div>

        <div className="box">
            <p className='tagname'>VISITORS</p>
            <p className='tagamt'>27000</p>
        </div>
        <div className="box">
            <p className='tagname'>VISITORS</p>
            <p className='tagamt'>27000</p>
        </div>

      

       


       

    
    </div>
  )
}
