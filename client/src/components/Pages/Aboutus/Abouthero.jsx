import React from "react";
import "./abouthero.css";
export default function Abouthero() {
  return (
    <div className="herobody my-5">

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
        <div className="moonstone-content" id="about-moonstone">
          <h1 class="txtanime" style={{ textAlign: "center", color: 'rgb(197 178 0)' ,fontWeight:"bold"}}>About Moonstone </h1>
          <h4 style={{ color: "#56ffc7", textAlign: "justify" }}>
            The annual college festival, Moonstone, is
            eagerly awaited by the students. The festival celebrates the
            talent, creativity, and enthusiasm of the students. The students
            come together to exhibit their diverse skills and passions,
            creating an unforgettable experience for everyone involved. A
            variety of events have been planned for the students, including
            cultural performances, literary competitions, sports events, art
            exhibits, and more. All students are cordially invited to take part
            in this exhilarating weekend filled with entertainment, learning,
            and discovery. Let us celebrate the power of community and the
            spirit of creativity that the university epitomises.
          </h4>
        </div>
      </div>
    </div>

  );
}
