import React, { useState } from 'react'
import axios from "axios"

export default function Login() {
    const [Admin, setAdmin] = useState({
        "admin_id":"Superadmin",
        "password":"12345"
    })

    const adminlogin= async()=>{
        await axios.post("/adminlogin",Admin)
        .then((res)=>{console.log(res)})
    }

  return (
    <div className='container my-4'>
        <div class="mb-3">
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="id"/>
  <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="password"/>
  <button className='btn btn-primary' onClick={()=>{adminlogin()}}>Login</button>
</div>
    </div>
  )
}
