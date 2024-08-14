import React from 'react'
import Homepage from './pages/Home'
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Order from './pages/Order';
import Sign from './pages/Sign';
import Register from './pages/Register';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';

import Context from './context/Context';

const App = () => {
  const location = useLocation();

  const hideNavbarPaths = ["/Sign", "/Register"];

  return (
    <>
      <Context>
        {
          hideNavbarPaths.includes(location.pathname)
            ? null
            : <Navbar />
        }
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/About' element={<About />} />
          <Route path='/Order-online' element={<Order />} />
          <Route path='/Reservation' element={<Reservations />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes >
        {
          hideNavbarPaths.includes(location.pathname)
            ? null
            : <Footer />

        }
      </Context>
    </>
  )
}

export default App