import React, { useState, createContext, useContext, useEffect } from "react";
import { FoodContext } from "../context/Context";

import axios from "axios";
import { Outlet } from "react-router";
import AdminLinks from "../components/Admin/AdminLinks";

export const AdminContext = createContext()

const AdminPage = () => {

    const context = useContext(FoodContext)

    // get category
    const [category, setcategory] = useState([])
    const getCategory = async () => {
        try {
            const response = await axios.get(`${context.REACT_APP_BACKEND_HOST}/Category/`)
            setcategory(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    // get subcategory
    const [subCategory, setsubCategory] = useState([])
    const getSubCategory = async () => {
        try {
            const response = await axios.get(`${context.REACT_APP_BACKEND_HOST}/SubCategory/`)
            setsubCategory(response.data.reverse())
        } catch (error) {
            console.log(error)
        }
    }

    // get product
    const [product, setproduct] = useState([])
    const getProduct = async () => {
        try {
            const response = await axios.get(`${context.REACT_APP_BACKEND_HOST}/Product/`)
            setproduct(response.data.allProduct.reverse())
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategory()
        getSubCategory()
    }, [])

    return (
        <AdminContext.Provider value={{ category, getCategory, subCategory, getSubCategory, product, getProduct }}>
            <section>
                <h1 className="text-3xl text-center font-bold mb-4 py-[50px]">Admin Page</h1>
                <AdminLinks />
                <Outlet />
            </section>
        </AdminContext.Provider>
    );
};

export default AdminPage;
