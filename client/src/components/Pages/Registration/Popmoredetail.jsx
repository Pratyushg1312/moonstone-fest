
import React ,{useContext,useEffect}from 'react'


import "./popmore.css"

import { useState } from 'react'

const Popmoredetail = (props) => {
var team=1;   
  return (props.trigger)?
   (
  
    <div key={props.popid}className="popmoredetail">
        <div className="innnerrr" style={{
          
          padding: '32px',
    width: '100%',
    maxWidth: '640px',
  
    borderradius: '5px',
    boxshadow: '3px 4px 20px 20px #00000029',
        }}>
           
                <h3>General Rules</h3>
                <p>
                  1. Registration fees is nonrefundable. <br />
2. Tournament will be played on knockout basis. <br />
3. Prizes, trophies, medals and certificate will be given to winners only. <br />
4. Certificate will be given to all participants. <br />
5. In case of any dispute the decision made by organising committee shall be final and binding 
to all participants. <br />
6. All teams and participants should report to the ground in proper kit at least 10 minutes prior 
to the given time, if fail to do so team will be disqualified. <br />
7. The decisions of referee’s umpire’s would be final and binding for all participants. <br />
8. Double Entry and playing in multiple teams in a single sport event is not allowed. <br />
9. Sledging is strictly prohibited. <br />
10. All participants have to carry their College/University ID card during the conduction of 
sports event. <br />
11. Teams and participants of other colleges and Universities are allowed in Medi-Caps 
University campus only on the day of their scheduled match. <br />
12. If any participant found involved in any in-disciplinary activity legal action will be taken 
against them. <br />
13. Other college/university teams have to be accompanied with their faculty coordinator or 
sports officer to participate in tournament. <br />
14. Faculty coordinator and sports officer must have their identity card during the event. 
15. Team participant list must be duly signed by competent authority person of 
college/University with official seal. <br />
16. Medi-Caps University Team participant list must be duly signed by Prof. I/C Sports. <br />
17. The Medi-Caps University and organising committee will not be responsible for any loss, 
illness, and accident/injury which may occur during the tournament. 
</p>
           
              <div className="chktnc">
              <input type="checkbox" name="chkb" id="chkb" onClick={()=>props.setTrigger(false)}/>
       
                    <p>Agree to terms and conditions</p>
                    
                  </div>
            
        </div>
    </div>

   
    
  ):"";
}

export default Popmoredetail