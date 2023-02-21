import React, { useState } from 'react'
import './registration.css'
import SingleContentForm from './SingleContentForm';
export default function Registration() {
  const [content, setcontent] = useState({"name":"","phoneno":"","email":"","event":""});
  const [idx,setidx]=useState(0);
  return (
    <div className='registration-form'>
          <h1 style={{fontSize:"50px",textAlign:"center",color:"#999", paddingBottom:"20px"}}>Registration Form</h1>
          {idx===0?<SingleContentForm content={content} setcontent={setcontent} to_find={"name"} idx={idx} setidx={setidx} />:<></>}
          {idx===1?<SingleContentForm content={content} setcontent={setcontent} to_find={"phoneno"} idx={idx} setidx={setidx}/>:<></>}
          {idx===2?<SingleContentForm content={content} setcontent={setcontent} to_find={"email"} idx={idx} setidx={setidx}/>:<></>}
          {idx===3?<SingleContentForm content={content} setcontent={setcontent} to_find={"event"} idx={idx} setidx={setidx}/>:<></>}
    </div>        
  )
}
