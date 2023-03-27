import e from 'cors';
import React from 'react'
import { Team } from '../Our Team/SinglePage'
import "./Team.css"
var arr=[
  {
    id:1,
    name:"Dr. Pankaj Malik",
path:"./images/Pankajj.jpeg",
icon1:"fa-brands fa-linkedin fa-2x d",
icon2:"fa-brands fa-github fa-2x d",
icon3:"fa-solid fa-envelope fa-2x d",
disc:"Software Cell Head",
link1:"",
link2:"",
link3:"",

},
  {
    id:2,
    name:"Sanket Gupta",
path:"./images/Sanket.jpg",
icon1:"fa-brands fa-linkedin fa-2x d",
icon2:"fa-brands fa-github fa-2x d",
icon3:"fa-solid fa-envelope fa-2x d",
disc:"Assistant Prof.",
link1:"",
link2:"",
link3:"",

},
  {
    id:3,
    name:"Dishika Jain",
path:"./images/dishi.jpg",
icon1:"fa-brands fa-linkedin fa-2x d",
icon2:"fa-brands fa-github fa-2x d",
icon3:"fa-solid fa-envelope fa-2x d",
disc:"Core Member",
link1:"",
link2:"",
link3:"",

},
{
  id:4,
  name:"Vishal Sharma",
path:"./images/vishal.jpg",
icon1:"fa-brands fa-linkedin fa-2x d",
icon2:"fa-brands fa-github fa-2x d",
icon3:"fa-solid fa-envelope fa-2x d",
disc:"Core Member",
link1:"https://www.linkedin.com/in/sharma39vishal/",
link2:"https://github.com/sharma39vishal",
link3:"mailto:sharma39vishal@gmail.com",

},
{
  id:5,
  name:"Kalash Jain",
path:"./images/kalash.jpeg",
icon1:"fa-brands fa-linkedin fa-2x d",
icon2:"fa-brands fa-github fa-2x d",
icon3:"fa-solid fa-envelope fa-2x d",
disc:"Core Member",
link1:"https://www.linkedin.com/in/kalash-jain-b50027203/",
link2:"https://github.com/KalashJain591",
link3:"mailto:kalashjain446@gmail.com",

},
{
  id:6,
  name:"Mukta Gupta",
path:"./images/mukta.jpg",
icon1:"fa-brands fa-linkedin fa-2x d",
icon2:"fa-brands fa-github fa-2x d",
icon3:"fa-solid fa-envelope fa-2x d",
disc:"Core Member",
link1:"https://www.linkedin.com/in/mukta-gupta-226361214/",
link2:"https://github.com/Mukta-24",
link3:"mailto:mukta.gupta08@gmail.com",

},
{
  id:7,
  name:"Pratyush Gupta",
path:"./images/pratyushh.jpg",
icon1:"fa-brands fa-linkedin fa-2x d",
icon2:"fa-brands fa-github fa-2x d",
icon3:"fa-solid fa-envelope fa-2x d",
disc:"Core Member",
link1:"https://www.linkedin.com/in/pratyush-gupta-0b63b1174/",
link2:"https://github.com/Pratyushg1312",
link3:"mailto:pratyushg095@gmail.com",

},
]
export const Teams = () => {
  return (
    <>
    <div className='team-container'>
        <div className="team-body">
          {arr.map(
            a=>(
                 
              a.id<=2?
        <Team image={a.path} desc={a.disc} name={a.name}  icon1={a.icon1} icon2={a.icon2} icon3={a.icon3} link1={a.link1} link2={a.link2} link3={a.link3} />:""
           
          )
          )}
       
        
        
        </div>
        <div className="team-body">
          {arr.map(
            a=>(
                 
              a.id>2?
        <Team image={a.path} desc={a.disc} name={a.name}  icon1={a.icon1} icon2={a.icon2} icon3={a.icon3} link1={a.link1} link2={a.link2} link3={a.link3} />:""
           
          )
          )}
       
        
        
        </div>
      </div>
   
    </>
  );
};
