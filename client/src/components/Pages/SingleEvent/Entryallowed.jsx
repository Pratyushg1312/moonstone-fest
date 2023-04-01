import React from 'react'

export default function   Entryallowed(props) {
  return (
    <div>
        <div className='d-flex justify-content-center'>
           { props.single?<div className='m-4'><img src ="./images/singleEntry.png" style={{width:"50px" ,height:"45px" }}></img><p style={{ color:"pink"}}>Single Entry</p></div>:""}
           { props.duo?<div className='m-4'><img src ="./images/duoEntry.png" style={{width:"50px" ,height:"50px" }}></img><p style={{ color:"pink"}}>Duo Entry</p></div>:""}
           { props.team?<div className='m-4'><img src ="./images/groupEntry.png" style={{width:"50px" ,height:"50px" }}></img><p style={{ color:"pink"}}>Team Entry</p></div>:""}
        </div>
      
    </div>
  )
}
