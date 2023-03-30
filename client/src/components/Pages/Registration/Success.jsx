import React, { useEffect, useState } from 'react'
import "./success.css"
import {useNavigate} from "react-router-dom"

export default function Success(props) {
    const navigate=useNavigate()
    // const [Time, setTime] = useState(20);
    // const reducetime=async ()=>{
    //     await setTime(Time-1)
    // }
    useEffect(() => {
        //   setInterval(()=>{reducetime()},1000);
        setTimeout(()=>{navigate("/")},100000)
    },[])
    
  return (
    <div>
        <div class="main-container">
            <div class="check-container">
                <div class="check-background">
                    <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 25L27.3077 44L58.5 7" stroke="white" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div class="check-shadow"></div>
            </div>
        </div>
        {/* {Time} */}
   <div>Registration ID : {props.reg_id}</div>
   <div>Name : {props.content.name}</div>
   <div>Email 1: {props.content.email}</div>
   <div>Email 2: {props.content.auth_email}</div>
   <div>Phone No. : {props.content.phoneno}</div>
   <div>College : {props.content.college}</div>
   <div style={{border:"2px solid rgb(0, 255, 208)" , textAlign:"center", borderRadius:"10px", margin:"20px"}}>
   <div style={{color:"red"}}>Note : </div>
   <div style={{color:"yellow"}}>Invoice has been sent to mail </div>
   <div style={{color:"yellow"}}>After Payment </div>
   <div style={{color:"yellow"}}>Registraton will be Confirmed</div>
   </div>
</div>
  )
}
