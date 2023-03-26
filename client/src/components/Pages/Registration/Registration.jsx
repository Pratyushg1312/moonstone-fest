import React, { useEffect, useState } from 'react'
import DropdownRegistration from './DropdownRegistration';
import Loginbtn from './Loginbtn';
import './registration.css'
import axios from 'axios'
import Success from './Success';
import NewSingleField from './NewSingleField';
import Checkbox from './Checkbox';
import SingleTeammember from './Teammembers.jsx/SingleTeammember';
import Allteamdata from './Teammembers.jsx/Allteamdata';
import Genderdrtopdown from './Genderdropdownl';


export default function Registration() {
  const [content, setcontent] = useState({ "auth_name": "", "auth_email": "", "name": "", "phoneno": "", "email": "", "event": "", "college": "", "enrollment_no": "","team":[],"team_name":"","utr":"","gender":""});
  // const [idx,setidx]=useState(0);
  const [Login, setLogin] = useState(false);
  const [reg_id, setRegid] = useState(0);
  const [minsz, setminsz] = useState(0)
  const [maxsz, setmaxsz] = useState(0)
  const [maxbk, setmaxbk] = useState(1)
  const [qrlink, setqrlink] = useState(undefined)
  const [mediclg, setmediclg] = useState("");
  

  useEffect(() => {
    content.team=[];
  }, [minsz])
  
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
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    // console.log(res.data);
    alert(`Form Recived \nCheck Invoice on  ${content.email}` );
    // navigate("/");    
  }

  const errorget = (err) => {
    // console.log(err);
    // console.log(err.response);
    // console.log(err.response.config);
    // console.log(err.response.data);
    alert(err.response.data);
    window.location.reload();
  }

  const proceedtopay = () => {
    // console.log(content.team.length)
    // console.log(minsz)
    if (content.name.length === 0 || content.email.length === 0 || content.phoneno.length === 0 || content.college.length === 0 || content.event.length === 0||content.gender.length === 0) {
      alert("Please Fill the data");
    }
    else if (content.college!=="Medi-Caps University"&&content.enrollment_no.length!==12) {
      alert("Please Input Valid Aadhar No.");
    }
    else if (!(/^(0|91)?[6-9][0-9]{9}$/.test(content.phoneno))) {
      alert("Please Input Valid Phone No.");
    }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(content.email))) {
      alert("Please Input Valid Email id");
    }
    else if(qrlink!==undefined&&(content.utr.length<16||content.utr.length>22)){
      alert("Please Input Valid Transaction/UTR No.");
    }
    else if(content.college==="Medi-Caps University"&&!(content.enrollment_no.length===12||content.enrollment_no.length===13)){
      alert("Please Input Valid Enrollment No.");
    }
    else if(maxbk!==1&&content.team_name.length===0){
      alert("Please Fill Team Name");
    }
    else if(content.team.length+1<minsz){
      alert("Please Fill Team Member Details");
    }
    else {
      alert("Thanks For Submiting Form");
      setloading(true);
      axios.post("/api/registeruser", content)
        .then((res) => { aftersubmit(res) })
        .catch((err)=>{errorget(err)})
    }
  }
 
  return (
    <div className='registration-form'>
       <img src="https://assets.codepen.io/1538474/astronaut.svg" className="astronaut" style={{marginTop:"80px"}} />
       {Login?
       <>
          <h1 style={{fontSize:"50px",textAlign:"center",color:"#999", paddingBottom:"20px"}}>Registration Form</h1>
          <>
          {reg_id===0?<>
          <NewSingleField que={"What is Your Name?"} placeholder={"Full Name*"} content={content} setcontent={setcontent} to_find={"name"}/>
          <NewSingleField que={"What is Your Phone No.?"} placeholder={"Phone No.*"} content={content} setcontent={setcontent} to_find={"phoneno"}/>
          <NewSingleField que={"What is Your Email?"} placeholder={"Email*"} content={content} setcontent={setcontent} to_find={"email"}/>
          <Genderdrtopdown content={content} setcontent={setcontent}/>
          <Checkbox setmediclg={setmediclg} content={content} setcontent={setcontent}/>
          {mediclg==="true"?
          <NewSingleField que={"Which College you are From?"} placeholder={"ENROLLMENT NO.*"} content={content} setcontent={setcontent} to_find={"enrollment_no"} />
          :
          <> <NewSingleField que={"Which College you are From?"} placeholder={"College Name*"} content={content} setcontent={setcontent} to_find={"college"} />
           <NewSingleField que={"Which College you are From?"} placeholder={"Aadhar No.*"} content={content} setcontent={setcontent} to_find={"enrollment_no"} />
          </>}
          {content.team.length===0?<DropdownRegistration content={content} setcontent={setcontent} to_find={"event"} Fees={Fees} setFees={setFees} setminsz={setminsz} setmaxsz={setmaxsz} setmaxbk={setmaxbk} qrlink={qrlink} setqrlink={setqrlink} />:<></>}
          {maxbk!==1?<NewSingleField  placeholder={"Team Name*"} content={content} setcontent={setcontent} to_find={"team_name"} />:<></>}
          <Allteamdata content={content}/>
          {maxsz-1>0?<SingleTeammember content={content} setcontent={setcontent} minsz={minsz} maxsz={maxsz} setminsz={setminsz} setmaxsz={setmaxsz}/>:<></>}
          {qrlink!==undefined?
          <div style={{margin:"5px"}}>
            <h3 style={{textAlign:"center"}}>QR Code</h3>
              <img src="./Qrcode/Basketball.jpg" alt="QR Code" width={"300px"} />
              <NewSingleField placeholder={"Transaction/UTR No.*"} content={content} setcontent={setcontent} to_find={"utr"} />
            </div>
          :<></>}
          {loading?
          <button class="fancy"type="button" disabled>
          <span class="top-key"></span>
          <span class="text"> <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...</span>
              <span class="bottom-key-1"></span>
              <span class="bottom-key-2"></span>
          </button> 
          :
          <button onClick={()=>{proceedtopay()}} class="fancy" >
          <span class="top-key"></span>
          <span class="text">Submit</span>
          <span class="bottom-key-1"></span>
          <span class="bottom-key-2"></span>
          </button >
           }
          </>: <></>}
          {reg_id!==0?<Success content={content} reg_id={reg_id}/> :<></>}
          </>
        </>
      :<Loginbtn/>}

    </div>
  )
}