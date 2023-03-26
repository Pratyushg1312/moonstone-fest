import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"

export default function DropdownRegistration(props) {
  const { id } = useParams();
  // console.log(id);
  const [instruction, setinstruction] = useState("");
  var s = props.to_find;
  const handleChange = e => {
    const { name, value } = e.target
    if(value===""){
      props.setFees(0)
      props.setmaxsz(1);
      props.setminsz(1);
      props.setmaxbk(1);
      props.setqrlink(undefined);
      setinstruction("");
    }
    Events.filter(Events => Events.event === value).map((item) => {
      props.setFees(item.fees)
      props.setmaxsz(item.max_team_size);
      props.setmaxbk(item.max_team_size);
      props.setminsz(item.min_team_size);
      setinstruction(item.instructions);
      // console.log(item);
      props.setqrlink(item.qrlink);
    })
    props.setcontent({
      ...props.content,
      [name]: value
    })
  }
  const [minsz, setminsz] = useState(1);
  const [maxsz, setmaxsz] = useState(1);
  const [arr, setarr] = useState([]);
  const [Events, setEvents] = useState([]);
  useEffect(() => {
    axios.get("/api/allevent")
      .then((res) => { setEvents(res.data) });
  }, [])

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
    <div class="form__group field" style={{ display: "flex", justifyContent: "center" }}>
      <select class="form__field" placeholder={props.placeholder} name={s} value={props.content[s]} onChange={handleChange} required>
        <option class="form__label" value="">Event*</option>
        {Events.filter(item => item.status === "open"&&(item.event_category===id||id===undefined)).map((item) => {
          return <option class="form__label" value={item.event}>{item.event}</option>
        })}
        
      </select>
    <h3>{props.Fees}₹</h3>
    </div>
      {instruction.length!==0?<div className='instructiion'>
        <div class="alert alert-warning" role="alert" >
          <p style={{color:"red"}}>Instructions:</p>
          <pre>
          {instruction}
          </pre>
      </div>
      </div>:<></>}
    </div>
  )
}

