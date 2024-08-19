import React, { useContext, useState, useEffect } from 'react';
import rightArrow from '../../assets/img/rightArrow.svg';
import leftArrow from '../../assets/img/leftArrow.svg';
import { FoodContext } from '../../context/Context';

const Paginations = () => {
    const context = useContext(FoodContext);
    const { totalPage, currentPage, setcurrentPage } = context;

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(3);

    useEffect(() => {
        setStart(0);
        setEnd(3);
    }, [totalPage]);

    const pageNumber = [];
    for (let i = 1; i <= totalPage; i++) {
        pageNumber.push(i);
    }

    const Previous = () => {
        if (start > 0) {
            setStart(start - 1);
            setEnd(end - 1);
        }
    };

    const Next = () => {
        if (end < totalPage) {
            setStart(start + 1);
            setEnd(end + 1);
        }
    };

    return (
        <div className="flex items-center justify-center space-x-2 w-full py-4">
            <button
                className="w-12 h-12 bg-[#311f09] rounded-lg flex items-center justify-center shadow-md hover:bg-[#4b2e14] transition-all"
                onClick={Previous}
                disabled={start === 0}
            >
                <img className="w-5 h-5 transform rotate-180" alt="Previous" src={leftArrow} />
            </button>

            {pageNumber.slice(start, end).map((oneMap, index) => (
                <button
                    key={index}
                    className={`w-12 h-12 rounded-lg text-white text-sm font-semibold shadow-md transition-all ${oneMap === currentPage ? 'bg-[#ff8900]' : 'bg-[#ffa63f] hover:bg-[#ffa63f]'}`}
                    onClick={() => setcurrentPage(oneMap)}
                >
                    {oneMap}
                </button>
            ))}

            <button
                className="w-12 h-12 bg-[#311f09] rounded-lg flex items-center justify-center shadow-md hover:bg-[#4b2e14] transition-all"
                onClick={Next}
                disabled={end >= totalPage}
            >
                <img className="w-5 h-5" alt="Next" src={leftArrow} />
            </button>
        </div>
    );
};

export default Paginations;
