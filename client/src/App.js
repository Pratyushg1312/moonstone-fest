
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
import SingleEvent from "./components/Pages/SingleEvent/SingleEvent";
function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/> }/>
        <Route  path='/aboutus' element={<Aboutus/> }/>
        <Route  path='/contactus' element={<Contactus/> }/>
        <Route  path='/SingleDay' element={<SingleDay/> }/>
        <Route  path='/SingleDay/SingleEvent' element={<SingleEvent/> }/>
        <Route  path='/registration' element={<Registration/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;