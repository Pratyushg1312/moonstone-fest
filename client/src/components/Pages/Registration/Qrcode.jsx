import React from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios";

export default function Qrcode(props) {
  const navigate=useNavigate()
  var s=props.to_find;
  const handleChange = e => {
    const { name, value } = e.target
    props.setcontent({
        ...props.content,
        [name]: value
    })
  }
  
  const aftersubmit=()=>{
    alert("Form Recived");
    navigate("/");    
  }
  const submitit=()=>{
    if (props.content[s].length===0) {      
      alert("Please Fill the data");
    }
    else{
      alert("Thanks For Submiting Form");
      axios.post("/api/registeruser",props.content)
      .then((res)=>{aftersubmit(res)})
    }
  }
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
  <div  style={{display:"flex",justifyContent:"center"}}>
  <h2>FEES: {props.Fees} ₹</h2>
  </div>
  <div  style={{display:"flex",justifyContent:"center"}}>
  <img src='https://firebasestorage.googleapis.com/v0/b/vishal-6ccf0.appspot.com/o/qrcode.jpeg?alt=media&token=8458efce-7133-4dc1-be8c-08ea3fa7017f' alt='qrcode' width={"40%"}/>
  </div>
        <div class="typewriter">
            <h1 className='typing-heading'>Enter UTR/Transaction No.?</h1>
          </div>
          <input type="text"  placeholder={props.placeholder} name={s} value={props.content[s]} onChange={handleChange} required/>
          <div className='btn-left'>
          {props.idx!==0?<button className='nxt-btn' onClick={()=>{props.setidx(props.idx-1)}}><i class="fa-solid fa-arrow-left"></i>  Prev </button>:<></>}
          {props.idx!==props.lst?<button className='nxt-btn' onClick={()=>{movenxt()}}> Next <i class="fa-solid fa-arrow-right"></i> </button>:<></>}
          {props.idx===props.lst?<button className='nxt-btn' onClick={()=>{submitit()}}> Submit<i class="fa-solid fa-arrow-right"></i> </button>:<></>}
        </div>
    </div>
    )
}
