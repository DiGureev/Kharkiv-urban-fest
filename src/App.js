import './App.css';
import FirstScreen from './components/FirstScreen.js';
import Nav from './components/Nav.js';
import PopUp from './components/PopUp.js';
import { useState, createContext } from 'react';
import data from './data/data.json';
import About from './components/About.js';
import Speakers from './components/Speakers.js';
import Schedule from './components/Schedule.js';
import Workshop from './components/Workshop.js';
import Photos from './components/Photos.js';
import Sponsors from './components/Sponsors.js';
import Review from './components/Review.js';
import Register from './components/Register.js';
import Footer from './components/Footer.js';

export const AppContext = createContext()

function App() {
 const [popup, setPopup] = useState('none')
 const [registered, setReg] = useState(false)

  return (
    <AppContext.Provider value={{popup, setPopup, registered, setReg, data}}>
    <div className="App">
      <Nav/>
      <FirstScreen/>
      <PopUp/>
      <About/>
      <Speakers/>
      <Schedule/>
      <Workshop/>
      <Photos/>
      <Sponsors/>
      <Review/>
      <Register/>
      <Footer/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
