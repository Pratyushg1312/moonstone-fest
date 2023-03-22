
import React, { useEffect, useState } from 'react'
import DropdownRegistration from './DropdownRegistration';
import axios from 'axios'
import Success from './Success';
import NewSingleField from './NewSingleField';
import Checkbox from './Checkbox';
export default function TeamMembers(props) {
    const [content, setcontent] = useState({"name":"","phoneno":"","email":"","event":"","college":"","enrollment_no":""});
  return (
    <div>
      <h5>Team Member 1</h5>
        <NewSingleField que={"What is Your Name?"} placeholder={"Full Name*"} content={content} setcontent={setcontent} to_find={"name"}/>
          <NewSingleField que={"What is Your Phone No.?"} placeholder={"Phone No.*"} content={content} setcontent={setcontent} to_find={"phoneno"}/>
          <NewSingleField que={"What is Your Email?"} placeholder={"Email*"} content={content} setcontent={setcontent} to_find={"email"}/>
   
    </div>
  )
}
