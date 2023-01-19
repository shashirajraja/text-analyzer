import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import TextAnalyzer from './components/TextAnalyzer';

function App() {
  return (
    <>
        <HashRouter>
          <Routes>
            <Route exact path='/' element={<TextAnalyzer/>}></Route>
            <Route exact path='/about' element={<AboutUs/>}></Route>
          </Routes>
        </HashRouter>
    </>
  );
}

export default App;
