import React from 'react'

import Reservations from '../../assets/img/Reservations.svg'

const ReservationsComp = () => {
    return (

        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full h-full p-4 lg:p-0">
            <div className="lg:flex-1 flex justify-center lg:justify-end w-full lg:w-auto lg:h-[824px]">
                <div className="w-full lg:w-[715px] h-full bg-cover bg-center" style={{ backgroundImage: "url('/image.svg')" }}>
                    <img className="w-[80%] h-auto mt-4 mx-auto" alt="Unsplash" src={Reservations} />
                </div>
            </div>

            <div className="lg:flex-1 w-full lg:w-auto mt-8 lg:mt-0 lg:ml-8">
                <div className="space-y-8">
                    <div className="w-full h-40 flex justify-center">
                        <p className=" text-center [font-family:'Tinos-Bold',Helvetica] font-bold text-[#311f09] text-[65px] max-[991px]:text-[40px] max-[768px]:text-[30px] tracking-[0] leading-[160px] whitespace-nowrap">
                            Book a table
                        </p>
                    </div>
                    <div className="w-full lg:w-[477px] p-4 bg-[#d0ccc7] bg-opacity-10 rounded-[20px] text-center text-[#a0978c] text-xl">
                        <label htmlFor="date" className="block mb-2">Date</label>
                        <input
                            type="date"
                            id="date"
                            className="w-full p-3 rounded-[20px] bg-transparent focus:outline-none"
                        />
                    </div>

                    <div className="w-full lg:w-[477px] p-4 bg-[#d0ccc7] bg-opacity-10 rounded-[20px] text-center text-[#a0978c] text-xl">
                        <label htmlFor="time" className="block mb-2">Time</label>
                        <input
                            type="time"
                            id="time"
                            className="w-full p-3 rounded-[20px] bg-transparent focus:outline-none"
                        />
                    </div>

                    <div className="w-full lg:w-[477px] p-4 bg-[#d0ccc7] bg-opacity-10 rounded-[20px] text-center text-[#a0978c] text-xl">
                        <label htmlFor="party-size" className="block mb-2">Party size</label>
                        <input
                            type="number"
                            id="party-size"
                            className="w-full p-3 rounded-[20px] bg-transparent focus:outline-none"
                            min="1"
                        />
                    </div>

                    <div className="w-full lg:w-[477px] p-4">
                        <button
                            className="w-full p-4 bg-[#ff8900] rounded-[20px] text-white text-2xl font-semibold shadow-md hover:bg-[#e07c00] hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                            Book now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default ReservationsComp