import React from 'react'
import SpaggetiSvg from '../../assets/img/spaggeti.svg'
import StarSvg from '../../assets/img/star.svg'
const Card = () => {
    return (
        <div className="w-full mx-auto max-w-[344px] sm:max-w-[280px] h-auto p-4">
            <div className="relative bg-[url(/rectangle-8.svg)] bg-cover rounded-lg overflow-hidden">
                <div className="w-full h-auto">
                    <img className="w-full h-auto rounded-t-lg" alt="Mask group" src={SpaggetiSvg} />
                </div>
                <div className="p-4 text-center">
                    <h2 className="text-[#311f09] text-2xl sm:text-xl font-semibold">Spaghetti</h2>
                    <div className="flex justify-center mt-2 mb-4">
                        <img className="w-4 h-4" alt="Star" src={StarSvg} />
                        <img className="w-4 h-4 mx-1" alt="Star" src={StarSvg} />
                        <img className="w-4 h-4 mx-1" alt="Star" src={StarSvg} />
                        <img className="w-4 h-4 mx-1" alt="Star" src={StarSvg} />
                        <img className="w-4 h-4" alt="Star" src={StarSvg} />
                    </div>
                    <p className="text-[#59442b] text-sm leading-5 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.
                    </p>
                    <div className="flex justify-between items-center">
                        <span className="text-[#311f09] text-lg font-semibold">$12.05</span>
                        <button className="bg-[#ff8900] text-white text-sm font-semibold rounded-full px-6 py-2 shadow-md transition-transform transform hover:scale-105">
                            Order now
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card