import React from 'react'
import TechnoSingleEventCard from './TechnoSingleEventCard'
// import { NavSLink } from 'react-router-dom'
import "./SportsEventParentCategory.css"

var arr1 = [
  {
    cricket: [
      {
        event_name: "HUNARBAZZ",
        event_desc: "Q Block Room no. 001",
        event_price: "50",
        event_SLink: "/SingleEvent/HUNARBAAZ"

      },
      {
        event_name: "RISKY HANDLING",
        event_desc: "In front of M Block",
        event_price: "50",
        event_SLink: "/SingleEvent/RISKY HANDLING"

      },
      {
        event_name: "RINGOZZ",
        event_desc: "Management Block",
        event_price: "30",
        event_SLink: "/SingleEvent/RINGOZZ"

      },

    ]
  },

  {
    volleyball: [
      {
        event_name: "BLAST THE BALLOON",
        event_desc: "In front of M Block",
        event_price: "50",
        event_SLink: "/SingleEvent/BLAST THE BALLOON"

      },
      {
        event_name: "TREASURE HUNT",
        event_desc: "MediCaps University Campus",
        event_price: "250",
        event_SLink: "/SingleEvent/TREASURE HUNT"

      },


    ]
  },
  {
    basketball: [
      {
        event_name: "T-SHIRT WITH FACE PAINTING",
        event_desc: "Q Block",
        event_price: "150",
        event_SLink: "/SingleEvent/T-SHIRT WITH FACE PAINTING"
      },
      {
        event_name: "BOLLYWOOD KE DRAMEBAAZ",
        event_desc: "Q Block",
        event_price: "100",
        event_SLink: "/SingleEvent/BOLLYWOOD KE DRAMEBAAZ"
      },


    ]
  },
  {
    minisoccer: [
      {
        event_name: "FEEL IT REEL IT",
        event_desc: "Q Block",
        event_price: "0",
        event_SLink: "/SingleEvent/FEEL IT REEL IT"
      },
      {
        event_name: "BOLLYGEEKS",
        event_desc: "Q Block",
        event_price: "50",
        event_SLink: "/SingleEvent/BOLLYGEEKS"

      },
      {
        event_name: "SNAKES & LADDER",
        event_desc: "Q Block",
        event_price: "30",
        event_SLink: "/SingleEvent/SNAKES & LADDER"

      },
    ]
  },
  {
    chess: [
      {
        event_name: "FUNTAKSHIRI",
        event_desc: "Q Block",
        event_price: "100",
        event_SLink: "/SingleEvent/FUNTAKSHIRI"
      },
      {
        event_name: "BEST FUTURE CEO",
        event_desc: "Q Block",
        event_price: "250",
        event_SLink: "/SingleEvent/BEST FUTURE CEO"

      },
      {
        event_name: "STANDUP COMEDY",
        event_desc: "Q Block",
        event_price: "50",
        event_SLink: "/SingleEvent/STANDUP COMEDY"
      },

    ]
  },
  {
    carrom: [


      {
        event_name: "STOCK MAESTRO",
        event_desc: "Q Block",
        event_price: "200(2 Members)",
        event_SLink: "/SingleEvent/STOCK MAESTRO"

      },
      {
        event_name: "JO DIKHTA HE WO BIKTA HE",
        event_desc: "Q Block",
        event_price: "200/team",
        event_SLink: "/SingleEvent/JO DIKHTA HE VO BIKTA HE"

      },
    ]
  },
  {
    badminton: [
      {
        event_name: "FLIRT WITH KNIVES",
        event_desc: "Q Block",
        event_price: "100",
        event_SLink: "/SingleEvent/FLIRT WITH KNIVES"
      },
      {
        event_name: "THE SQUID GAMES",
        event_desc: "Opposite the R Block",
        event_price: "150",
        event_SLink: "/SingleEvent/The SQUID GAMES"
      },

    ]
  },
  {
    tabletennis: [
      {
        event_name: "RANGOLI MAKING",
        event_desc: "Q Block",
        event_price: "200",
        event_SLink: "/SingleEvent/RANGOLI MAKING"

      },
      {
        event_name: "1Min GOLGAPPA Challenge",
        event_desc: "Q Block",
        event_price: "50",
        event_SLink: "/SingleEvent/1 min GOLGAPPA Challenge"

      },

    ]
  },
  {
    atheletics: [
      {
        event_name: "CAMPUS BEAUTIFICATION",
        event_desc: "Nearby Stalls",
        event_price: "0",
        event_SLink: "/SingleEvent/CAMPUS BEAUTIFICATION"

      },
      {
        event_name: "BOLLYWOOD BUSINESS QUIZ",
        event_desc: "Q Block",
        event_price: "200/team",
        event_SLink: "/SingleEvent/BOLLYWOOD BUSINESS QUIZ"
      },
    ]
  },
  {
    campus: [
      {
        event_name: "Valorant Edition",
        event_desc: "Q Block",
        event_price: "100/team",
        event_SLink: ""

      },
      {
        event_name: "Shatranj Edition",
        event_desc: "Q Block",
        event_price: "50/team",
        event_SLink: ""
      },
      {
        event_name: "BGMI Edition",
        event_desc: "Q Block",
        event_price: "600/team",
        event_SLink: ""
      },
    ]
  },
  {
    tech: [
      {
        event_name: "GOOGLE IT",
        event_desc: "Update you soon",
        event_price: "70",
        event_SLink: ""

      },
      {
        event_name: "Web Clone Competition",
        event_desc: "Update you soon",
        event_price: "50/team",
        event_SLink: ""
      },
      {
        event_name: "Smash Karts",
        event_desc: "Update you soon",
        event_price: "50/team",
        event_SLink: ""
      },
    ]
  },
  {
    tech11: [
      {
        event_name: "Who's There",
        event_desc: "Update you soon",
        event_price: "60",
        event_SLink: ""

      },
      {
        event_name: "Prop Knight",
        event_desc: "Update you soon",
        event_price: "0",
        event_SLink: ""
      },
      {
        event_name: "Anime-zing Quiz",
        event_desc: "Update you soon",
        event_price: "100",
        event_SLink: ""
      },
    ]
  },
  {
    tech12: [
      {
        event_name: "FIFA Tournament",
        event_desc: "Update you soon",
        event_price: "100",
        event_SLink: ""

      },
      {
        event_name: "Quizziteria",
        event_desc: "Update you soon",
        event_price: "200/team",
        event_SLink: ""
      },
      {
        event_name: "Robo Soccer",
        event_desc: "Update you soon",
        event_price: "500/team",
        event_SLink: ""
      },
    ]
  },

  {
    tech13: [
      {
        event_name: "Fastest Line Follower",
        event_desc: "Update you soon",
        event_price: "500/team",
        event_SLink: ""

      },
      {
        event_name: "Real Life Battle Ground",
        event_desc: "Update you soon",
        event_price: "100/team",
        event_SLink: ""
      },

    ]
  },

  {
    nupur: [
      {
        event_name: "Hair Style Competition",
        event_desc: "Block N",
        event_price: "50",
        event_SLink: ""

      },
      {
        event_name: "Mehandi Competition",
        event_desc: "Block N",
        event_price: "50",
        event_SLink: ""
      },

    ]
  },


]


