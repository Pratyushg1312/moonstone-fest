
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
<<<<<<< HEAD
import Events from "./components/Pages/EventPage/Events";
import Cultural from "./components/Pages/EventPage/Cultural";
function App() {
=======
import Sponsors from "./components/Pages/Sponsors/Sponsors";
function App() {
  

>>>>>>> f17a4fe850fb11089a912b5cc37f3ba66d0407cb
  return (
    <div>
      <Cursor/>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/> }/>
        <Route  path='/aboutus' element={<Aboutus/> }/>
        <Route  path='/contactus' element={<Contactus/> }/>
<<<<<<< HEAD
        <Route  exact path='/events' element={<Events/> }/>
        <Route path = '/cultural' element={<Cultural/>}/>
        <Route  path='/registration' element={<Registration/> }/>
=======
        <Route  exact path='/events' element={<Parallax/> }/>
        <Route  path='/Registration/:id' element={<Registration/> }/>
        <Route  path='/Registration' element={<Registration/> }/>
>>>>>>> f17a4fe850fb11089a912b5cc37f3ba66d0407cb
        <Route  path='/SingleDay' element={<SingleDay/> }/>
        <Route  path='/SingleEvent' element={<SingleEvent/> }/>
        <Route  path='/glimpses' element={<Glimpses/> }/>
        <Route  path='/Map' element={<Map/> }/>
        <Route  path='/team' element={<Teams/> }/>
<<<<<<< HEAD
        <Route  path='*' element={<Error/> }/>
=======
        <Route  path='/Sponsors' element={<Sponsors/> }/>
>>>>>>> f17a4fe850fb11089a912b5cc37f3ba66d0407cb
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;