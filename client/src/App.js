
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
import Parallax from "./components/Pages/Parallax/Parallax";
import Map from "./components/Pages/Home/Map";
import { Cursor } from "./Cursor";
import { Teams } from "./components/Pages/Our Team/Team";
import Events from "./components/Pages/EventPage/Events";
import Cultural from "./components/Pages/EventPage/Cultural";
function App() {
  return (
    <div>
      <Cursor/>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/> }/>
        <Route  path='/aboutus' element={<Aboutus/> }/>
        <Route  path='/contactus' element={<Contactus/> }/>
        <Route  exact path='/events' element={<Events/> }/>
        <Route path = '/cultural' element={<Cultural/>}/>
        <Route  path='/registration' element={<Registration/> }/>
        <Route  path='/SingleDay' element={<SingleDay/> }/>
        <Route  path='/SingleEvent' element={<SingleEvent/> }/>
        <Route  path='/glimpses' element={<Glimpses/> }/>
        <Route  path='/Map' element={<Map/> }/>
        <Route  path='/team' element={<Teams/> }/>
        <Route  path='*' element={<Error/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;