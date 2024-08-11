import React from 'react'

import About1 from '../../assets/img/AboutSvg1.svg'
import About2 from '../../assets/img/AboutSvg2.svg'
import About3 from '../../assets/img/AboutSvg3.svg'

const AboutHeaderOne = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center space-y-8 p-8 mt-[60px]">
            <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex-1 flex items-center justify-center">
                    <div className="relative w-[80%] max-w-[500px] h-auto">
                        <div className="absolute inset-0 bg-orange-400 rounded-full opacity-10" />
                        <div className="absolute inset-0 bg-orange-400 rounded-full opacity-20 transform translate-x-8 translate-y-8" />
                        <img
                            className="relative w-full h-auto object-cover rounded-full"
                            alt="Unsplash"
                            src={About1}
                        />
                    </div>
                </div>
                <div className="flex-1 text-[#5c4529] text-base md:text-lg leading-6 md:leading-8 font-normal [font-family:'Poppins-Regular',Helvetica] max-w-full md:max-w-[500px]">
                    <p className="text-[#ff8900] text-[40px] md:text-[60px] leading-[48px] md:leading-[70px] font-bold [font-family:'Tinos-Bold',Helvetica] mb-4">
                        <span>Our </span> <br />
                        <span className="text-[#311f09]">restaurant</span>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                    </p>
                </div>
            </div>

            <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex-1 text-[#5c4529] text-base md:text-lg leading-6 md:leading-8 font-normal [font-family:'Poppins-Regular',Helvetica] max-w-full md:max-w-[500px]">
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                    </p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="relative w-[80%] max-w-[500px] h-auto">
                        <div className="absolute inset-0 bg-orange-400 rounded-full opacity-10" />
                        <div className="absolute inset-0 bg-orange-400 rounded-full opacity-10 transform translate-x-8 translate-y-8" />
                        <img
                            className="relative w-full h-auto object-cover rounded-full"
                            alt="Unsplash"
                            src={About2}
                        />
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex-1 flex items-center justify-center">
                    <div className="relative w-[80%] max-w-[500px] h-auto">
                        <div className="absolute inset-0 bg-orange-400 rounded-full opacity-10" />
                        <div className="absolute inset-0 bg-orange-400 rounded-full opacity-20 transform translate-x-8 translate-y-8" />
                        <img
                            className="relative w-full h-auto object-cover rounded-full"
                            alt="Unsplash"
                            src={About3}
                        />
                    </div>
                </div>
                <div className="flex-1 text-[#5c4529] text-base md:text-lg leading-6 md:leading-8 font-normal [font-family:'Poppins-Regular',Helvetica] max-w-full md:max-w-[500px]">
                    <p className="text-[#ff8900] text-[40px] md:text-[60px] leading-[48px] md:leading-[70px] font-bold [font-family:'Tinos-Bold',Helvetica] mb-4">
                        <span>Owner &</span> <br />
                        <span className="text-[#311f09]">Executive Chef</span>
                    </p>
                    <p className="text-[20px] md:text-[30px] text-black font-bold mb-4">Ismail Marzuki</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default AboutHeaderOne