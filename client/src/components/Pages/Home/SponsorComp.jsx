import React from 'react'

export default function SponsorComp(props) {
  return (
    <div>
      <div className='text-center' style={{width:`${props.width}`}}><img src={props.img}   style={{width:`${props.imgwidth}`}}/><p>{props.Company}</p><p>{props.Title}</p></div>
    </div>
  )
}
