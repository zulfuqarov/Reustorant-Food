import React from 'react'
import CustomerImg from "../../assets/img/CustomersImg.svg"
const CustomersCard = () => {
    return (
        <div className="flex flex-col items-center w-[320px] sm:w-[480px] md:w-[618px] h-auto mx-auto pt-[40px] sm:pt-[50px] md:pt-[60px]">
            <div className="w-[160px] sm:w-[180px] md:w-[222px] h-[160px] sm:h-[180px] md:h-[222px] mb-6 sm:mb-8">
                <img
                    className="w-full h-full object-cover"
                    alt="Ellipse"
                    src={CustomerImg}
                />
            </div>
            <div className="flex flex-col items-center w-[280px] sm:w-[400px] md:w-[524px]">
                <div className="[font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#311f09] text-2xl sm:text-3xl md:text-4xl text-center leading-[40px] sm:leading-[50px] md:leading-[60px]">
                    Starla Virgoun
                </div>
                <div className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#5c4529] text-lg sm:text-xl text-center leading-8 sm:leading-9 md:leading-10">
                    Financial advisor
                </div>
                <div className="w-full mt-4 sm:mt-5 md:mt-6">
                    <div className="[font-family:'Tinos-Bold',Helvetica] font-bold text-[#311f09] text-[60px] sm:text-[70px] md:text-[80px] leading-[20px] sm:leading-[25px] md:leading-[30px]">
                        “
                    </div>
                    <p className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#5c4529] text-lg sm:text-xl text-center leading-8 sm:leading-9 md:leading-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam
                    </p>
                    <div className="[font-family:'Tinos-Bold',Helvetica] font-bold text-[#311f09] text-[60px] sm:text-[70px] md:text-[80px] leading-[20px] sm:leading-[25px] md:leading-[30px] rotate-180">
                        “
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CustomersCard