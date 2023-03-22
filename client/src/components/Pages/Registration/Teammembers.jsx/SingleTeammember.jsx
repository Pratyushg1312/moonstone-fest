import React, { useState } from 'react'
import NewSingleField from '../NewSingleField'

export default function SingleTeammember(props) {
    const [member, setmember] = useState({"auth_name":"","auth_email":"","name":"","phoneno":"","email":"","event":"","college":"","enrollment_no":""})
  return (
    <div>
        {/* <NewSingleField  placeholder={"Full Name*"} content={content} setmember={setmember} to_find={"name"}/>
          <NewSingleField  placeholder={"Phone No.*"} content={content} setmember={setmember} to_find={"phoneno"}/>
          <NewSingleField  placeholder={"Email*"} content={content} setmember={setmember} to_find={"email"}/>
          <NewSingleField  placeholder={"College Name*"} content={content} setmember={setmember} to_find={"college"} />
          {1||content.college=="Medi-Caps University"?<NewSingleField  placeholder={"ENROLLMENT NO.*"} content={content} setmember={setmember} to_find={"enrollment_no"} />:<></>} */}
    </div>
  )
}
