import React, { createContext, useState } from 'react'
import axios from 'axios'

export const FoodContext = createContext()

const env = import.meta.env
const { REACT_APP_BACKEND_HOST } = env

const Context = ({ children }) => {

    // get all product
    const [allProduct, setallProduct] = useState([])
    const getAllProduct = async () => {
        try {
            const response = await axios.get(`${REACT_APP_BACKEND_HOST}/Product`)
            console.log(response.data)
            setallProduct(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    //  get category
    const [category, setcategory] = useState([])
    const getCategory = async () => {
        try {
            const response = await axios.get(`${REACT_APP_BACKEND_HOST}/Category`)
            // console.log(response.data)
            setcategory(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    // get subcategory
    const [subCategory, setsubCategory] = useState([])
    const getSubCategory = async (categoryId) => {
        try {
            const response = await axios.get(`${REACT_APP_BACKEND_HOST}/SubCategory/${categoryId}`)
            // console.log(response.data)
            setsubCategory(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    // get product
    const [product, setproduct] = useState([])
    const getProduct = async (subcategoryId) => {
        setallProduct([])
        try {
            const response = await axios.get(`${REACT_APP_BACKEND_HOST}/Product/${subcategoryId}`)
            console.log(response.data)
            setproduct(response.data)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <FoodContext.Provider value={{
            // category
            getCategory,
            category,
            // subcategory
            getSubCategory,
            subCategory,
            // product
            getProduct,
            product,
            // all product
            getAllProduct,
            allProduct,

        }}>
            {children}
        </FoodContext.Provider>
    )
}

export default Context