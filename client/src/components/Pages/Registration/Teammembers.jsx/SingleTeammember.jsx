import React, { useState } from 'react'
import NewSingleField from '../NewSingleField'

export default function SingleTeammember(props) {
    const [member, setmember] = useState({"name":"","phoneno":"","email":"","college":"","enrollment_no":""})


    const addmember = () => {
      if (member.name.length === 0 || member.email.length === 0 || member.phoneno.length === 0 || member.college.length === 0 ) {
        alert("Please Fill the data");
      }
      else if (!(/^(0|91)?[6-9][0-9]{9}$/.test(member.phoneno))) {
        alert("Please Input Valid Phone No.");
      }
      else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(member.email))) {
        alert("Please Input Valid Email id");
      }
      else {
        alert("Thanks For Submiting Form");
        //push
          props.content.team.push(member);
        setmember({"name":"","phoneno":"","email":"","college":"","enrollment_no":""});
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
          <NewSingleField  placeholder={"College Name*"} content={member} setcontent={setmember} to_find={"college"} />
          {member.college=="Medi-Caps University"?<NewSingleField  placeholder={"ENROLLMENT NO.*"} content={member} setcontent={setmember} to_find={"enrollment_no"} />:<></>}
              <div style={{display:"flex",justifyContent:"end"}}>
              <button onClick={()=>{addmember()}} className='teamaddbtn'>
                + Add
            </button>
            </div>
    </div>
  )
}
