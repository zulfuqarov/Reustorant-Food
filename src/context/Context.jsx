import React, { createContext, useState } from 'react'
import axios from 'axios'

export const FoodContext = createContext()

const env = import.meta.env
const { REACT_APP_BACKEND_HOST } = env

const Context = ({ children }) => {

    const [loading, setloading] = useState(false)

    // get product 
    const [product, setproduct] = useState([])

    // get all product
    const [allProduct, setallProduct] = useState([])
    const [totalPage, settotalPage] = useState()
    const [currentPage, setcurrentPage] = useState(1)
    const getAllProduct = async () => {
        setproduct([])
        setcurrentPage(1)
        setloading(true)
        try {
            const response = await axios.get(`${REACT_APP_BACKEND_HOST}/Product`)
            // console.log(response.data)
            console.log('1')
            setloading(false)
            setallProduct(response.data.allProduct)
            settotalPage(response.data.totalPages)
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
    const getProduct = async (subcategoryId) => {
        setallProduct([])
        setcurrentPage(1)
        setloading(true)
        try {
            const response = await axios.get(`${REACT_APP_BACKEND_HOST}/Product/${subcategoryId}`)
            // console.log(response)
            setproduct(response.data.productsBySubcategory)
            settotalPage(response.data.totalPages)
            setloading(false)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <FoodContext.Provider value={{
            REACT_APP_BACKEND_HOST,
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
            // total page
            totalPage,
            currentPage,
            setcurrentPage,
            // loading
            loading

        }}>
            {children}
        </FoodContext.Provider>
    )
}

export default Context