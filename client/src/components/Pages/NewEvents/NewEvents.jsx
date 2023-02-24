import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Day1 from './Days/Day1'
import Day2 from './Days/Day2';
import Day3 from './Days/Day3';
import './newevents.css'
import Night1 from './Nights/Night1';
import Night2 from './Nights/Night2';
import Night3 from './Nights/NIght3';

export default function NewEvents() {
  let { id } = useParams();  
  
  return (
  <div>
    <div>
      {id==="day-1"||!id?<Day1/> :<></>}
      {id==="day-2"?<Day2/> :<></>}
      {id==="day-3"?<Day3/> :<></>}
    </div>

    <div>
      {id==="night-1"?<Night1/> :<></>}
      {id==="night-2"?<Night2/> :<></>}
      {id==="night-3"?<Night3/> :<></>}
    </div>
  </div>
  )
}
