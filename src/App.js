import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import TextAnalyzer from './components/TextAnalyzer';

function App() {
  return (
    <>
        <HashRouter>
          <Routes>
            <Route path={['/',""]} element={<TextAnalyzer/>}></Route>
            <Route path='/about' element={<AboutUs/>}></Route>
          </Routes>
        </HashRouter>
    </>
  );
}

export default App;
