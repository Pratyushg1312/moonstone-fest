import React from "react";
import "./Coordinator.css"
export default function Coordinator(props) {
  return (
    <div>
      <div className=" profile-card my-2 " style={{ borderRadius: "5%" }}>
        <img src={props.image} alt="image2" class="profile-icon" />
        <div className="profile-name text-danger">{props.name} </div>
        <div className="profile-position mb-1">{props.designation}</div>
        <div className="  contact1">
          <div className="mx-2">
            <a href="https://wa.me/+919617450917" target="_blank">
              <img
                src="/images/whatsapp_image.png"
                style={{ width: "20px", height: "20px" }}
              />
            </a>
          </div>
          <div className="mx-2">
            <a href="tel:+919617450917" target="_blank">
              <img
                src="/images/contactimage.png"
                style={{ width: "20px", height: "20px" }}
              />
            </a>
          </div>
          <div className="mx-2">
            <a href="https://www.instagram.com/the.kalashjain/" target="_blank">
              <img
                src="/images/insta.png"
                style={{ width: "20px", height: "20px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
