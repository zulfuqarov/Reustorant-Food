import React, { useContext, useEffect } from 'react'
import { FoodContext } from '../../context/Context'

const Category = () => {

    const context = useContext(FoodContext)
    useEffect(() => {
        context.getCategory()
    }, [])

    return (
        <div className="w-full h-[60px] max-[768px]:h-[100%] bg-white ">
            <div className="flex flex-wrap justify-center overflow-x-auto space-x-4 py-2 px-4">

                {
                    context.category &&
                    context.category.map((oneMap, index) => (
                        <div key={index} className="max-[768px]:mt-[20px] flex-shrink-0 w-[120px] h-[40px] sm:w-[130px] sm:h-[50px]">
                            <button onClick={() => context.getSubCategory(oneMap._id)} className="w-full h-full bg-[#311f09] rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-105">
                                <p className="text-white text-xs sm:text-sm md:text-base font-semibold [font-family:'Poppins-SemiBold',Helvetica]">
                                    {oneMap.name}
                                </p>
                            </button>
                        </div>
                    ))
                }

            </div>
        </div>

    )
}

export default Category
