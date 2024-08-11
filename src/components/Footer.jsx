import React from 'react'
import Twitter from '../assets/img/Twitter.svg'
import Instagram from '../assets/img/Instagram.svg'
import Facebook from '../assets/img/Facebook.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className="w-full h-auto bg-black mt-[60px] rounded-xl">
            <footer className="container mx-auto p-10">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between space-y-10 lg:space-y-0">

                    <div className="flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left">
                        <div className="flex items-center space-x-2">
                            <div className="w-12 h-12 bg-[#ff8900] rounded-full flex items-center justify-center">
                                <span className="text-white text-2xl font-semibold">D</span>
                            </div>
                            <span className="text-2xl font-semibold text-white">Delizi<span className="text-[#ff8900]">oso</span></span>
                        </div>
                        <p className="text-xl text-[#e3e1df] max-w-xs">
                            Viverra gravida morbi egestas facilisis tortor netus non duis tempor.
                        </p>
                        <div className="flex space-x-6">
                            <div className="w-14 h-14 bg-[#e3e2e0] rounded-full flex items-center justify-center">
                                <img src={Twitter} alt="Twitter" className="w-7 h-7" />
                            </div>
                            <div className="w-14 h-14 bg-[#ddd4d4] rounded-full flex items-center justify-center">
                                <img src={Instagram} alt="Instagram" className="w-7 h-7" />
                            </div>
                            <div className="w-14 h-14 bg-[#ddd4d4] rounded-full flex items-center justify-center">
                                <img src={Facebook} alt="Facebook" className="w-7 h-7" />
                            </div>
                        </div>
                    </div>



                    <div className="flex flex-col space-y-6 text-center lg:text-left">
                        <div className="text-[#ff8900] text-2xl font-semibold">Page</div>
                        <Link to="/" className="text-[#e3e1df] text-xl">Home</Link>
                        <Link to="/Menu" className="text-[#e3e1df] text-xl">Menu</Link>
                        <Link to="/Order-online" className="text-[#e3e1df] text-xl">Order online</Link>
                        <Link to="#" className="text-[#e3e1df] text-xl">Catering</Link>
                        <Link to="/Reservation" className="text-[#e3e1df] text-xl">Reservation</Link>
                    </div>

                    <div className="flex flex-col space-y-6 text-center lg:text-left">
                        <div className="text-[#ff8900] text-2xl font-semibold">Information</div>
                        <Link to="/About" className="text-[#e3e1df] text-xl">About us</Link>
                        <Link to="#" className="text-[#e3e1df] text-xl">Testimonial</Link>
                        <Link to="#" className="text-[#e3e1df] text-xl">Event</Link>
                    </div>

                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 max-w-xs">
                        <div className="text-[#ff8900] text-2xl font-semibold">Get in touch</div>
                        <p className="text-[#e3e1df] text-xl">
                            3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat
                        </p>
                        <p className="text-[#e3e1df] text-xl">delizioso@gmail.com</p>
                        <p className="text-[#e3e1df] text-xl">+123 4567 8901</p>
                    </div>
                </div>

                <div className="mt-10 flex justify-center space-x-2 text-center text-[#e3e2e0] text-xl">
                    <div>Copyright 2022 Delizioso</div>
                </div>
            </footer>
        </div>

    )
}

export default Footer