import React from 'react'
import { Link } from 'react-router-dom'
import SignImg from '../assets/img/Sign.svg'

const Register = () => {
    return (
        <div className="flex flex-col md:flex-row w-full h-screen bg-white">
            <div className="flex-1 flex flex-col justify-center items-center p-6">
                <div className="w-full max-w-[500px] bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-[#311f09] mb-6">Register</h1>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#311f09] mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full p-3 rounded-md border border-[#b5a28b] bg-[#d0ccc7] text-[#311f09] focus:outline-none focus:border-[#ff8900]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#311f09] mb-2">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="john.doe@example.com"
                            className="w-full p-3 rounded-md border border-[#b5a28b] bg-[#d0ccc7] text-[#311f09] focus:outline-none focus:border-[#ff8900]"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-[#311f09] mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="*************"
                            className="w-full p-3 rounded-md border border-[#b5a28b] bg-[#d0ccc7] text-[#311f09] focus:outline-none focus:border-[#ff8900]"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-[#311f09] mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="*************"
                            className="w-full p-3 rounded-md border border-[#b5a28b] bg-[#d0ccc7] text-[#311f09] focus:outline-none focus:border-[#ff8900]"
                        />
                    </div>
                    <button className="w-full py-3 rounded-md bg-[#ff8900] text-white font-medium mb-4">
                        Register
                    </button>
                    <div className="text-center text-sm text-[#5c4529] mt-6">
                        <span>Already have an account? </span>
                        <Link to="/Sign" className="text-[#ff8900] font-medium">Log in</Link>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex flex-1 items-center justify-center">
                <img
                    src={SignImg}
                    alt="Register"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}

export default Register