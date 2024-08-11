import React from 'react'
import Note from '../../assets/img/3Note.svg'
import rightArrow from '../../assets/img/rightArrow.svg'
import leftArrow from '../../assets/img/leftArrow.svg'
const Paginations = () => {
    return (
        <div className=" flex items-center justify-center space-x-4 w-full  h-[55px] pt-[60px]">
            <button className="w-[55px] h-[55px] bg-[#311f09] rounded-[15px] flex items-center justify-center shadow-md hover:bg-[#4b2e14] transition-all">
                <img className="w-[13px] h-[23px] transform rotate-180" alt="Previous" src={leftArrow} />
            </button>
            <button className="w-[55px] h-[55px] bg-[#ff8900] rounded-[15px] text-white text-lg font-semibold shadow-md hover:bg-[#ffa63f] transition-all">
                1
            </button>
            <button className="w-[55px] h-[55px] bg-[#ff8900] rounded-[15px] text-white text-lg font-semibold shadow-md hover:bg-[#ffa63f] transition-all">
                2
            </button>
            <button className="w-[55px] h-[55px] bg-[#ff8900] rounded-[15px] text-white text-lg font-semibold shadow-md hover:bg-[#ffa63f] transition-all">
                3
            </button>
            <button className="w-[55px] h-[55px] flex justify-center items-center  rounded-[15px] text-white text-lg font-semibold shadow-md transition-all">
                <img src={Note} alt="" />
            </button>
            <button className="w-[55px] h-[55px] bg-[#311f09] rounded-[15px] flex items-center justify-center shadow-md hover:bg-[#4b2e14] transition-all">
                <img className="w-[13px] h-[23px] transform rotate-180" alt="Previous" src={rightArrow} />
            </button>
        </div>
    )
}

export default Paginations