import React from 'react'
import ReservationsComp from '../components/Reservations/ReservationsComp'
import ReservationCheck from '../components/Reservations/ReservationCheck'

const Reservations = () => {
    return (
        <div className='pt-[70px]'>
            <ReservationsComp />
            <ReservationCheck />
        </div>
    )
}

export default Reservations