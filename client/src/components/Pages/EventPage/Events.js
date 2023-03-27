import React from 'react'
import EventCategory from './EventCategory'
import './Events.css'
function Events() {
  return (
    <div className='Major-Events'>
      <div className="major-events-container">
        <EventCategory event_name = {"Cultural"} link={"/registration/cultural"} event_desc ={"Welcome to the extravaganza cultural fest of Medicaps. Immerse yourself in a world of electrifying beats and stunning performances that celebrate our rich cultural heritage. from traditional dances to contemporary music and much more. Join us in this journey of cultural exploration that promises to be a feast for your senses. Let's celebrate and make this college festival an unforgettable experience!"} event_link = {"/Cultural"}/>
        <EventCategory event_name = {"Sports"} link={"/registration/sports"} event_desc ={"Sports is the most enthusiastic way to show one’s  talent,spirit & sportsmanship. Moonstone 2023 presents before you THE CHAMPIONSHIP LEAGUE. Participate in the biggest sport tournament with adventurous games like cricket, soccer, chess, carrom, football along with athletics, gym events and many more. Also, get a chance to win exciting cash prices, fame and much more."} event_link = {"/Sports"}/>
        <EventCategory event_name = {"Techno Management"} link={"/registration/techno"} event_desc ={"“Hack Your Way to the Top” Calling all hackers. Programmers, and tech enthusiasts! Get ready to unleash your inner tech enthusiast because we are proud to present our highly anticipated technical events!. Our festival is the ultimate playground for all tech things. So plug in, power up, and let's dive into a world of innovation, creativity and cutting edge technology. Let's make some tech magic!"} event_link = {"/Technomanagement"}/>
        <EventCategory event_name = {"Night Events"} link={"/registration/night"} event_desc ={"Without a doubt, the most anticipated time of the event is the night for each and every partygoer out there. Moonstone is here to quench this thirst. Exhilarating performances, star nights, and DJ mixes will leave you with unforgettable memories. Get ready with your tribe to rock the floor with your show-stopping moves. Win prizes and party hard like this is the last night you get to live up to."} event_link = {"/NightEvents"}/>
      </div>
      {/* <div className='timetable'>
          <h1>TimeLines</h1>
        <div className='placelist'>
          <h3>Place 1</h3>
          <h3>Place 1</h3>
          <h3>Place 1</h3>
          <h3>Place 1</h3>
        </div>
      </div> */}
    </div>
  )
}

export default Events
