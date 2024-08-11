import React from 'react'

const Button = ({title}) => {
    return (
        <button className="w-full lg:w-[172px] h-[64px] bg-[#ff8900] rounded-full font-semibold text-white text-lg px-4 py-2">
            {title}
        </button>
    )
}

export default Button