import React from 'react'

export default function Singleperon(props) {
  return (
  <div className='box'>
    <div class="box-image"><img width={"450px"} src={props.img} alt="pr-sample24" /></div>
      <h3>{props.name}</h3>
      <p>{props.designation}</p>
  </div>
  )
}
