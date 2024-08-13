import React from 'react'
import Twitter from '../assets/img/Twitter.svg'
import Instagram from '../assets/img/Instagram.svg'
import Facebook from '../assets/img/Facebook.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (

        <div className="w-full h-auto bg-black mt-12 rounded-xl">
            <footer className="container mx-auto py-8 px-4">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between space-y-10 lg:space-y-0">
                    <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-[#ff8900] rounded-full flex items-center justify-center">
                                <span className="text-white text-xl font-semibold">D</span>
                            </div>
                            <span className="text-xl font-semibold text-white">
                                Delizi<span className="text-[#ff8900]">oso</span>
                            </span>
                        </div>
                        <p className="text-base text-[#e3e1df] max-w-xs">
                            Viverra gravida morbi egestas facilisis tortor netus non duis tempor.
                        </p>
                        <div className="flex space-x-4">
                            <div className="w-10 h-10 bg-[#e3e2e0] rounded-full flex items-center justify-center">
                                <img src={Twitter} alt="Twitter" className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 bg-[#ddd4d4] rounded-full flex items-center justify-center">
                                <img src={Instagram} alt="Instagram" className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 bg-[#ddd4d4] rounded-full flex items-center justify-center">
                                <img src={Facebook} alt="Facebook" className="w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4 text-center lg:text-left">
                        <div className="text-[#ff8900] text-xl font-semibold">Page</div>
                        <Link to="/" className="text-[#e3e1df] text-base hover:text-[#ff8900] transition-all">Home</Link>
                        <Link to="/Contact" className="text-[#e3e1df] text-base hover:text-[#ff8900] transition-all">Contact</Link>
                        <Link to="/Order-online" className="text-[#e3e1df] text-base hover:text-[#ff8900] transition-all">Order online</Link>
                        <Link to="#" className="text-[#e3e1df] text-base hover:text-[#ff8900] transition-all">Catering</Link>
                        <Link to="/Reservation" className="text-[#e3e1df] text-base hover:text-[#ff8900] transition-all">Reservation</Link>
                    </div>

                    <div className="flex flex-col space-y-4 text-center lg:text-left">
                        <div className="text-[#ff8900] text-xl font-semibold">Information</div>
                        <Link to="/About" className="text-[#e3e1df] text-base hover:text-[#ff8900] transition-all">About us</Link>
                        <Link to="#" className="text-[#e3e1df] text-base hover:text-[#ff8900] transition-all">Testimonial</Link>
                        <Link to="#" className="text-[#e3e1df] text-base hover:text-[#ff8900] transition-all">Event</Link>
                    </div>

                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 max-w-xs">
                        <div className="text-[#ff8900] text-xl font-semibold">Get in touch</div>
                        <p className="text-[#e3e1df] text-base">
                            3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat
                        </p>
                        <p className="text-[#e3e1df] text-base">delizioso@gmail.com</p>
                        <p className="text-[#e3e1df] text-base">+123 4567 8901</p>
                    </div>
                </div>

                <div className="mt-8 flex justify-center text-center text-[#e3e2e0] text-base">
                    <div>Copyright 2024 Delizioso</div>
                </div>
            </footer>
        </div>


    )
}

export default Footer