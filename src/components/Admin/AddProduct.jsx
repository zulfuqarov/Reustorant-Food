import React, { useState, useContext, useEffect } from 'react';
import Modal from './Modal';
import { AdminContext } from '../../pages/Admin';
import axios from 'axios';
import { FoodContext } from '../../context/Context';
import { toast } from 'react-toastify';
import AddProductModal from './AddProductModal';

const AddProduct = () => {

    const { product, getProduct, getSubCategory } = useContext(AdminContext)
    const { REACT_APP_BACKEND_HOST } = useContext(FoodContext)

    // edidt Product
    const [addProductCategory, setaddProductCategory] = useState([])
    const [editProductInput, seteditProductInput] = useState({})
    const handleEditProduct = (e) => {
        const { name, value } = e.target
        seteditProductInput({
            ...editProductInput,
            [name]: value
        })
    }

    const addProductCategoryFunc = (id) => {
        setaddProductCategory([...addProductCategory, id])
    }
    const removeProductCategoryFunc = (id) => {
        setaddProductCategory(addProductCategory.filter(category => category !== id))
    }


    // change File 
    const [inputFile, setinputFile] = useState(null)
    const [selectedImage, setselectedImage] = useState(null)
    const handleChangeFile = (e) => {
        if (!e.target.files[0]) {
            return;
        }
        setinputFile(e.target.files[0])
        setselectedImage(URL.createObjectURL(e.target.files[0]))
    }

    // add Product Modal
    const [addModal, setaddModal] = useState(false)
    const addModalShow = () => {
        setaddModal(true)
        setselectedImage(null)
        setinputFile(null)
        seteditProductInput({})
        setaddProductCategory([])
    }

    // isModalOpen
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleEditClick = (product) => {
        setIsModalOpen(true)
        seteditProductInput(product)
        setinputFile(null)
        setselectedImage(null)
    }

    // add Product
    const [addProduct, setaddProduct] = useState()
    const addProductFunc = async () => {
        try {
            const formData = new FormData();
            formData.append('name', editProductInput.name);
            formData.append('price', editProductInput.price);
            formData.append('description', editProductInput.description);
            formData.append('picture', inputFile);
            formData.append('subcategory', JSON.stringify(addProductCategory));

            const response = await axios.post(`${REACT_APP_BACKEND_HOST}/Product/`, formData)
            setaddProduct(response.data)
            toast.success('Product added successfully')
        } catch (error) {
            console.log(error)
            toast.error('Failed to add product')
        }
    }


    // search Product 
    const [searchTerm, setSearchTerm] = useState('');
    const searchInput = (e) => {
        setSearchTerm(e.target.value)
    }

    const searchProductFunc = (search) => {
        const searchTerm = search.toLowerCase().trim();

        return product.filter((oneFilter) => {

            const nameMatch = oneFilter.name.toLowerCase().trim().includes(searchTerm);

            const subcategoryMatch = oneFilter.subcategory.some(sub =>
                sub.name.toLowerCase().trim().includes(searchTerm)
            );

            return nameMatch || subcategoryMatch;
        });
    };

    // addd SubCategory 
    const [addSubCategory, setaddSubCategory] = useState()
    const addSubCategoryFunc = async (_id, subcategory) => {
        try {
            const response = await axios.post(`${REACT_APP_BACKEND_HOST}/Product/ProductPush/${_id}`, {
                subcategory: [subcategory]
            })
            setaddSubCategory(response.data)
            seteditProductInput(response.data)
            toast.success('Subcategory added successfully')
        } catch (error) {
            console.log(error)
        }
    }

    // remove SubCategory
    const [removeSubCategory, setremoveSubCategory] = useState()
    const removeSubCategoryFunc = async (_id, subcategory) => {
        try {
            const response = await axios.post(`${REACT_APP_BACKEND_HOST}/Product/ProductPull/${_id}`, {
                subcategory: [subcategory]
            })
            setremoveSubCategory(response.data)
            seteditProductInput(response.data)
            toast.success('Subcategory added successfully')
        } catch (error) {
            console.log(error)
        }
    }

    // update Product
    const [updateProduct, setupdateProduct] = useState()
    const updateProductFunc = async (id) => {
        try {
            const fileUpload = new FormData();
            fileUpload.append('name', editProductInput.name);
            fileUpload.append('price', editProductInput.price)
            fileUpload.append('description', editProductInput.description)
            fileUpload.append('picture', inputFile)
            const response = await axios.put(`${REACT_APP_BACKEND_HOST}/Product/ProductUpdate/${id}`, fileUpload)
            console.log(response.data)
            setupdateProduct(response.data.updateProduct)
            seteditProductInput(response.data.updateProduct)
            toast.success('Product updated successfully')
        } catch (error) {
            console.log(error)
            toast.error(`${error.response.data.message}`)
        }
    }

    useEffect(() => {
        getProduct()
    }, [addSubCategory, removeSubCategory, updateProduct, addProduct])

    return (
        <div className="p-4">

            <div className="flex justify-center mt-10">
                <div className="relative w-full max-w-lg">
                    <input
                        onChange={searchInput}
                        type="text"
                        className="w-full p-4 pr-20 text-gray-700 bg-white border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Search for products..."
                    />
                </div>
            </div>

            <div className='w-full flex justify-center my-[30px]'>
                <button
                    onClick={addModalShow}
                    className='className="inline-block  justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold text-lg rounded-lg shadow-md transition-all hover:shadow-lg duration-300 ease-in-out transform hover:scale-105 cursor-pointer"'>Add Product</button>
            </div>

            {
                addModal &&
                <AddProductModal
                    onClose={() => setaddModal(false)}
                    isOpen={addModal}
                    product={editProductInput}
                    handleChangeFile={handleChangeFile}
                    selectedImage={selectedImage}
                    onInputChange={handleEditProduct}
                    addProductCategoryFunc={addProductCategoryFunc}
                    addProductCategory={addProductCategory}
                    removeProductCategoryFunc={removeProductCategoryFunc}
                    addProductFunc={addProductFunc}
                />
            }

            {
                searchTerm.trim().length > 0 ?
                    searchProductFunc(searchTerm).length > 0 ?
                        searchProductFunc(searchTerm).map((product) => (
                            <div key={product._id} className="flex items-center justify-between mb-4 p-4 border-b border-gray-200 bg-white shadow-lg rounded-lg">
                                <div className="flex items-center">
                                    <img
                                        src={product.picture}
                                        alt={product.name}
                                        className="w-24 h-24 object-cover rounded-lg mr-4"
                                    />
                                    <div>
                                        <p className="text-lg font-semibold">{product.name}</p>
                                        <p className="text-sm text-gray-500">{product.description}</p>
                                        <p className="text-md text-gray-700 font-bold">${product.price}</p>
                                        <p className="text-sm text-gray-500">
                                            Subcategory: {product.subcategory.map(sub => sub.name).join(", ")}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <button
                                        onClick={() => handleEditClick(product)}
                                        className="bg-yellow-500 text-white p-2 rounded-lg mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        // onClick={() => deleteProduct(product._id)}
                                        className="bg-red-500 text-white p-2 rounded-lg"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                        : <p className="text-center text-gray-500 bg-gray-100 p-4 rounded-lg shadow-md">
                            No products found
                        </p> :
                    product &&
                    product.map((product) => (
                        <div key={product._id} className="flex items-center justify-between mb-4 p-4 border-b border-gray-200 bg-white shadow-lg rounded-lg">
                            <div className="flex items-center">
                                <img
                                    src={product.picture}
                                    alt={product.name}
                                    className="w-24 h-24 object-cover rounded-lg mr-4"
                                />
                                <div>
                                    <p className="text-lg font-semibold">{product.name}</p>
                                    <p className="text-sm text-gray-500">{product.description}</p>
                                    <p className="text-md text-gray-700 font-bold">${product.price}</p>
                                    <p className="text-sm text-gray-500">
                                        Subcategory: {product.subcategory.map(sub => sub.name).join(", ")}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <button
                                    onClick={() => handleEditClick(product)}
                                    className="bg-yellow-500 text-white p-2 rounded-lg mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    // onClick={() => deleteProduct(product._id)}
                                    className="bg-red-500 text-white p-2 rounded-lg"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
            }


            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    product={editProductInput}
                    onInputChange={handleEditProduct}
                    handleChangeFile={handleChangeFile}
                    selectedImage={selectedImage}
                    addSubCategoryFunc={addSubCategoryFunc}
                    removeSubCategoryFunc={removeSubCategoryFunc}
                    updateProductFunc={updateProductFunc}
                />
            )}
        </div>
    );
};

export default AddProduct;
