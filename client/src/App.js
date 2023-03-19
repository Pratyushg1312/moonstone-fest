
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
import Glimpes from "./components/Pages/Home/Glimpes";
import Map from "./components/Pages/Home/Map";
import { Cursor } from "./Cursor";
import { useEffect } from "react";
function App() {

  

  return (
    <div >
      <Cursor/>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/> }/>
        <Route  path='/aboutus' element={<Aboutus/> }/>
        <Route  path='/contactus' element={<Contactus/> }/>
        <Route  exact path='/events' element={<Parallax/> }/>
        <Route  path='/registration' element={<Registration/> }/>
        <Route  path='/SingleDay' element={<SingleDay/> }/>
        <Route  path='/SingleEvent' element={<SingleEvent/> }/>
        <Route  path='/parallax' element={<Parallax/> }/>
        <Route  path='/Glimpes' element={<Glimpes/> }/>
        <Route  path='*' element={<Error/> }/>
        <Route  path='/glimpses' element={<Glimpses/> }/>
        <Route  path='/Map' element={<Map/> }/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;