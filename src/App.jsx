import React from 'react'
import Homepage from './pages/Home'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App