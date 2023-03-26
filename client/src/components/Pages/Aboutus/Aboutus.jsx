import React from "react";

import Abouthero from "./Abouthero.jsx";
import "./Aboutus.css";
import Persons from "./Persons.jsx";
import Commities2k23 from "./Commities2k23.jsx";
export default function Aboutus() {
  return (
    <div className="abc " style={{ width: "95%", marginLeft: "2.5%" }}>
      <br />
      <div id="1">
        <div className="aboutherosection container-fluid">
          <Abouthero />
        </div>
        <div
          className=" d-flex align-items-center row "
          style={{ margin: "0px", justifyContent: "center" }}
        >
          <div className="col-12 col-md-6 ">
            <img
              src="https://www.dialeducation.com/assets/images/gallery/gallery_1625127758.jpg"
              alt="university's image"
              style={{ height: "80%", width: "100%" }}
            />
          </div>
          <div className="col-12 col-md-6 ">
            <div className="text-center my-4">
              <h1
                style={{
                  color: "rgb(197 178 0)",
                  fontSize: "50px",
                  letterSpacing: "2px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Medi-Caps University
              </h1>
            </div>
            <h4 style={{ color: "#56ffc7", textAlign: "justify" }}>
            Medi-Caps has been a brand name in the arena of technical education. Since its inception in July 2000, Medi-Caps has consistently aimed at creating an ideal ambiance for budding technocrats and managers; and helping them to grow like true professionals. With its highly qualified faculty there seems an optimal blend of academic brilliance and industry exposure, supplemented by highly specialized visiting faculty and industry experts, senior professionals from various segments of different industries and business houses. It was time now to spread wings and move out for more exposure and widening of the periphery.
Hence the foundation of Medi-Caps University has been laid down. With a strong foundation of the Group since 15 years, Medi-Caps University wishes to maintain the same objective of imparting quality education and producing sound professionals for the benefit of the society at large.
            </h4>
          </div>
        </div>
        <div className="row m-4">
          <div className="d-flex flex-wrap align-items-center justify-content-center ">
            <div className="col-md-3 col-8 m-3 text-center">
              <img src="/images/ranked1st.png" />
            </div>
            <div className="col-md-3 col-8 m-3 text-center">
              <img src="/images/mhrd-nirf.png" />
            </div>
            <div className="col-md-3 col-8 m-3 text-center">
              <img src="/images/placements.png" />
            </div>
            {/* <div className='md-col col-3 m-3 text-center'><img src="/images/25year.png" style={{height:"50%", }} /></div> */}
          </div>
        </div>
      </div>

      <div id="committee">
        <div className="text-center my-4">
          <h1
            style={{
              color: "rgb(197 178 0)",
              fontSize: "50px",
              letterSpacing: "2px",
              fontWeight: "bold",
            }}
          >
            Commities 2K23
          </h1>
        </div>
        <div id="21">
          <Commities2k23 event="Cultural" />
        </div>
        <div id="22">
          <Commities2k23 event="Sports" />
        </div>
        <div id="23">
          <Commities2k23 event="Techno Management" />
        </div>
      </div>
    </div>
  );
}
