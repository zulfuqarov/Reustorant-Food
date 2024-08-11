import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {

    const [showBar, setshowBar] = useState(false)
    const ShowBarsMenu = () => {
        setshowBar(!showBar)
    }

    return (
        <div className="relative w-full h-[51px] bg-white z-10">
            <div className="fixed w-full h-[51px] top-0 left-0 bg-white py-[40px] shadow-md flex items-center justify-between px-4">
                <div className="flex items-center space-x-2">
                    <div className="w-[51px] h-[51px] bg-[#ff8900] rounded-[25.5px] flex items-center justify-center">
                        <span className="text-white text-[25px] font-semibold">D</span>
                    </div>
                    <p className="ml-2 text-[#311f09] font-semibold text-lg">
                        <span className="text-[#311f09]">Delizi</span>
                        <span className="text-[#ff8900]">oso</span>
                    </p>
                </div>

                <div className="hidden md:flex space-x-8">
                    <Link to="/" className="text-[#311f09] font-normal text-sm">Home</Link>
                    <Link to="/About" className="text-[#311f09] font-normal text-sm">About us</Link>
                    <Link to="/Order-online" className="text-[#311f09] font-normal text-sm">Order online</Link>
                    <Link to="/Reservation" className="text-[#311f09] font-normal text-sm">Reservation</Link>
                    <Link to="/Contact" className="text-[#311f09] font-normal text-sm">Contact us</Link>
                </div>

                <div>
                    <button>
                        <i className="fa-solid fa-cart-shopping fa-fade text-[#ff8900] text-[20px]"></i>
                    </button>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={ShowBarsMenu} className="text-[#311f09]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                <div className="hidden md:flex">
                    <Link to='/Sign' className="bg-[#3fa62e] text-white font-semibold text-sm rounded-full px-4 py-2">
                        Log in
                    </Link>
                </div>
            </div>

            <div className={`h-0 min-[768px]:h-0 min-[768px]:overflow-hidden overflow-hidden transition-all fixed top-[91px] left-0 w-full bg-white shadow-md ${showBar ? 'h-[300px] overflow-visible ' : ''}`}>
                <div className={`flex flex-col overflow-hidden transition-all h-0 items-center py-0 ${showBar ? 'overflow-hidden h-[100%] py-4' : ''}`}>
                    <Link to="/" className="text-[#311f09] font-normal text-sm py-2">Home</Link>
                    <Link to="/About" className="text-[#311f09] font-normal text-sm py-2">About us</Link>
                    <Link to="/Order-online" className="text-[#311f09] font-normal text-sm py-2">Order online</Link>
                    <Link to="/Reservation" className="text-[#311f09] font-normal text-sm py-2">Reservation</Link>
                    <Link to="/Contact" className="text-[#311f09] font-normal text-sm py-2">Contact us</Link>
                    <button className="bg-[#3fa62e] text-white font-semibold text-sm rounded-full px-4 py-2 mt-4">
                        Log in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar