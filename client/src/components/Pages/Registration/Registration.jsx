<<<<<<< HEAD
// import React, { useEffect, useState } from 'react'
// import DropdownRegistration from './DropdownRegistration';
// import Loginbtn from './Loginbtn';
// import './registration.css'
// import SingleContentForm from './SingleContentForm';
// import axios from 'axios'
// import Qrcode from './Qrcode';
// import DateofBirth from './DateofBirth';
// import GenderField from './GenderField';

// export default function Registration(){
//   const [content, setcontent] = useState({"auth_name":"","auth_email":"","name":"","phoneno":"","email":"","event":"","college":"","date_of_birth":"","gender":"","utr":""});
//   const [idx,setidx]=useState(0);
//   const [Login,setLogin]=useState(false);

//   const savegmaildata=(res)=>{
//     // console.log(res)
//     setLogin(res.data.status);
//     setcontent({
//       ...content,
//         ["auth_name"]: res.data.auth_name,
//         ["auth_email"]: res.data.auth_email
//     })
//   } 
// const [Fees, setFees] = useState(0);
//   useEffect(() => {
//     axios.get("/auth/isauthenticated")
//     .then((res)=>{savegmaildata(res)});

//   }, [])
//   const lst=7;
//   return (
//     <div className='registration-form'>
//        <img src="https://assets.codepen.io/1538474/astronaut.svg" className="astronaut" style={{marginTop:"80px"}} />
//        {Login?
//        <>
//           <h1  style={{fontSize:"50px",textAlign:"center",color:"#999", paddingBottom:"20px"}}>Registration Form</h1>
//           {idx===0?<SingleContentForm que={"What is Your Name?"} placeholder={"Enter Your Name*"} content={content} setcontent={setcontent} to_find={"name"} idx={idx} setidx={setidx} lst={lst} />:<></>}
//           {idx===1?<SingleContentForm que={"What is Your Phone No.?"} placeholder={"Enter Your Phone No.*"} content={content} setcontent={setcontent} to_find={"phoneno"} idx={idx} setidx={setidx} lst={lst} />:<></>}
//           {idx===2?<SingleContentForm que={"What is Your Email?"} placeholder={"Enter Your email*"} content={content} setcontent={setcontent} to_find={"email"} idx={idx} setidx={setidx} lst={lst} />:<></>}
//           {idx===3?<DropdownRegistration content={content} setcontent={setcontent} to_find={"event"} idx={idx} setidx={setidx} lst={lst} setFees={setFees}/>:<></>}
//           {idx===4?<SingleContentForm que={"Which College you are From?"} placeholder={"Enter Your College Name*"} content={content} setcontent={setcontent} to_find={"college"} idx={idx} setidx={setidx} lst={lst} />:<></>}
//           {idx===5?<DateofBirth content={content} setcontent={setcontent} to_find={"date_of_birth"} idx={idx} setidx={setidx} lst={lst} />:<></>}
//           {idx===6?<GenderField content={content} setcontent={setcontent} to_find={"gender"} idx={idx} setidx={setidx} lst={lst} />:<></>}
//           {idx===7?<Qrcode  content={content} setcontent={setcontent} placeholder={"Enter Your UTR No.*"} to_find={"utr"} idx={idx} setidx={setidx} lst={lst} Fees={Fees}/>:<></>}
//         </>
//          :<Loginbtn/>} 
//     </div>        
//   )
// }
import React from 'react'

export default function Registration() {
  return (
    <div>Registration</div>
=======
import React, { useEffect, useState } from 'react'
import DropdownRegistration from './DropdownRegistration';
import Loginbtn from './Loginbtn';
import './registration.css'
import SingleContentForm from './SingleContentForm';
import axios from 'axios'
import Qrcode from './Qrcode';
import DateofBirth from './DateofBirth';
import GenderField from './GenderField';
import Success from './Success';

export default function Registration(){
  const [content, setcontent] = useState({"auth_name":"","auth_email":"","name":"","phoneno":"","email":"","event":"","college":"","date_of_birth":"","gender":"","utr":""});
  const [idx,setidx]=useState(0);
  const [Login,setLogin]=useState(false);
  const [reg_id,setRegid]=useState(0);

  const savegmaildata=(res)=>{
    // console.log(res)
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
    .then((res)=>{savegmaildata(res)});
  }, [])
  const lst=7;
  return (
    <div className='registration-form'>
       <img src="https://assets.codepen.io/1538474/astronaut.svg" className="astronaut" style={{marginTop:"80px"}} />
       {Login?
       <>
          <h1  style={{fontSize:"50px",textAlign:"center",color:"#999", paddingBottom:"20px"}}>Registration Form</h1>
          {idx===0?<SingleContentForm que={"What is Your Name?"} placeholder={"Enter Your Name*"} content={content} setcontent={setcontent} to_find={"name"} idx={idx} setidx={setidx} lst={lst} />:<></>}
          {idx===1?<SingleContentForm que={"What is Your Phone No.?"} placeholder={"Enter Your Phone No.*"} content={content} setcontent={setcontent} to_find={"phoneno"} idx={idx} setidx={setidx} lst={lst} />:<></>}
          {idx===2?<SingleContentForm que={"What is Your Email?"} placeholder={"Enter Your email*"} content={content} setcontent={setcontent} to_find={"email"} idx={idx} setidx={setidx} lst={lst} />:<></>}
          {idx===3?<DropdownRegistration content={content} setcontent={setcontent} to_find={"event"} idx={idx} setidx={setidx} lst={lst} setFees={setFees}/>:<></>}
          {idx===4?<SingleContentForm que={"Which College you are From?"} placeholder={"Enter Your College Name*"} content={content} setcontent={setcontent} to_find={"college"} idx={idx} setidx={setidx} lst={lst} />:<></>}
          {idx===5?<DateofBirth content={content} setcontent={setcontent} to_find={"date_of_birth"} idx={idx} setidx={setidx} lst={lst} />:<></>}
          {idx===6?<GenderField content={content} setcontent={setcontent} to_find={"gender"} idx={idx} setidx={setidx} lst={lst} />:<></>}
          {idx===7?<Qrcode  content={content} setcontent={setcontent} placeholder={"Enter Your UTR No.*"} to_find={"utr"} idx={idx} setidx={setidx} lst={lst} Fees={Fees} setRegid={setRegid}/>:<></>}
          {idx===1008?<Success content={content} reg_id={reg_id}/>:<></>}
        </>
         :<Loginbtn/>} 
    </div>        
>>>>>>> 8ce519b4e1e447d9a21ff28e527a1d9f20db55c9
  )
}
