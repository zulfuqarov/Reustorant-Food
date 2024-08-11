import React from 'react'
import Homepage from './pages/Home'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Order from './pages/Order';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/About' element={<About />} />
        <Route path='/Order-online' element={<Order />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App