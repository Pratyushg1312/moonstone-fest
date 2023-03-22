import React, { useEffect, useState } from 'react'
import DropdownRegistration from './DropdownRegistration';
import Loginbtn from './Loginbtn';
import './registration.css'
import axios from 'axios'
import Success from './Success';
import NewSingleField from './NewSingleField';
import Checkbox from './Checkbox';
import TeamMembers from './TeamMembers';

export default function Registration() {
  const [content, setcontent] = useState({ "auth_name": "", "auth_email": "", "name": "", "phoneno": "", "email": "", "event": "", "college": "", "enrollment_no": "" });
  // const [idx,setidx]=useState(0);
  const [Login, setLogin] = useState(false);
  const [reg_id, setRegid] = useState(0);

  const savegmaildata = (res) => {
    setLogin(res.data.status);
    setcontent({
      ...content,
      ["auth_name"]: res.data.auth_name,
      ["auth_email"]: res.data.auth_email
    })
  }
  const [Fees, setFees] = useState(0);
  useEffect(() => {
    axios.get("/auth/isauthenticated")
      .then((res) => { savegmaildata(res) });
  }, [])

  const [loading, setloading] = useState(false);
  const aftersubmit = (res) => {
    setRegid(res.data);
    console.log(res.data);
    alert("Form Recived");
    // navigate("/");    
  }
  const proceedtopay = () => {
    if (content.name.length === 0 || content.email.length === 0 || content.phoneno.length === 0 || content.college.length === 0 || content.event.length === 0) {
      alert("Please Fill the data");
    }
    else if (!(/^(0|91)?[6-9][0-9]{9}$/.test(content.phoneno))) {
      alert("Please Input Valid Phone No.");
    }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(content.email))) {
      alert("Please Input Valid Email id");
    }
    else {
      alert("Thanks For Submiting Form");
      setloading(true);
      axios.post("/api/registeruser", content)
        .then((res) => { aftersubmit(res) })
    }
  }
  const add = () => {
    console.log("hell");
    <TeamMembers />
  }

  return (
    <div className='registration-form'>
      <img src="https://assets.codepen.io/1538474/astronaut.svg" className="astronaut" style={{ marginTop: "80px" }} />
      {/* {Login? */}
      <>
        <h1 style={{ fontSize: "50px", textAlign: "center", color: "#999", paddingBottom: "20px" }}>Registration Form</h1>
        <>
          {reg_id === 0 ? <>
            <NewSingleField que={"What is Your Name?"} placeholder={"Full Name*"} content={content} setcontent={setcontent} to_find={"name"} />
            <NewSingleField que={"What is Your Phone No.?"} placeholder={"Phone No.*"} content={content} setcontent={setcontent} to_find={"phoneno"} />
            <NewSingleField que={"What is Your Email?"} placeholder={"Email*"} content={content} setcontent={setcontent} to_find={"email"} />
            {/* <Checkbox/> */}
            <NewSingleField que={"Which College you are From?"} placeholder={"College Name*"} content={content} setcontent={setcontent} to_find={"college"} />
            {1 || content.college == "Medi-Caps University" ? <NewSingleField que={"Which College you are From?"} placeholder={"ENROLLMENT NO.*"} content={content} setcontent={setcontent} to_find={"enrollment_no"} /> : <></>}
            <DropdownRegistration content={content} setcontent={setcontent} to_find={"event"} setFees={setFees} />
            <button onClick={add}>add</button>
            {/* <div className='d-flex'>
              <TeamMembers />
              <TeamMembers /><TeamMembers />  
            </div> */}



            <button onClick={() => { proceedtopay() }} class="fancy" >
              <span class="top-key"></span>
              <span class="text">Submit</span>
              <span class="bottom-key-1"></span>
              <span class="bottom-key-2"></span>
            </button >
          </> : <></>}
          {reg_id !== 0 ? <Success content={content} reg_id={reg_id} /> : <></>}
        </>
      </>
      {/*:<Loginbtn/>*/}

    </div>
  )
}
