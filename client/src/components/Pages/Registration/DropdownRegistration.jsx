import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TeamMembers from './TeamMembers';

export default function DropdownRegistration(props) {
  var s = props.to_find;
  const handleChange = e => {
    const { name, value } = e.target
    Events.filter(Events => Events.event === value).map((item) => {
      props.setFees(item.fees)
      setmaxsz(item.max_team_size);
      setminsz(item.min_team_size);
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


  // useEffect(() => {
  //   arr=[];
  // }, [minsz]);

  return (
    <div class="form__group field" style={{ display: "flex", justifyContent: "center" }}>
      <select class="form__field" placeholder={props.placeholder} name={s} value={props.content[s]} onChange={handleChange} required>
        {/* <label class="form__label" >{props.placeholder}</label> */}
        <option class="form__label" value="">Event*</option>
        {Events.filter(item => item.status === "open").map((item) => {
          return <option class="form__label" value={item.event} onClick={() => { console.log(item.fees) }}>{item.event}</option>
        })}

      </select>
      
    </div>
  )
}

