import React from 'react'
import { Team } from '../Our Team/SinglePage'
import "./Team.css"
var arr=[
  {
    name:"'Dishika Jain'",
path:"./images/dishi.jpg"
},
{
  name:"Vishal Sharma",
path:"./images/vishal.jpg"
},
{
  name:"Kalash Jain",
path:"./images/1.png"
},
{
  name:"Mukta Gupta",
path:"./images/mukta.jpg"
},
{
  name:"Pratyush Gupta",
path:"./images/pratyushh.jpg"
},
]
export const Teams = () => {
  return (
    <div className='team-container'>
        <div className="team-body">
          {arr.map(
            a=>(
              
              <Team image={a.path} name={a.name}/>
            
          )
          )}
        {/* <Team image={"./images/dishi.jpg"} name={"Dishika Jain"}/>
        <Team image={"./images/vishal.jpg"} name={"Vishal Sharma"}/>
        <Team image={"./images/1.png"} name={"Kalash Jain"}/>
        <Team image={"./images/pratyushh.jpg"} name={"Pratyush Gupta"}/>
        
        <Team image={"./images/mukta.jpg"} name={"Mukta Gupta"}/> */}
        
        
        </div>
    </div>
  )
}
