import React, { useState } from 'react'
import ReservationsComp from '../components/Reservations/ReservationsComp'
import ReservationCheck from '../components/Reservations/ReservationCheck'
import ReservationsModfy from '../components/Reservations/ReservationsModfy'

const Reservations = () => {

    const [CheckReser, setCheckReser] = useState(false)
    const [ModfyReser, setModfyReser] = useState(false)

    const CheckReservation = () => {
        setCheckReser(!CheckReser)
    }
    const ModfyReservation = () => {
        setModfyReser(!ModfyReser)
        setCheckReser(false)
    }

    return (
        <div className='pt-[70px] '>
            <ReservationsComp CheckReservation={CheckReservation} />
            <ReservationCheck CheckReservation={CheckReservation} CheckReser={CheckReser} ModfyReservation={ModfyReservation} />
            <ReservationsModfy ModfyReser={ModfyReser} ModfyReservation={ModfyReservation} />
        </div>
    )
}

export default Reservations