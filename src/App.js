import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TextAnalyzer from './components/TextAnalyzer';

function App() {
  const [mode,setMode] = useState("light")
  const toggleMode = () => {
      setMode(mode === "light" ? "dark" : "light")
  }

  return (
    <>
        <HashRouter>
          <Routes className={mode === "light" ? "bg-white text-dark " : "bg-secondary text-white "}>
            <Route exact path='/' element={<TextAnalyzer mode={mode} toggleMode={toggleMode}/>}></Route>
            <Route exact path='/about' element={<AboutUs mode={mode} toggleMode={toggleMode}/>}></Route>
            <Route exact path='/privacy' element={<PrivacyPolicy mode={mode} toggleMode={toggleMode}/>}></Route>
          </Routes>
        </HashRouter>
    </>
  );
}

export default App;
