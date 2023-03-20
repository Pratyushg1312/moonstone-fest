import e from 'cors';
import React from 'react'
import { Team } from '../Our Team/SinglePage'
import "./Team.css"
var arr=[
  {
    name:"Dishika Jain",
path:"./images/dishi.jpg",
icon1:"fa-brands fa-linkedin fa-2x",
icon2:"fa-brands fa-github fa-2x",
icon3:"fa-solid fa-envelope fa-2x",
link1:"",
link2:"",
link3:"",

},
{
  name:"Vishal Sharma",
path:"./images/vishal.jpg",
icon1:"fa-brands fa-linkedin fa-2x",
icon2:"fa-brands fa-github fa-2x",
icon3:"fa-solid fa-envelope fa-2x",
link1:"https://www.linkedin.com/in/sharma39vishal/",
link2:"https://github.com/sharma39vishal",
link3:"mailto:sharma39vishal@gmail.com",

},
{
  name:"Kalash Jain",
path:"./images/kalash.jpeg",
icon1:"fa-brands fa-linkedin fa-2x",
icon2:"fa-brands fa-github fa-2x",
icon3:"fa-solid fa-envelope fa-2x",
link1:"https://www.linkedin.com/in/kalash-jain-b50027203/",
link2:"https://github.com/KalashJain591",
link3:"mailto:kalashjain446@gmail.com",

},
{
  name:"Mukta Gupta",
path:"./images/mukta.jpg",
icon1:"fa-brands fa-linkedin fa-2x",
icon2:"fa-brands fa-github fa-2x",
icon3:"fa-solid fa-envelope fa-2x",
link1:"",
link2:"",
link3:"",

},
{
  name:"Pratyush Gupta",
path:"./images/pratyushh.jpg",
icon1:"fa-brands fa-linkedin fa-2x",
icon2:"fa-brands fa-github fa-2x",
icon3:"fa-solid fa-envelope fa-2x",
link1:"",
link2:"",
link3:"",

},
]
export const Teams = () => {
  return (
    <>
    <div className='team-container'>
        <div className="team-body">
          {arr.map(
            a=>(
              
              <Team image={a.path} desc={"Core Members"} name={a.name}  icon1={a.icon1} icon2={a.icon2} icon3={a.icon3} link1={a.link1} link2={a.link2} link3={a.link3} />
            
          )
          )}
       
        
        
        </div>
      </div>
   
    </>
  );
};