export const TechnoEventParentCategory = () => {
  return (
    <div className='parent-Event' >

      <div className="cutural-container" >

        <div className="head-des" id="cricket" style={{ "width": "90%" }}>

          {/* <h1 className='D-heading'>Cricket</h1> */}

          <div className="day1">

            {
              arr1[0].cricket.map(e => (
                <TechnoSingleEventCard name={e.event_name}
                  desc={e.event_desc}
                  price={e.event_price}
                  SLink={e.event_SLink}
                />
              ))
            }
          </div>
        </div>


        <div className="head-des" id="volleyball">
          {/* <h1 className='D-heading'>VOLLEYBALL</h1> */}
          <div className="day2" >
            {
              arr1[1].volleyball.map(e => (
                <TechnoSingleEventCard name={e.event_name}
                  desc={e.event_desc}
                  price={e.event_price}
                  SLink={e.event_SLink}
                />
              ))
            }
          </div>
        </div>
        <div className="head-des" id="basketball">
          {/* <h1 className='D-heading'>BASKETBALL</h1> */}
          <div className="day3">
            {
              arr1[2].basketball.map(e => (
                <TechnoSingleEventCard name={e.event_name}
                  desc={e.event_desc}
                  price={e.event_price}
                  SLink={e.event_SLink}
                />
              ))
            }
          </div>
        </div>
        <div className="head-des" id="minisoccer">

          {/* <h1 className='D-heading'>Mini Soccer</h1> */}

          <div className="day1">

            {
              arr1[3].minisoccer.map(e => (
                <TechnoSingleEventCard name={e.event_name}
                  desc={e.event_desc}
                  price={e.event_price}
                  SLink={e.event_SLink}
                />
              ))
            }
          </div>
        </div>

        <div className="head-des" id="chess">

          {/* <h1 className='D-heading'>CHESS</h1> */}

          <div className="day1">

            {
              arr1[4].chess.map(e => (
                <TechnoSingleEventCard name={e.event_name}
                  desc={e.event_desc}
                  price={e.event_price}
                  SLink={e.event_SLink}
                />
              ))
            }
          </div>
        </div>

        <div className="head-des" id="carrom">

          {/* <h1 className='D-heading'>CARROM</h1> */}

          <div className="day1">

            {
              arr1[5].carrom.map(e => (
                <TechnoSingleEventCard name={e.event_name}
                  desc={e.event_desc}
                  price={e.event_price}
                  SLink={e.event_SLink}
                />
              ))
            }
          </div>
        </div>

        <div className="head-des" id="badminton">

          {/* <h1 className='D-heading'>BADMINTON</h1> */}

          <div className="day1">

            {
              arr1[6].badminton.map(e => (
                <TechnoSingleEventCard name={e.event_name}
                  desc={e.event_desc}
                  price={e.event_price}
                  SLink={e.event_SLink}
                />
              ))
            }
          </div>
        </div>

        <div className="head-des" id="tabletennis">

          {/* <h1 className='D-heading'>TABLE TENNIS</h1> */}

          <div className="day1">

            {
              arr1[7].tabletennis.map(e => (
                <TechnoSingleEventCard name={e.event_name}
                  desc={e.event_desc}
                  price={e.event_price}
                  SLink={e.event_SLink}
                />
              ))
            }
          </div>
        </div>

        <div className="head-des" id="atheletics">

          {/* <h1 className='D-heading'>ATHLETICS</h1> */}

          <div className="day1">

            {
              arr1[8].atheletics.map(e => (
                <TechnoSingleEventCard name={e.event_name}
                  desc={e.event_desc}
                  price={e.event_price}
                  SLink={e.event_SLink}
                />
              ))
            }
          </div>
        </div>





        <div className="head-des" id="cricket" style={{ "width": "90%" }}>



          <div className="day1">

            {
              arr1[10].tech.map(e => (
                <TechnoSingleEventCard name={e.event_name}
                  desc={e.event_desc}
                  price={e.event_price}
                  SLink={e.event_SLink}
                />
              ))
            }
          </div>
        </div>

        <div className="head-des" id="cricket" style={{ "width": "90%" }}>

          <div className="day1">

            {
              arr1[11].tech11.map(e => (
                <TechnoSingleEventCard name={e.event_name}
                  desc={e.event_desc}
                  price={e.event_price}
                  SLink={e.event_SLink}
                />
              ))
            }
          </div>
        </div>

        <div className="head-des" id="cricket" style={{ "width": "90%" }}>



          <div className="day1">

            {
              arr1[12].tech12.map(e => (
                <TechnoSingleEventCard name={e.event_name}
                  desc={e.event_desc}
                  price={e.event_price}
                  SLink={e.event_SLink}
                />
              ))
            }
          </div>
        </div>

        <div className="head-des" id="cricket" style={{ "width": "90%" }}>



          <div className="day1">

            {
              arr1[13].tech13.map(e => (
                <TechnoSingleEventCard name={e.event_name}
                  desc={e.event_desc}
                  price={e.event_price}
                  SLink={e.event_SLink}
                />
              ))
            }
          </div>
        </div>

        <div className="head-des" id="  Campus">

          <h1 className='D-heading'>CAMPUS Kombat</h1>

          <div className="day1">

            {
              arr1[9].campus.map(e => (
                <TechnoSingleEventCard name={e.event_name}
                  desc={e.event_desc}
                  price={e.event_price}
                  SLink={e.event_SLink}
                />
              ))
            }
          </div>
        </div>

        <div className="head-des" id="  Campus">

          <h1 className='D-heading'>Nupur Kala</h1>

          <div className="day1">

            {
              arr1[14].nupur.map(e => (
                <TechnoSingleEventCard name={e.event_name}
                  desc={e.event_desc}
                  price={e.event_price}
                  SLink={e.event_SLink}
                />
              ))
            }
          </div>
        </div>

      </div>


    </div>

  )
}
