
import React from 'react'

export default function Singleperon(props) {
  return (
  <div className='box m-2'  style={{textAlign:"left"}}>
    <div class="box-image"><img  style={{width:"300px", height:"350px"}} src={props.img} alt="pr-sample24" /></div>
      <h3 className='mx-2 my-1' style={{fontFamily:'Raleway, sans-serif',color:"#0f5693"}}>{props.name}</h3>
      <p className='mx-2 my-1' style={{color:"black" ,fontStyle:"italic",fontWeight:"500"}}>{props.designation} </p>
  </div>
  )
}
