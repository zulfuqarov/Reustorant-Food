import React from 'react'

const Category = () => {
    return (
        <div className="w-full h-[60px] max-[768px]:h-[100%] bg-white ">
            <div className="flex flex-wrap justify-center overflow-x-auto space-x-4 py-2 px-4">
                <div className="max-[768px]:mt-[20px] flex-shrink-0 w-[120px] h-[40px] sm:w-[130px] sm:h-[50px]">
                    <button className="w-full h-full bg-[#311f09] rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-105">
                        <p className="text-white text-xs sm:text-sm md:text-base font-semibold [font-family:'Poppins-SemiBold',Helvetica]">
                            All category
                        </p>
                    </button>
                </div>
                <div className="max-[768px]:mt-[20px] flex-shrink-0 w-[120px] h-[40px] sm:w-[130px] sm:h-[50px]">
                    <button className="w-full h-full bg-[#311f09] rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-105">
                        <p className="text-white text-xs sm:text-sm md:text-base font-semibold [font-family:'Poppins-SemiBold',Helvetica]">
                            Dinner
                        </p>
                    </button>
                </div>
                <div className="max-[768px]:mt-[20px] flex-shrink-0 w-[120px] h-[40px] sm:w-[130px] sm:h-[50px]">
                    <button className="w-full h-full bg-[#311f09] rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-105">
                        <p className="text-white text-xs sm:text-sm md:text-base font-semibold [font-family:'Poppins-SemiBold',Helvetica]">
                            Lunch
                        </p>
                    </button>
                </div>
                <div className="max-[768px]:mt-[20px] flex-shrink-0 w-[120px] h-[40px] sm:w-[130px] sm:h-[50px]">
                    <button className="w-full h-full bg-[#311f09] rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-105">
                        <p className="text-white text-xs sm:text-sm md:text-base font-semibold [font-family:'Poppins-SemiBold',Helvetica]">
                            Dessert
                        </p>
                    </button>
                </div>
                <div className="max-[768px]:mt-[20px] flex-shrink-0 w-[120px] h-[40px] sm:w-[130px] sm:h-[50px]">
                    <button className="w-full h-full bg-[#311f09] rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-105">
                        <p className="text-white text-xs sm:text-sm md:text-base font-semibold [font-family:'Poppins-SemiBold',Helvetica]">
                            Drink
                        </p>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Category
