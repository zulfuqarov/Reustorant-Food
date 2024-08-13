import React from 'react'
import Modfy from '../../assets/img/Modfy.svg'
import ModfyPen from '../../assets/img/ModfyPen.svg'
import ModfyCancel from '../../assets/img/ModfyCancel.svg'
import ModfyBag from '../../assets/img/ModfyBag.svg'
const ReservationsModfy = ({ ModfyReservation, ModfyReser }) => {
    return (
        <div className={`fixed overflow-y-auto z-20 inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center ${ModfyReser ? 'h-screen w-screen' : 'h-0 w-0'}`}>
            <div className="flex flex-col lg:flex-row items-center lg:items-start w-full h-full p-4 lg:p-0 max-w-screen-lg mx-auto">
                <div className="w-full bg-white rounded-lg shadow-lg">
                    <div className="w-full h-36 bg-green-500 text-white flex flex-col justify-center px-4 lg:px-8">
                        <div className="text-2xl font-semibold mb-2 flex justify-between items-center max-[768px]:text-[20px]">
                            <p>Reservation has been confirmed</p>
                            <button onClick={ModfyReservation} className='text-3xl text-red-500 hover:text-red-900 transition-all'>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="flex items-center">
                            <p className="text-lg font-normal">The confirmation result has been sent to your email</p>
                            <div className="w-8 h-8 ml-4 flex items-center justify-center">
                                <i className="fa-regular text-green-900 fa-square-check text-2xl"></i>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-4 px-4 lg:px-8">
                        <div className="w-full lg:w-1/3 flex items-center justify-center mb-4 lg:mb-0">
                            <div className="w-3/4 lg:w-full rounded-full overflow-hidden">
                                <img className="w-full h-full object-cover" src={Modfy} alt="Unsplash" />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/3 text-center space-y-4 mb-4 lg:mb-0">
                            <div className="text-xl font-semibold text-[#311f09]">Reservation detail</div>
                            <div className="flex items-center justify-center space-x-2">
                                <div className="text-lg font-normal text-black">Saturday, 28 February 2022</div>
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <i className="fa-solid fa-briefcase text-xl text-black"></i>
                                </div>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <div className="text-lg font-normal text-black">04:30 pm</div>
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <i className="fa-regular fa-clock text-xl text-black"></i>
                                </div>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <div className="text-lg font-normal text-black">2 people (Standard seating)</div>
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <i className="fa-solid fa-user text-xl text-black"></i>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/3 flex flex-col items-center space-y-4">
                            <button className="w-full h-20 bg-[#d0ccc7] rounded-lg flex items-center justify-center space-x-2">
                                <img className="w-6 h-6" src={ModfyPen} alt="Modify" />
                                <p className="text-lg text-[#123968]">Modify</p>
                            </button>
                            <button className="w-full h-20 bg-[#d0ccc7] rounded-lg flex items-center justify-center space-x-2">
                                <img className="w-6 h-6" src={ModfyCancel} alt="Cancel" />
                                <p className="text-lg text-[#ea1010]">Cancel</p>
                            </button>
                        </div>
                    </div>

                    <div className="w-full mt-4 px-4 lg:px-8 py-6">
                        <div className="mb-6">
                            <div className="text-xl font-semibold text-black mb-4">Restaurant informations</div>
                            <p className="text-lg text-black mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <p className="text-lg text-black">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ReservationsModfy