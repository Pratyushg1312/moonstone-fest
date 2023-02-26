import React from 'react'

export default function Signinbtn(props) {
    const googlesignin=()=>{
        props.setlogin(true)
    }
  return (
    <div className='google-signin'>
        <button onClick={()=>{googlesignin()}} >   <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/> Register with Google    </button>
    </div>
  )
}
