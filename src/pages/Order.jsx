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
                <Card />
            </div>
            <Paginations />
        </div>
    )
}

export default Order