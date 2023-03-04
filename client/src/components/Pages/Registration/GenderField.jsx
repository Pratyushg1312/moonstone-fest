import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function GenderField(props) {
  var s=props.to_find;
  const handleChange = e => {
    const { name, value } = e.target
    props.setcontent({
        ...props.content,
        [name]: value
    })
  }


  return (
<div>
        <div class="typewriter">
            <h1 className='typing-heading'>Gender</h1>
          </div>
          <select  type="text" name={s} value={props.content[s]} onChange={handleChange} required>
          <option value="">--Please choose an option--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="prefernottosay">prefer not to say</option>
        </select>
          <div className='btn-left'>
          {props.idx!==0?<button className='nxt-btn' onClick={()=>{props.setidx(props.idx-1)}}><i class="fa-solid fa-arrow-left"></i>  Prev </button>:<></>}
          {props.idx!==props.lst?<button className='nxt-btn' onClick={()=>{props.setidx(props.idx+1)}}> Next <i class="fa-solid fa-arrow-right"></i> </button>:<></>}
          {props.idx===props.lst?<button className='nxt-btn' onClick={()=>{alert("Submited")}}> Submit<i class="fa-solid fa-arrow-right"></i> </button>:<></>}
        </div>

    </div>
    )
}

