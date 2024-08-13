import React from 'react'

const ContactHeader = () => {
    return (

        <div className="w-full max-w-[900px] mx-auto p-4">
            <p className="text-center text-[#5c4529] text-[18px] font-normal mb-6">
                We love hearing from our customers. Feel free to share your experience or ask any questions you may have.
            </p>

            <h1 className="text-center text-[#311f09] text-[32px] md:text-[48px] font-bold">
                Contact us
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#d0ccc7] bg-opacity-10 rounded-[12px] p-4">
                    <input
                        type="text"
                        placeholder="First name"
                        className="w-full bg-transparent placeholder-[#a0978c] text-[18px] font-normal outline-none"
                    />
                </div>
                <div className="bg-[#d0ccc7] bg-opacity-10 rounded-[12px] p-4">
                    <input
                        type="text"
                        placeholder="Last name"
                        className="w-full bg-transparent placeholder-[#a0978c] text-[18px] font-normal outline-none"
                    />
                </div>
                <div className="bg-[#d0ccc7] bg-opacity-10 rounded-[12px] p-4">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full bg-transparent placeholder-[#a0978c] text-[18px] font-normal outline-none"
                    />
                </div>
                <div className="bg-[#d0ccc7] bg-opacity-10 rounded-[12px] p-4">
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full bg-transparent placeholder-[#a0978c] text-[18px] font-normal outline-none"
                    />
                </div>
            </div>

            <div className="bg-[url('/rectangle-22.svg')] bg-cover bg-center rounded-[12px] p-4 mb-6">
                <textarea
                    placeholder="Message"
                    className="w-full bg-transparent placeholder-[#a0978c] text-[18px] font-normal outline-none h-48 resize-none"
                />
            </div>

            <div className="w-full bg-[#ff8900] rounded-[12px] py-4 mb-6 cursor-pointer text-center hover:bg-black transition-all">
                <button className="text-white text-[18px] font-normal  ">Submit</button>
            </div>
        </div>


    )
}

export default ContactHeader