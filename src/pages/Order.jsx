import React from 'react'
import MenuTitle from '../components/Order-online/MenuTitle'
import Category from '../components/PropsComponents/Category'
import Card from '../components/PropsComponents/Card'
import Paginations from '../components/PropsComponents/Paginations'
import ProductCategory from '../components/PropsComponents/ProductCategory'

const Order = () => {
    return (
        <div className='pt-[30px]'>
            <MenuTitle />
            <Category />
            <div>
                <div>
                    <ProductCategory />
                </div>
                <div className='grid grid-cols-3 gap-4 pt-[80px] max-[991px]:grid-cols-2 max-[768px]:grid-cols-1'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <Paginations />
        </div>
    )
}

export default Order