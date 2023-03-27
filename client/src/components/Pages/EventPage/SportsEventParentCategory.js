import React from 'react'
import SportsSingleEventCard from './SportsSingleEventCard'
import { NavLink } from 'react-router-dom'
import "./SportsEventParentCategory.css"
var arr1 = [
  {
    cricket: [
      {
        event_name: "CRICKET MALE",
        event_desc: "1300/-",

      },
      {
        event_name: "GULLY CRICKET FEMALE",
        event_desc: "600/-",

      }

    ]
  },

  {
    volleyball: [
      {
        event_name: "MALE",
        event_desc: "800/-"
      },
      {
        event_name: "FEMALE",
        event_desc: "600/-",
      },

    ]
  },
  {
    basketball: [
        {
            event_name: "MALE",
            event_desc: "800/-",
          },
          {
            event_name: "FEMALE",
            event_desc: "600/-",
          },

    ]
  },
  {
    minisoccer: [
        {
            event_name: "MALE",
            event_desc: "800/-",
          },
    ]
  },
  {
    chess: [
        {
            event_name: "INDIVIUAL ENTRY",
            event_desc: "200/-",
          },
    ]
  },
  {
    carrom: [
        {
            event_name: "INDIVIUAL ENTRY",
            event_desc: "200/-",
          },
    ]
  },
  {
    badminton: [
        {
            event_name: "MALE",
            event_desc: "200/-",
        },
        {
            event_name: "FEMALE",
            event_desc: "200/-",
        },
        {
            event_name: "DOUBLES (1 F + 1 M)",
            event_desc: "400/-",
        },
    ]
  },
  {
    tabletennis: [
        {
            event_name: "MALE",
            event_desc: "200/-",
        },
        {
            event_name: "FEMALE",
            event_desc: "200/-",
        },
        {
            event_name: "DOUBLES (1 F + 1 M)",
            event_desc: "400/-",
        },
    ]
  },
  {
    atheletics: [
        {
            event_name: "100 mtr M/F",
            event_desc: "100/-",
        },
        {
            event_name: "200 mtr M/F",
            event_desc: "150/-",
        },
        {
            event_name: "100*4 mtr RELAY RACE M/F",
            event_desc: "600/-",
        },
    ]
  },
  {
    gym: [
        {
            event_name: "DEADLIFT",
            event_desc: "200/-",
        },
        {
            event_name: "BENCHPRESS/SQUATS",
            event_desc: "200/-",
        },
        {
            event_name: "POWERLIFITING",
            event_desc: "200/-",
        },
    ]
  },
  
  
]

function SportsEventParentCategory() {
  return (
    <div className='parent-Event' >

      <div className="cutural-container" >

        <div className="head-des" id = "cricket" style={{"width":"90%"}}>
        
          <h1 className='D-heading'>Cricket</h1>

          <div className="day1">

            {
              arr1[0].cricket.map(e => (
                <SportsSingleEventCard name={e.event_name}
                  desc={e.event_desc} link={"/registration/sports"}
                />
              ))
            }
          </div>
        </div>


        <div className="head-des" id="volleyball">
          <h1 className='D-heading'>VOLLEYBALL</h1>
          <div className="day2" >
            {
              arr1[1].volleyball.map(e => (
                <SportsSingleEventCard name={e.event_name}
                  desc={e.event_desc} link={"/registration/sports"}
                />
              ))
            }
          </div>
        </div>
        <div className="head-des" id="basketball">
          <h1 className='D-heading'>BASKETBALL</h1>
          <div className="day3">
            {
              arr1[2].basketball.map(e => (
                <SportsSingleEventCard name={e.event_name}
                  desc={e.event_desc} link={"/registration/sports"}
                />
              ))
            }
          </div>
        </div>
          <div className="head-des" id = "minisoccer">
          
          <h1 className='D-heading'>Mini Soccer</h1>

          <div className="day1">

            {
              arr1[3].minisoccer.map(e => (
                <SportsSingleEventCard name={e.event_name}
                  desc={e.event_desc} link={"/registration/sports"}
                />
              ))
            }
          </div>
        </div>

        <div className="head-des" id = "chess">
          
          <h1 className='D-heading'>CHESS</h1>

          <div className="day1">

            {
              arr1[4].chess.map(e => (
                <SportsSingleEventCard name={e.event_name}
                  desc={e.event_desc} link={"/registration/sports"}
                />
              ))
            }
          </div>
        </div>

        <div className="head-des" id = "carrom">
          
          <h1 className='D-heading'>CARROM</h1>

          <div className="day1">

            {
              arr1[5].carrom.map(e => (
                <SportsSingleEventCard name={e.event_name}
                  desc={e.event_desc} link={"/registration/sports"}
                />
              ))
            }
          </div>
        </div>

        <div className="head-des" id = "badminton">
          
          <h1 className='D-heading'>BADMINTON</h1>

          <div className="day1">

            {
              arr1[6].badminton.map(e => (
                <SportsSingleEventCard name={e.event_name}
                  desc={e.event_desc} link={"/registration/sports"}
                />
              ))
            }
          </div>
        </div>

        <div className="head-des" id = "tabletennis">
          
          <h1 className='D-heading'>TABLE TENNIS</h1>

          <div className="day1">

            {
              arr1[7].tabletennis.map(e => (
                <SportsSingleEventCard name={e.event_name}
                  desc={e.event_desc} link={"/registration/sports"}
                />
              ))
            }
          </div>
        </div>

        <div className="head-des" id = "atheletics">
          
          <h1 className='D-heading'>ATHLETICS</h1>

          <div className="day1">

            {
              arr1[8].atheletics.map(e => (
                <SportsSingleEventCard name={e.event_name}
                  desc={e.event_desc} link={"/registration/sports"}
                />
              ))
            }
          </div>
        </div>

        <div className="head-des" id = "gym">
          
          <h1 className='D-heading'>GYM</h1>

          <div className="day1">

            {
              arr1[9].gym.map(e => (
                <SportsSingleEventCard name={e.event_name}
                  desc={e.event_desc} link={"/registration/sports"}
                />
              ))
            }
          </div>
        </div>

        </div>


      </div>

    
  )
}

export default SportsEventParentCategory
