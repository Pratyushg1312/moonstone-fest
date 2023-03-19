import React, { useState } from 'react'
import "./newcontact.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function NewContactus() {
  const navigate=useNavigate();
  const [FormData,setFormData]=useState({
    name:"",
    message:"",
    email:"",
    phoneno:"",
  });
  const handleChange=(e)=>{
    const { name, value } = e.target
    setFormData({
           ...FormData,
           [name]: value
       })
  }
  
  const handleSubmit=(e)=>{   
  // console.log(FormData);
  axios.post(`/contactus/`, FormData)
  .then((res) => {
    // console.log(res);
    alert("Message Sent Successfully");
    navigate("/")
  })
  .catch((err) => {
    console.log(err);
  });
  
}
  return (
    <div>
        <section id="contact">
  <div className="contact-box">
    <div className="contact-links">
      <h2>CONTACT</h2>
      <div className="links">
        <div className="link">
          <a>
            <img
              src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="link">
          <a>
            <img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" />
          </a>
        </div>
        <div className="link">
          <a>
            <img
              src="https://i.postimg.cc/W4Znvrry/codepen.png"
              alt="codepen"
            />
          </a>
        </div>
        <div className="link">
          <a>
            <img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" />
          </a>
        </div>
      </div>
    </div>
    <div className="contact-form-wrapper">
             <div className="form-item">
          <input type="text"  required=""   value={FormData.name} onChange={handleChange} name="name"  />
          <label>Name:</label>
        </div>
        <div className="form-item">
          <input type="text" name="email" required="" value={FormData.email} onChange={handleChange} />
          <label>Email:</label>
        </div>
        <div className="form-item">
          <input type="tel" required="" value={FormData.phoneno} onChange={handleChange} name="phoneno"/>
          <label>Phone NO:</label>
        </div>
        <div className="form-item">
          <textarea className="" name="message" required="" defaultValue={""}   value={FormData.message} onChange={handleChange} />
          <label>Message:</label>
        </div>
        <button className="submit-btn"  onClick={()=>{handleSubmit()}}>Send</button>
    </div>
  </div>
</section>

    </div>
  )
}
