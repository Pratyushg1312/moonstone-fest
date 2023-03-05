import React from 'react'
import "./success.css"
export default function Success(props) {
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
   <div>Registration ID : {props.reg_id}</div>
   <div>Name : {props.content.name}</div>
   <div>Email 1: {props.content.email}</div>
   <div>Email 2: {props.content.auth_email}</div>
   <div>Phone No. : {props.content.phoneno}</div>
   <div>College : {props.content.college}</div>
   <div>Tansaction No. : {props.content.utr}</div>
   <div style={{border:"2px solid rgb(0, 255, 208)" , textAlign:"center", borderRadius:"10px", margin:"20px"}}>
   <div style={{color:"red"}}>Note : </div>
   <div style={{color:"yellow"}}>After Payment Verification </div>
   <div style={{color:"yellow"}}>Registraton will be Confirm</div>
   </div>
</div>
  )
}
