import React from 'react'

export default function SingleContentForm(props) {
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
            <h1>What is Your {s} ?</h1>
          </div>
          <input type="text" placeholder={s} name={s} value={props.content[s]} onChange={handleChange} required/>
          <div className='btn-left'>
          {props.idx!==0?<button className='nxt-btn' onClick={()=>{props.setidx(props.idx-1)}}><i class="fa-solid fa-arrow-left"></i>  Prev </button>:<></>}
          {props.idx!==3?<button className='nxt-btn' onClick={()=>{props.setidx(props.idx+1)}}> Next <i class="fa-solid fa-arrow-right"></i> </button>:<></>}
          {props.idx===3?<button className='nxt-btn' onClick={()=>{alert("Submited")}}> Submit<i class="fa-solid fa-arrow-right"></i> </button>:<></>}
        </div>
    </div>
    )
}
