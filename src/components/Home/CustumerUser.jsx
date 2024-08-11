import React from 'react'
import user1 from '../../assets/img/CustumerUser1.svg'
import user2 from '../../assets/img/CustumerUser2.svg'
import user3 from '../../assets/img/CustumerUser3.svg'
import user4 from '../../assets/img/CustumerUser4.svg'
import user5 from '../../assets/img/CustumerUser5.svg'
import user6 from '../../assets/img/CustumerUser6.svg'
import user7 from '../../assets/img/CustumerUser7.svg'
const CustumerUser = () => {
    return (
        <div className="w-full h-auto pt-[50px] sm:pt-[70px] md:pt-[100px] flex justify-center items-center">
        <div className="relative w-full max-w-[973px] h-[334px] mx-auto flex justify-center items-center">
            <img
                className="absolute w-[60px] sm:w-[80px] md:w-[106px] h-[60px] sm:h-[80px] md:h-[105px] top-[40px] sm:top-[60px] md:top-[82px] left-[10px] sm:left-[40px] md:left-[86px] object-cover"
                alt="Ellipse"
                src={user2}
            />
            <img
                className="absolute w-[60px] sm:w-[80px] md:w-[106px] h-[60px] sm:h-[80px] md:h-[105px] top-[40px] sm:top-[60px] md:top-[82px] right-[10px] sm:right-[40px] md:right-[86px] object-cover"
                alt="Ellipse"
                src={user3}
            />
            <img
                className="absolute w-[40px] sm:w-[55px] md:w-[66px] h-[40px] sm:h-[55px] md:h-[65px] top-0 left-0 object-cover"
                alt="Ellipse"
                src={user7}
            />
            <img
                className="absolute w-[40px] sm:w-[55px] md:w-[66px] h-[40px] sm:h-[55px] md:h-[65px] top-0 right-0 object-cover"
                alt="Ellipse"
                src={user4}
            />
            <img
                className="absolute w-[80px] sm:w-[100px] md:w-[124px] h-[80px] sm:h-[100px] md:h-[123px] top-[90px] sm:top-[120px] md:top-[141px] left-[50px] sm:left-[150px] md:left-[225px] object-cover"
                alt="Ellipse"
                src={user1}
            />
            <img
                className="absolute w-[80px] sm:w-[100px] md:w-[124px] h-[80px] sm:h-[100px] md:h-[123px] top-[90px] sm:top-[120px] md:top-[141px] right-[50px] sm:right-[150px] md:right-[225px] object-cover"
                alt="Ellipse"
                src={user5}
            />
            <div className="relative w-[150px] sm:w-[190px] md:w-[233px] h-[150px] sm:h-[190px] md:h-[233px] mx-auto">
                <div className="absolute w-full h-full bg-[#ff8900] rounded-full opacity-10" />
                <div className="absolute w-[130px] sm:w-[170px] md:w-[194px] h-[130px] sm:h-[170px] md:h-[194px] top-[10px] sm:top-[15px] md:top-[19px] left-[10px] sm:left-[15px] md:left-[19px] bg-[#ff8900] rounded-full opacity-40" />
                <img
                    className="absolute w-[100px] sm:w-[130px] md:w-[153px] h-[100px] sm:h-[130px] md:h-[153px] top-[25px] sm:top-[30px] md:top-10 left-[25px] sm:left-[30px] md:left-10 object-cover"
                    alt="Ellipse"
                    src={user6}
                />
            </div>
        </div>
    </div>
    
    )
}

export default CustumerUser