import React from 'react'
import ChecfSvg from '../../assets/img/Checf.svg'
const ChefCard = ({ color }) => {
    return (
        <div className=" w-[344px] h-full mx-auto max-[548px]:w-[310px]">
            <div className="relative w-[348px] max-[548px]:w-[314px] h-full text-center">
                <div className={`w-full rounded-3xl -z-10 absolute h-[549px] ${color} opacity-20`}></div>
                <img className=" w-[344px] h-[549px] max-[548px]:w-[310px]  " alt="Group" src={ChecfSvg} />
                <div className=" [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#311f09] text-[25px] tracking-[0] leading-[50px] whitespace-nowrap">
                    Betran Komar
                </div>
                <div className="  [font-family:'Poppins-Regular',Helvetica] font-normal text-[#a08d76] text-[25px] tracking-[0] leading-[50px] whitespace-nowrap">
                    Head chef
                </div>
            </div>
        </div>
    )
}

export default ChefCard