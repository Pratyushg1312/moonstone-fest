import React, { useEffect } from "react";
import gsap from "gsap";
import "./Events.css";
function Events() {
  // useEffect(() => {
  //   const divs = document.querySelectorAll(".day-events");
  //   gsap.set(divs[1], {x: 0, opacity: 1 });
  //   gsap
  //     .timeline({ repeat: -1, defaults: { duration: 6} })
  //     .add("one")
  //     .to(divs[0], { x: -200, y: 0, opacity: 1 }, "one")
  //     .to(divs[1], { x: -450, y: 0, opacity: 0}, "one")
  //     .to(divs[2], { x: 50, y: 0, opacity: 0}, "one")
  //     .add("two")
  //     .to(divs[0], { x: 50, y: 0, opacity: 0}, "two")
  //     .to(divs[1], { x: -200, y: 0, opacity: 1 }, "two")
  //     .to(divs[2], { x: -450, y: 0, opacity: 0}, "two")
  //     .add("three")
  //     .to(divs[0], { x: -450, y: 0, opacity: 0}, "three")
  //     .to(divs[1], { x: 50, y: 0, opacity: 0 }, "three")
  //     .to(divs[2], { x: -200, y: 0, opacity: 1 }, "three");
  // }, []);
  return (
    // <div className="eventSection">
    //   <div className="wrapper">
    //     <div className="outer">
    //       <div className="card" style={{"--delay": -1}}>
    //         <div className="content">
    //           <div className="img">
    //             <img
    //               src="https://pbs.twimg.com/media/CfKltknUMAMogm6.jpg"
    //               alt=""
    //             />
    //           </div>
    //           <div className="details">
    //             <span className="name">Sumit Kapoor</span>
    //             <p>Frontend Developer</p>
    //           </div>
    //         </div>
    //         <a href="#">Follow</a>
    //       </div>
    //       <div className="card" style={{"--delay": 0}}>
    //         <div className="content">
    //           <div className="img">
    //             <img
    //               src="https://pbs.twimg.com/media/CfKltknUMAMogm6.jpg"
    //               alt=""
    //             />
    //           </div>
    //           <div className="details">
    //             <span className="name">Sumit Kapoor</span>
    //             <p>Frontend Developer</p>
    //           </div>
    //         </div>
    //         <a href="#">Follow</a>
    //       </div>
    //       <div className="card" style={{"--delay": 1}}>
    //         <div className="content">
    //           <div className="img">
    //             <img
    //               src="https://pbs.twimg.com/media/CfKltknUMAMogm6.jpg"
    //               alt=""
    //             />
    //           </div>
    //           <div className="details">
    //             <span className="name">Sumit Kapoor</span>
    //             <p>Frontend Developer</p>
    //           </div>
    //         </div>
    //         <a href="#">Follow</a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="styles-content">
      <div className="day-events">
        <div className="styles-container">
          <div className="style-text">
            <h1 data-text="Day 1">Day 1</h1>
          </div>
        </div>
        <div className="styles-container">
          <div className="style-text">
            <h1>Day 2</h1>
          </div>
        </div>
        <div className="styles-container">
          <div className="style-text">
            <h1>Day 3</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
