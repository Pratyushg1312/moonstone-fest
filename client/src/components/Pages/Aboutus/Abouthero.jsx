import React from "react";
import "./abouthero.css";
export default function Abouthero() {
  return (
    <div className="herobody my-5">
      <div className="about-hero-section">
        <div className="about-container">
          <section id="solar-system">
            <div id="sun"></div>
            <article id="mercury-trajectory">
              <div id="mercury"></div>
            </article>
            <article id="venus-trajectory">
              <div id="venus"></div>
            </article>
            <article id="earth-trajectory">
              <div id="earth"></div>
            </article>
            <article id="mars-trajectory">
              <div id="mars"></div>
            </article>
            <article id="main-asteroid-belt-trajectory"></article>
            <article id="jupiter-trajectory"></article>
            <article id="saturn-trajectory"></article>
            <article id="uranus-trajectory"></article>
            <article id="neptune-trajectory"></article>
          </section>
          <div className="moonstone-content">
      <h1 style={{ textAlign: "center"  }}>About Moonstone </h1>
            <h5 style={{color:"rgb(242, 210, 168)"}}>
              Medicaps University is a distinguished educational institution
              that has been providing quality education for 22 years. The
              university is known for promoting research, encouraging innovative
              entrepreneurship, and offering global exposure to its students.
              The institution is devoted to providing students with a
              comprehensive education that prepares them for success in their
              future endeavours. The annual college festival, Moonstone, is
              eagerly awaited by the students. The festival celebrates the
              talent, creativity, and enthusiasm of the students. The students
              come together to exhibit their diverse skills and passions,
              creating an unforgettable experience for everyone involved. A
              variety of events have been planned for the students, including
              cultural performances, literary competitions, sports events, art
              exhibits, and more. All students are cordially invited to partake
              in this exhilarating weekend filled with entertainment, learning,
              and discovery. Let us celebrate the power of community and the
              spirit of creativity that the university epitomises. 
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
