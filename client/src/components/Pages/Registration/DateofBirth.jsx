import React from 'react'

export default function DateofBirth(props) {
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
            <h1 className='typing-heading'>What is Your DoB?</h1>
          </div>
          <input type="date" name={s} value={props.content[s]} onChange={handleChange} required/>
          <div className='btn-left'>
          {props.idx!==0?<button className='nxt-btn' onClick={()=>{props.setidx(props.idx-1)}}><i class="fa-solid fa-arrow-left"></i>  Prev </button>:<></>}
          {props.idx!==props.lst?<button className='nxt-btn' onClick={()=>{props.setidx(props.idx+1)}}> Next <i class="fa-solid fa-arrow-right"></i> </button>:<></>}
          {props.idx===props.lst?<button className='nxt-btn' onClick={()=>{alert("Submited")}}> Submit<i class="fa-solid fa-arrow-right"></i> </button>:<></>}
        </div>
        </>

    </div>
    )
}
