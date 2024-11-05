import React from 'react'
import Homepage from './pages/Home'
import { Routes, Route, useLocation, Router } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Order from './pages/Order';
import Sign from './pages/Sign';
import Register from './pages/Register';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';

import Context from './context/Context';
import Admin from './pages/Admin';

import { ToastContainer } from 'react-toastify';
import AddCategory from './components/Admin/AddCategory';
import AddSubCategory from './components/Admin/AddSubCategory';
import AddProduct from './components/Admin/AddProduct';

import axios from 'axios';

const App = () => {
  const location = useLocation();

  axios.defaults.withCredentials = true;

  const hideNavbarPaths = ["/Sign", "/Register", "/Admin", "/Admin/Add-Category", "/Admin/Add-SubCategory", "/Admin/Add-Product"];

  return (
    <>
      <Context>
        <ToastContainer />
        {
          hideNavbarPaths.includes(location.pathname)
            ? null
            : <Navbar />
        }
        <Router basename="/Reustorant-Food">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/About' element={<About />} />
            <Route path='/Order-online' element={<Order />} />
            <Route path='/Reservation' element={<Reservations />} />
            <Route path="/Sign" element={<Sign />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Admin" element={<Admin />} >
              <Route path="Add-Category" element={<AddCategory />} />
              <Route path="Add-SubCategory" element={<AddSubCategory />} />
              <Route path="Add-Product" element={<AddProduct />} />
            </Route>
          </Routes >
        </Router>
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