import React from 'react'
import { Link } from 'react-router-dom'
import SignImg from '../assets/img/Sign.svg'
import GoogleImg from '../assets/img/Google.svg'
const Sign = () => {
    return (
        <div className="flex flex-col md:flex-row w-full h-screen bg-white">
            <div className="flex-1 flex flex-col justify-center items-center p-6">
                <div className="w-full max-w-[500px] bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-[#311f09] mb-6">Login</h1>
                    <p className='text-black py-[20px]'>Don't have an account? <Link to='/Register' className='text-blue-500'>Register</Link></p>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#311f09] mb-2">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="Robertmartine@gmail.com"
                            className="w-full p-3 rounded-md border border-[#b5a28b]  text-[#311f09] focus:outline-none focus:border-[#ff8900]"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-[#311f09] mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="*************"
                            className="w-full p-3 rounded-md border border-[#b5a28b]  text-[#311f09] focus:outline-none focus:border-[#ff8900]"
                        />
                    </div>
                    <button className="w-full py-3 rounded-md bg-[#ff8900] text-white font-medium mb-4">
                        Log in
                    </button>
                    <button className="w-full py-3 rounded-md border border-[#b5a28b] flex items-center justify-center">
                        <img
                            src={GoogleImg}
                            alt="Google"
                            className="w-6 h-6 mr-2"
                        />
                        <span className="text-[#311f09] font-medium">Log in with Google</span>
                    </button>
                    <div className="flex items-center justify-between text-sm text-[#5c4529] mt-4">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            Remember me
                        </label>
                        <a href="#" className="text-[#5c4529]">Forget Password?</a>
                    </div>
                    <div className="text-center text-sm text-[#c6bfb6] mt-6">
                        <span>Copyright © 2022 Delizioso</span>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex flex-1 items-center justify-center">
                <img
                    src={SignImg}
                    alt="Login"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}

export default Sign