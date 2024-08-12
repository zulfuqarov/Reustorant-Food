import React from 'react'

const ReservationCheck = () => {
    return (
        <div className="w-full max-w-[1000px] mx-auto p-4">

            <div className="w-full h-40 flex justify-center">
                <p className=" text-center [font-family:'Tinos-Bold',Helvetica] font-bold text-[#311f09] text-[65px] max-[991px]:text-[40px] max-[768px]:text-[30px] tracking-[0] leading-[160px] whitespace-nowrap">
                    Reservation
                </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-black mb-4">Data Order</h1>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-black mb-2">Restaurant Informations</h2>
                    <p className="text-base text-[#5c4529] mb-2">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p className="text-base text-[#5c4529]">
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#d0ccc7] bg-opacity-10 rounded-lg p-4">
                        <label htmlFor="occasion" className="block text-base text-[#a0978c] mb-2">Select an occasion (optional)</label>
                        <select id="occasion" className="w-full p-2 border border-gray-300 rounded-lg bg-white">
                            <option value="">Choose an occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="bg-[#d0ccc7] bg-opacity-10 rounded-lg p-4">
                        <label htmlFor="first-name" className="block text-base text-[#a0978c] mb-2">First name</label>
                        <input type="text" id="first-name" className="w-full p-2 border border-gray-300 rounded-lg bg-white" placeholder="Enter your first name" />
                    </div>
                    <div className="bg-[#d0ccc7] bg-opacity-10 rounded-lg p-4">
                        <label htmlFor="last-name" className="block text-base text-[#a0978c] mb-2">Last name</label>
                        <input type="text" id="last-name" className="w-full p-2 border border-gray-300 rounded-lg bg-white" placeholder="Enter your last name" />
                    </div>
                    <div className="bg-[#d0ccc7] bg-opacity-10 rounded-lg p-4">
                        <label htmlFor="email" className="block text-base text-[#a0978c] mb-2">Email address</label>
                        <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-lg bg-white" placeholder="Enter your email address" />
                    </div>
                    <div className="bg-[#d0ccc7] bg-opacity-10 rounded-lg p-4">
                        <label htmlFor="special-request" className="block text-base text-[#a0978c] mb-2">Add a special request</label>
                        <textarea id="special-request" className="w-full p-2 border border-gray-300 rounded-lg bg-white" rows="4" placeholder="Enter your special request"></textarea>
                    </div>
                    <div className="bg-[#d0ccc7] bg-opacity-10 rounded-lg p-4">
                        <label htmlFor="phone" className="block text-base text-[#a0978c] mb-2">Phone number</label>
                        <input type="tel" id="phone" className="w-full p-2 border border-gray-300 rounded-lg bg-white" placeholder="Enter your phone number" />
                    </div>
                </div>

                <div className="flex items-center mb-4">
                    <input type="checkbox" id="offers" className="mr-2 border border-[#311f09] rounded-lg" />
                    <label htmlFor="offers" className="text-base text-[#5c4529]">Sign me up to receive dining offers and news from this restaurant by email.</label>
                </div>

                <div className="flex items-center mb-4">
                    <input type="checkbox" id="agreement" className="mr-2 border border-[#311f09] rounded-lg" />
                    <label htmlFor="agreement" className="text-base text-[#5c4529]">I agree with what is stated above</label>
                </div>

                <button className="bg-[#ff8900] text-white py-2 px-4 rounded-lg text-xl font-semibold">
                    Confirm Reservation
                </button>
            </div>
        </div>
    )
}

export default ReservationCheck