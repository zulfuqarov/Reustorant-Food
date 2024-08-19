import React from 'react'
import Welcome from '../components/Home/Welcome'
import Category from '../components/PropsComponents/Category'
import OurPopular from '../components/Home/OurPopular'
import Card from '../components/PropsComponents/Card'
import Paginations from '../components/PropsComponents/Paginations'
import ChefPopular from '../components/Home/ChefPopular'
import Reservation from '../components/Home/Reservation'
import ChefCard from '../components/Home/ChefCard'
import Button from '../components/PropsComponents/Button'
import OurCustumers from '../components/Home/OurCustumers'
import CustomersCard from '../components/Home/CustomersCard'
import CustumerUser from '../components/Home/CustumerUser'
import Open from '../components/Home/Open'
import ProductCategory from '../components/PropsComponents/ProductCategory'
const Home = () => {
    return (
        <section>
            <Welcome />
            <OurPopular />
            <Category />
            <div>
                <div>
                    <ProductCategory />
                </div>
                <Card />
            </div>
            <Paginations />
            <Reservation />
            <ChefPopular />
            <div className='grid grid-cols-3 gap-4 pt-[80px] max-[991px]:grid-cols-2 max-[768px]:grid-cols-1 '>
                <ChefCard color="bg-slate-600" />
                <ChefCard color="bg-orange-600" />
                <ChefCard color="bg-green-600" />
            </div>
            <div className='pt-[60px] flex justify-center items-center'>
                <Button title='View all' />
            </div>
            <OurCustumers />
            <CustomersCard />
            <CustumerUser />
            <Open />
        </section>
    )
}

export default Home