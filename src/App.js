import './App.css';
import FirstScreen from './components/FirstScreen.js';
import Nav from './components/Nav.js';
import PopUp from './components/PopUp.js';
import { useState, createContext } from 'react';
import data from './data/data.json';
import About from './components/About.js';

export const AppContext = createContext()

function App() {
 const [popup, setPopup] = useState('none')
 const [registered, setReg] = useState(false)

 console.log(data)

  return (
    <AppContext.Provider value={{popup, setPopup, registered, setReg, data}}>
    <div className="App">
      <Nav/>
      <FirstScreen/>
      <PopUp/>
      <About/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
