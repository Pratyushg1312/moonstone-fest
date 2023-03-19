import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function DropdownRegistration(props) {
  var s=props.to_find;
  const handleChange = e => {
    const { name, value } = e.target
    Events.filter(Events=>Events.event===value).map((item)=>{props.setFees(item.fees)})
    props.setcontent({
        ...props.content,
        [name]: value
    })
  }

  const [Events, setEvents] = useState([]);  
  useEffect(() => {
    axios.get("/api/allevent")
    .then((res)=>{setEvents(res.data)});
  }, [])

  const movenxt=()=>{
    if (props.content[s].length===0) {      
      alert("Please Fill the data");
    }
    else{
      props.setidx(props.idx+1)
    }
  }

  return (
<div>
  {/* {props.setFees(500)} */}
        <div class="typewriter">
            <h1 className='typing-heading'>Register Your Event?</h1>
          </div>
          <select  type="text" name={s} value={props.content[s]} onChange={handleChange} required>
          <option value="">--Please choose an option--</option>
          {Events.filter(item=> item.status === "open").map((item)=>{
            return <option value={item.event} onClick={()=>{console.log(item.fees)}}>{item.event}</option>
          })}
        </select>
          <div className='btn-left'>
          {props.idx!==0?<button className='nxt-btn' onClick={()=>{props.setidx(props.idx-1)}}><i class="fa-solid fa-arrow-left"></i>  Prev </button>:<></>}
          {props.idx!==props.lst?<button className='nxt-btn' onClick={()=>{movenxt()}}> Next <i class="fa-solid fa-arrow-right"></i> </button>:<></>} 
        </div>

    </div>
    )
}

