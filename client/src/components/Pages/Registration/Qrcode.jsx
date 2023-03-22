import React, { useState } from 'react'
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

  const [loading, setloading] = useState(false);
  const aftersubmit=(res)=>{
    props.setRegid(res.data);
    console.log(res.data);
    alert("Form Recived");
    // navigate("/");    
  }
  const submitit=()=>{
    if (props.content[s].length===0) {      
      alert("Please Fill the data");
    }
    else{
      alert("Thanks For Submiting Form");
      setloading(true);
      axios.post("/api/registeruser",props.content)
      .then((res)=>{aftersubmit(res)})
    }
  }
  

  return (
<div >
  <div  style={{display:"flex",justifyContent:"center"}}>
  <h2>FEES: {props.Fees} ₹</h2>
  </div>
  <div  style={{display:"flex",justifyContent:"center"}}>
  <img src='https://firebasestorage.googleapis.com/v0/b/vishal-6ccf0.appspot.com/o/qrcode.jpeg?alt=media&token=8458efce-7133-4dc1-be8c-08ea3fa7017f' alt='qrcode' width={"50%"}/>
  </div>

<div style={{display:"flex",justifyContent:"center"}}>
  <div class="form__group field" >
    <input  class="form__field" type="input"  placeholder={props.placeholder} name={s} value={props.content[s]} onChange={handleChange} required/>
    <label class="form__label" >{props.placeholder}</label>
</div>
</div>
<div>

          {loading?
          <div style={{display:"flex",justifyContent:"center"}}>
          <button class="fancy"type="button" disabled>
          <span class="top-key"></span>
          <span class="text"> <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...</span>
              <span class="bottom-key-1"></span>
              <span class="bottom-key-2"></span>
          </button> 
          </div>:
  <div style={{display:"flex",justifyContent:"center"}}>
  <button onClick={()=>{submitit()}} class="fancy">
              <span class="top-key"></span>
              <span class="text">Register</span>
              <span class="bottom-key-1"></span>
              <span class="bottom-key-2"></span>
            </button >
            </div>}
</div>
        
    </div>
    )
}
