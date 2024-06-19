import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './Nav'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/sponsors' element={<Home />} />
          <Route path='/apply' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
