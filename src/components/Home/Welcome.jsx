import React from 'react'
import WelcomeSvg from '../../assets/img/welcome.svg'
const Welcome = () => {
    return (
        <div className="w-full h-full pt-[30px] relative">
            <div className="absolute inset-0 -z-10 bg-[#3fc56d] opacity-10" />

            <div className="flex flex-col lg:flex-row justify-center items-center">
                <div className="w-full lg:w-1/2 h-auto lg:h-[689px] flex justify-center items-center">
                    <img className="w-full h-auto max-w-full max-h-full object-cover" src={WelcomeSvg} alt="Welcome Image" />
                </div>

                <div className="w-full lg:w-1/2 h-auto flex flex-col justify-center items-center lg:items-start px-4 lg:px-0 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-[80px] leading-tight lg:leading-[80px] text-black font-bold">
                        Welcome to <span className="text-orange-500">delizioso</span>
                    </h1>
                    <p className="pt-8 pb-8 w-full lg:w-[433px] text-[#5c4529] text-lg lg:text-xl font-normal leading-7 lg:leading-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh
                        nulla malesuada ultricies nec quam
                    </p>
                    <button className="w-full lg:w-[172px] h-[64px] bg-[#ff8900] rounded-full font-semibold text-white text-lg px-4 py-2">
                        See our menu
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Welcome