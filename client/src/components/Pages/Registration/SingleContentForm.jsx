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
 
  const movenxt=()=>{
    if (props.content[s].length===0) {      
      alert("Please Fill the data");
    }
    else if(s==="phoneno"&&!(/^(0|91)?[6-9][0-9]{9}$/.test(props.content[s]))){
      alert("Please Input Valid Phone No.");
    }
    else if(s==="email"&&!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(props.content[s]))){
      alert("Please Input Valid Email id");
    }
    else{
      props.setidx(props.idx+1)
    }
  }
  
  const submitit=()=>{
    if (props.content[s].length==0) {      
      alert("Please Fill the data");
    }
    else{
      alert("Thanks For Submiting Form");
    // props.FormSubmit();
    }
  }

  const entersubmit=(e)=> {
    if (e.keyCode === 13) {
      movenxt();
    }
  }

  return (
<div>
        <>
        <div class="typewriter">
            <h1 className='typing-heading'>What is Your {s}?</h1>
          </div>
          <input type="text" onKeyDown={(e) => entersubmit(e)}  placeholder={props.placeholder} name={s} value={props.content[s]} onChange={handleChange} required/>
          <div className='btn-left'>
          {props.idx!==0?<button className='nxt-btn' onClick={()=>{props.setidx(props.idx-1)}}><i class="fa-solid fa-arrow-left"></i>  Prev </button>:<></>}
          {props.idx!==props.lst?<button className='nxt-btn' onClick={()=>{movenxt()}}> Next <i class="fa-solid fa-arrow-right"></i> </button>:<></>}
          {props.idx===props.lst?<button className='nxt-btn' onClick={()=>{submitit()}}> Submit<i class="fa-solid fa-arrow-right"></i> </button>:<></>}
        </div>
        </>

    </div>
    )
}
