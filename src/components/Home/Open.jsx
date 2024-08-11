import React from 'react'
import Button from '../PropsComponents/Button'
const Open = () => {
    return (
        <div className='Open relative container mx-auto h-[588px]  bg-center w-full rounded-[50px]'>

            <div className='bg-slate-800 absolute w-full h-full opacity-30  rounded-[50px]'></div>

            <div className="w-full h-40 flex justify-center absolute ">
                <p className=" text-center [font-family:'Tinos-Bold',Helvetica] font-bold text-white text-[65px] max-[991px]:text-[40px] max-[768px]:text-[30px] tracking-[0] leading-[160px] whitespace-nowrap">
                    we are open from
                </p>
            </div>

            <div className=" w-full flex justify-center top-[30%] items-center absolute ">
                <div className=" w-[377px] h-[215px] ">
                    <div className="  [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[40px] text-center tracking-[0] leading-[80px] whitespace-nowrap">
                        Monday-Sunday
                    </div>
                    <p className="  [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-10 whitespace-nowrap">
                        Launch : Mon-Sun : 11:00am-02:00pm
                    </p>
                    <p className="  [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-10 whitespace-nowrap">
                        Dinner : sunday : 04:00pm-08:00pm
                    </p>
                    <div className="  [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-xl text-right tracking-[0] leading-10 whitespace-nowrap">
                        04:00pm-09:00pm
                    </div>
                </div>
            </div>

            <div className='bottom-[10%] w-full absolute flex justify-center '>
                <div className='pr-[10px]'>
                    <Button title='Order now' />
                </div>
                <div className='pl-[10px]'>
                    <Button title='Reservation' />
                </div>
            </div>
        </div>
    )
}

export default Open