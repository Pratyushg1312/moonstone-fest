import React, { useState } from 'react'
import Checkbox from '../Checkbox';
import Genderdrtopdown from '../Genderdropdownl';
import NewSingleField from '../NewSingleField'

export default function SingleTeammember(props) {
    const [member, setmember] = useState({"name":"","phoneno":"","email":"","enrollment_no":""})
    const addmember = () => {
      if (member.name.length === 0 || member.email.length === 0 || member.phoneno.length === 0 || member.gender.length === 0) {
        alert("Please Fill the data");
      }
      else if (!(/^(0|91)?[6-9][0-9]{9}$/.test(member.phoneno))) {
        alert("Please Input Valid Phone No.");
      }
      else if(props.content.college==="Medi-Caps University"&&!(member.enrollment_no.length===12||member.enrollment_no.length===13)){
        alert("Please Input Valid Enrollment No.");
      }
      else if (props.content.college!=="Medi-Caps University"&&member.enrollment_no.length!==12) {
        alert("Please Input Valid Aadhar No.");
      }    
      else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(member.email))) {
        alert("Please Input Valid Email id");
      }
      else {

        alert("Member Added");
        //push

        props.content.team.push(member);
        setmember({"name":"","phoneno":"","email":"","enrollment_no":"","gender":""});
        // console.log(props.maxsz-1);
        var x=props.maxsz-1;
        props.setmaxsz(x);
      }
    }
  
  
  return (
    <div className='team-member'>
      <h1>Team Member</h1>
          <NewSingleField  placeholder={"Full Name*"} content={member} setcontent={setmember} to_find={"name"}/>
          <NewSingleField  placeholder={"Phone No.*"} content={member} setcontent={setmember} to_find={"phoneno"}/>
          <NewSingleField  placeholder={"Email*"} content={member} setcontent={setmember} to_find={"email"}/>
          <Genderdrtopdown content={member} setcontent={setmember}/>
          {props.content.college==="Medi-Caps University"?
          <>
          <NewSingleField  placeholder={"ENROLLMENT NO.*"} content={member} setcontent={setmember} to_find={"enrollment_no"} />
          </>
          :
          <> 
           <NewSingleField  placeholder={"Aadhar No.*"} content={member} setcontent={setmember} to_find={"enrollment_no"} />
          </>}
              <div style={{display:"flex",justifyContent:"end"}}>
              <button onClick={()=>{addmember()}} className='teamaddbtn'>
                + Add
            </button>
            </div>
    </div>
  )
}
