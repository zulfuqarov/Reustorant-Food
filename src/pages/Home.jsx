import React from 'react'
import Welcome from '../components/Home/Welcome'
import Category from '../components/Home/Category'
import OurPopular from '../components/Home/OurPopular'
import Card from '../components/Home/Card'
import Paginations from '../components/Home/Paginations'
import ChefPopular from '../components/Home/ChefPopular'
import Reservation from '../components/Home/Reservation'
const Home = () => {
    return (
        <section>
            <Welcome />
            <OurPopular />
            <Category />
            <div className='grid grid-cols-3 gap-4 pt-[80px] max-[991px]:grid-cols-2 max-[768px]:grid-cols-1'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Paginations />
            <Reservation />
            <ChefPopular />
        </section>
    )
}

export default Home