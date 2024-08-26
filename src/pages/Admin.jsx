import React, { useState, useEffect, useContext } from "react";
import AddCategory from "../components/Admin/AddCategory";
import AddSubCategory from "../components/Admin/AddSubCategory";
import { FoodContext } from "../context/Context";

import axios from "axios";

const AdminPage = () => {

    const context = useContext(FoodContext)

    //   const [products, setProducts] = useState([]);
    //   const [editIndex, setEditIndex] = useState(null);
    //   const [editProduct, setEditProduct] = useState({
    //     name: "",
    //     price: "",
    //     subcategory: "",
    //   });
    //   const [newProduct, setNewProduct] = useState({
    //     name: "",
    //     price: "",
    //     subcategory: "",
    //   });

    //   const [subcategories, setSubcategories] = useState([
    //     "Subcategory 1",
    //     "Subcategory 2",
    //     "Subcategory 3",
    //   ]);

    //   useEffect(() => {

    //   }, []);

    //   const handleAddProduct = () => {
    //     // Məhsul əlavə etmək üçün API çağırışını buraya əlavə edin.
    //     setProducts([...products, newProduct]);
    //     setNewProduct({ name: "", price: "", subcategory: "" });
    //   };

    //   const handleDeleteProduct = (index) => {
    //     // Məhsul silmək üçün API çağırışını buraya əlavə edin.
    //     const updatedProducts = products.filter((_, i) => i !== index);
    //     setProducts(updatedProducts);
    //   };

    //   const handleEditClick = (index) => {
    //     setEditIndex(index);
    //     setEditProduct(products[index]);
    //   };

    //   const handleUpdateProduct = () => {
    //     // Məhsul güncəlləmək üçün API çağırışını buraya əlavə edin.
    //     const updatedProducts = products.map((product, i) =>
    //       i === editIndex ? editProduct : product
    //     );
    //     setProducts(updatedProducts);
    //     setEditIndex(null);
    //     setEditProduct({ name: "", price: "", subcategory: "" });
    //   };


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

    return (
        <section>
            <AddCategory category={category} getCategory={getCategory} />
            <AddSubCategory category={category} subCategory={subCategory} getSubCategory={getSubCategory} />
        </section>
    );
};

export default AdminPage;
