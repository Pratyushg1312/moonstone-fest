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
    <div className='new-contact'>
      <div className="contact container">
  <form>
    <div className="form">
      <div className="form-txt">
        <h1>Contact Us</h1>
        <span>
        Medi-Caps University
A.B. Road, Pigdamber, Rau Indore - 453331
        </span>
        {/* <h3>USA</h3>
        <p>
          195 E Parker Square Dr, Parker, CO 801
          <br />
          +43 982-314-0958
        </p> */}
        <h3>Details</h3>
        <p>
           0731-4259500, 2856294
          <br />
          e-mail: info@medicaps.ac.in
        </p>
      </div>
      <div className="form-details">
      <input type="text" placeholder='Name'  required=""   value={FormData.name} onChange={handleChange} name="name"  />
      <input className='my-2' type="text" placeholder='Email' name="email" required="" value={FormData.email} onChange={handleChange} />
          
        {/* <textarea
          name="message"
          id="message"
          cols={52}
          rows={7}
          placeholder="Message"
          required=""
          defaultValue={""}
        /> */}
        <textarea name="message"   placeholder="Message" required="" defaultValue={""}  cols={56} rows={7} value={FormData.message} onChange={handleChange} />
        <button  onClick={()=>{handleSubmit()}}>SEND MESSAGE</button>
      </div>
    </div>
  </form>
</div>

        {/* <section id="contact">
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
</section> */}

    </div>
  )
}
