
import { Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./components/Pages/Home/Home.jsx"
import Aboutus from "./components/Pages/Aboutus/Aboutus.jsx"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Contactus from './components/Pages/Contactus/Contactus';
import SingleEvent from './components/Pages/SingleEvent/SingleEvent';
import Registration from './components/Pages/Registration/Registration';
import SingleDay from './components/Pages/SingleEvent/SingleDay';
import Error from "./components/Pages/Error/Error";
import Glimpses from "./components/Pages/Glimpses/Glimpses"
import Map from "./components/Pages/Home/Map";
import { Cursor } from "./Cursor";
import { Teams } from "./components/Pages/Our Team/Team";
import Sponsors from "./components/Pages/Sponsors/Sponsors";
import Auction from "./components/Pages/Auction/Auction";
import Events from "./components/Pages/EventPage/Events";
import Cultural from "./components/Pages/EventPage/Cultural";
import { Technomanagement } from "./components/Pages/EventPage/Technomanagement";
import { NightEvents } from "./components/Pages/EventPage/NightEvents";
import { Sports } from "./components/Pages/EventPage/Sports";
import { useEffect } from "react";
import axios from "axios";
import { Titlesponser } from "./components/Header/Titlesponser";

function App() {
 
  useEffect(() => {
    var x=localStorage.getItem("visitor");
    if(x===null){
      localStorage.setItem("visitor","Visited");
      axios.get("/cnt/userinc").
      then((res)=>{localStorage.setItem("visitor","Visited")});
    }
  }, [])
  

  return (
    <div style={{
      top:"-23px"
    }}>
      <Cursor/>
      <Header/>
      <Titlesponser />
      <Routes>
        <Route exact path='/' element={<Home/> }/>
        <Route  path='/aboutus' element={<Aboutus/> }/>
        <Route  path='/contactus' element={<Contactus/> }/>
        <Route  exact path='/events' element={<Events/> }/>
        <Route  path='/Registration/:id' element={<Registration/> }/>
        <Route  path='/Registration' element={<Registration/> }/>
        <Route  path='/SingleDay' element={<SingleDay/> }/>
        <Route  path='/SingleEvent' element={<SingleEvent/> }/>
        <Route  path='/glimpses' element={<Glimpses/> }/>
        <Route  path='/cultural' element={<Cultural/> }/>
        <Route  path='/Sports' element={<Sports/> }/>
        <Route  path='/Technomanagement' element={<Technomanagement/> }/>
        <Route  path='/NightEvents' element={<NightEvents/> }/>
        <Route  path='/Map' element={<Map/> }/>
        <Route  path='/team' element={<Teams/> }/>
        <Route  path='*' element={<Error/> }/>
        <Route  path='/Sponsors' element={<Sponsors/> }/>
        <Route  path='/Auction' element={<Auction/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;