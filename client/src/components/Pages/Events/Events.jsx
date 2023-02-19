import React, { useEffect } from 'react'
import gsap from "gsap";
import "./Events.css"
function Events() {
    useEffect(()=>{
        const divs = document.querySelectorAll(".day-events");
        gsap.set(divs[1], {x:0, opacity:1});
        gsap.timeline({repeat: -1, defaults:{duration:2}})
        .add("one")
        .to(divs[0], {y:200, x:100, opacity: 1}, "one")
        .to(divs[1], {y:-350, x:0, opacity: 0.05}, "one")
        .to(divs[2], {y:-50, x:0, opacity: 0.05}, "one")
        .add("two")
        .to(divs[0], {y:600, x:0, opacity: 0.05}, "two")
        .to(divs[1], {y:0, x:100, opacity: 1}, "two")
        .to(divs[2], {y:-600, x:0, opacity: 0.05}, "two")
        .add("three")
        .to(divs[0], {y:-100, x:0, opacity: 0.05}, "three")
        .to(divs[1], {y: 300, x:0, opacity: 0.05}, "three")
        .to(divs[2], {y:-300, x:100, opacity: 1}, "three")
        
    },[])
  return (
    <div className="styles-content">
        <div className="day-events">
            <div className="styles-container">
                <div className="image-event-section">
                    <img src="https://pbs.twimg.com/media/CfKltknUMAMogm6.jpg" alt="" srcset="" />
                </div>
                <div className="style-text">
                    <h1>Day 1</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cupiditate vitae nostrum ut esse modi sequi qui consequuntur autem. Iure maiores placeat, sapiente libero nihil deserunt adipisci ut tenetur quaerat laudantium assumenda, doloribus provident!</p>
                </div>
            </div>
        </div>
        <div className="day-events">
            <div className="styles-container">
                <div className="image-event-section">
                    <img src="https://pbs.twimg.com/media/CfKltknUMAMogm6.jpg" alt="" srcset="" />
                </div>
                <div className="style-text">
                    <h1>Day 2</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cupiditate vitae nostrum ut esse modi sequi qui consequuntur autem. Iure maiores placeat, sapiente libero nihil deserunt adipisci ut tenetur quaerat laudantium assumenda, doloribus provident!</p>
                </div>
            </div>
        </div>
        <div className="day-events">
            <div className="styles-container">
                <div className="image-event-section">
                    <img src="https://pbs.twimg.com/media/CfKltknUMAMogm6.jpg" alt="" srcset="" />
                </div>
                <div className="style-text">
                    <h1>Day 3</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cupiditate vitae nostrum ut esse modi sequi qui consequuntur autem. Iure maiores placeat, sapiente libero nihil deserunt adipisci ut tenetur quaerat laudantium assumenda, doloribus provident!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events
