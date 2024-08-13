import React from 'react'
import Note from '../../assets/img/3Note.svg'
import rightArrow from '../../assets/img/rightArrow.svg'
import leftArrow from '../../assets/img/leftArrow.svg'
const Paginations = () => {
    return (
        <div className="flex items-center justify-center space-x-2 w-full py-4">
            <button className="w-12 h-12 bg-[#311f09] rounded-lg flex items-center justify-center shadow-md hover:bg-[#4b2e14] transition-all">
                <img className="w-5 h-5 transform rotate-180" alt="Previous" src={leftArrow} />
            </button>
            <button className="w-12 h-12 bg-[#ff8900] rounded-lg text-white text-sm font-semibold shadow-md hover:bg-[#ffa63f] transition-all">
                1
            </button>
            <button className="w-12 h-12 bg-[#ff8900] rounded-lg text-white text-sm font-semibold shadow-md hover:bg-[#ffa63f] transition-all">
                2
            </button>
            <button className="w-12 h-12 bg-[#ff8900] rounded-lg text-white text-sm font-semibold shadow-md hover:bg-[#ffa63f] transition-all">
                3
            </button>
            <button className="w-12 h-12 bg-[#ff8900] rounded-lg flex items-center justify-center shadow-md transition-all">
                <img className="w-6 h-6" alt="Note" src={Note} />
            </button>
            <button className="w-12 h-12 bg-[#311f09] rounded-lg flex items-center justify-center shadow-md hover:bg-[#4b2e14] transition-all">
                <img className="w-5 h-5 transform rotate-180" alt="Next" src={rightArrow} />
            </button>
        </div>

    )
}

export default Paginations