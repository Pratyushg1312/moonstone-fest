import React from 'react'

export default function Allteamdata(props) {
  return (
    <div className='form__group field'>
        {props.content.team.map((item)=>{
          return <div class="form__field"> {item.name} {item.phoneno} {item.email} {item.college} </div>
        })}
    </div>
  )
}
