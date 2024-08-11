import React from 'react'

const ProductCategory = () => {
    return (
        <div className="w-full h-[60px] bg-white max-[768px]:mb-[50px]">
            <div className="flex flex-wrap justify-center overflow-x-auto space-x-4 py-[15px] px-4">
                <div className="max-[768px]:mt-[20px] flex-shrink-0 w-[120px] h-[40px] sm:w-[130px] sm:h-[50px]">
                    <button className="w-full h-full  rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-105">
                        <p className="text-orange-800 text-xs sm:text-sm md:text-base font-semibold [font-family:'Poppins-SemiBold',Helvetica]">
                            Fanta
                        </p>
                    </button>
                </div>
                <div className="max-[768px]:mt-[20px] flex-shrink-0 w-[120px] h-[40px] sm:w-[130px] sm:h-[50px]">
                    <button className="w-full h-full rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-105">
                        <p className="text-orange-800 text-xs sm:text-sm md:text-base font-semibold [font-family:'Poppins-SemiBold',Helvetica]">
                            Sprite
                        </p>
                    </button>
                </div>
                <div className="max-[768px]:mt-[20px] flex-shrink-0 w-[120px] h-[40px] sm:w-[130px] sm:h-[50px]">
                    <button className="w-full h-full rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-105">
                        <p className="text-orange-800 text-xs sm:text-sm md:text-base font-semibold [font-family:'Poppins-SemiBold',Helvetica]">
                            Cola
                        </p>
                    </button>
                </div>
                <div className="max-[768px]:mt-[20px] flex-shrink-0 w-[120px] h-[40px] sm:w-[130px] sm:h-[50px]">
                    <button className="w-full h-full  rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-105">
                        <p className="text-orange-800 text-xs sm:text-sm md:text-base font-semibold [font-family:'Poppins-SemiBold',Helvetica]">
                            Maxito
                        </p>
                    </button>
                </div>
                <div className="max-[768px]:mt-[20px] flex-shrink-0 w-[120px] h-[40px] sm:w-[130px] sm:h-[50px]">
                    <button className="w-full h-full rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-105">
                        <p className="text-orange-800 text-xs sm:text-sm md:text-base font-semibold [font-family:'Poppins-SemiBold',Helvetica]">
                            Wodka
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCategory