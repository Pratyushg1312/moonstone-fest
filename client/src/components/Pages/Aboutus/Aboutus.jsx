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
          style={{ margin: "0px", justifyContent: "center", marginBottom: "30px"}}
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis velit labore placeat reprehenderit quidem omnis
              aliquam porro praesentium earum enim. Sapiente, quam. Doloribus
              sit est cupiditate, doloremque ut harum quisquam perferendis.
              Repellat, eum vero. Omnis accusamus sed odio, sequi facilis minus
              sint reiciendis nihil deserunt dolor exercitationem, quasi numquam
              et soluta modi vel impedit consectetur. Vitae at illo eveniet
              nihil modi consequatur laudantium? At perspiciatis unde nulla
              voluptate placeat corrupti non, asperiores facere ipsam distinctio
              error obcaecati nemo voluptates ipsum fugit omnis. Tempora
              recusandae .
            </h4>
          </div>
        </div>
        <div className="row my-5">
          <div className="d-flex flex-wrap align-items-center justify-content-around ">
            <div className="col-md-2 m-3 text-center">
              <img src="/images/ranked1st.png" />
            </div>
            <div className="col-md-2 m-3 text-center">
              <img src="/images/mhrd-nirf.png" />
            </div>
            <div className="col-md-2 m-3 text-center">
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
          <Commities2k23 event="Cultural" img={"/images/PreetiJain.jpeg"} name={"Prof. Preeti Jain"} designation={"Cultural Events"}/>
        </div>
        <div id="22">
          <Commities2k23 event="Sports" img={"/images/RuchirLashkari.jpeg"} name={"Prof. Ruchir Lashkari"} designation={"Sports Events"}/>
        </div>
        <div id="23">
          <Commities2k23 event="Techno Management" />
        </div>
        <div id="24">
          <Commities2k23 event="SponsorShip" img={"/images/MukeshPorwal.jpeg"} name={"Prof. Mukesh Porwal"} designation={"SponsorShip"}/>
        </div>
        <div id="25">
          <Commities2k23 event="Auction 2.0" img={"/images/GunjanBaheti.jpeg"}name={"Prof. Gunjan Baheti"} designation={"Auction"}/>
        </div>
      </div>
    </div>
  );
}
