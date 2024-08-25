import React, { useContext } from 'react'
import { FoodContext } from '../../context/Context'

const ProductCategory = () => {

    const context = useContext(FoodContext)

    return (
        <div className="w-full h-full bg-white ">
            <div className="flex flex-wrap justify-center overflow-x-auto space-x-4 py-[15px] px-4">
                {
                    context.subCategory &&
                    context.subCategory.map((oneMap, index) => (
                        <div key={index} onClick={() => context.getProduct(oneMap._id)} className="max-[768px]:mt-[20px] flex-shrink-0 w-[120px] h-[40px] sm:w-[130px] sm:h-[50px]">
                            <button className="w-full h-full  rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-105">
                                <p className="text-orange-600 text-xs sm:text-sm md:text-base font-semibold [font-family:'Poppins-SemiBold',Helvetica]">
                                    {
                                        oneMap.name.length > 10 ? `${oneMap.name.substring(0, 10)}...` : oneMap.name
                                    }
                                </p>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductCategory