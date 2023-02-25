import React from 'react'

export default function DropdownRegistration(props) {
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
        <>
        <div class="typewriter">
            <h1 className='typing-heading'>Register Your Event?</h1>
          </div>
          <select  type="text" name={s} value={props.content[s]} onChange={handleChange} required>
            <option value="1">Event 1</option>
            <option value="2">Event 2</option>
            <option value="3">Event 3</option>
            <option value="4">Event 4</option>
        </select>
          <div className='btn-left'>
          {props.idx!==0?<button className='nxt-btn' onClick={()=>{props.setidx(props.idx-1)}}><i class="fa-solid fa-arrow-left"></i>  Prev </button>:<></>}
          {props.idx!==3?<button className='nxt-btn' onClick={()=>{props.setidx(props.idx+1)}}> Next <i class="fa-solid fa-arrow-right"></i> </button>:<></>}
          {props.idx===3?<button className='nxt-btn' onClick={()=>{alert("Submited")}}> Submit<i class="fa-solid fa-arrow-right"></i> </button>:<></>}
        </div>
        </>

    </div>
    )
}

