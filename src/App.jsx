import React from 'react'
import Homepage from './pages/Home'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App