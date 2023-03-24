import React from 'react'

export default function Allteamdata(props) {
  var memberno=1;
  return (
    <div className='form__group field'>
        {props.content.team.map((item)=>{
          return <div  style={{border:"2px solid #116399", color:"white", padding:"10px",margin:"5px", borderRadius:"8px"}}> <p style={{color:"#0077ff"}}>Member : {memberno++}</p> <p>{item.name}</p> <p>{item.phoneno}</p> <p>{item.email}</p> <p>{item.college}</p> </div>
        })}
    </div>
  )
}
