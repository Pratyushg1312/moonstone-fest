import React, { useState } from 'react'

export default function Signinbtn(props) {
  const [user,setUser]=useState();
    const googlesignin=()=>{
      window.open("http://localhost:5000/auth/google", 'example', 'width=300,height=300');
      props.setlogin(true);
      //  fetch("http://localhost:5000/auth/login/success").then((res)=>{ console.log(res)})
    }
  return (
    <div className='google-signin'>
        <button onClick={()=>{googlesignin()}} > <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/> Register with Google    </button>
    </div>
  )
}
