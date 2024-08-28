import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { FoodContext } from '../../context/Context'
import { toast } from 'react-toastify'
import { AdminContext } from '../../pages/Admin'

const AddCategory = () => {

    const context = useContext(FoodContext)
    const { getCategory, category } = useContext(AdminContext)


    // handleAddInput
    const [inputCategoryAdd, setinputCategoryAdd] = useState('')
    const handleAddInput = (e) => {
        setinputCategoryAdd(e.target.value)
    }

    // handleChangeInput
    const [inputCategory, setinputCategory] = useState('')
    const handleChangeInput = (e) => {
        setinputCategory(e.target.value)
    }

    // show edit
    const [editIndex, setEditIndex] = useState(null)
    const handleEditClick = (index) => {
        setEditIndex(index)
    }



    // add catagory
    const [addCategory, setaddCategory] = useState()
    const addCategoryFunc = async () => {
        try {
            const response = await axios.post(`${context.REACT_APP_BACKEND_HOST}/Category/`, {
                name: inputCategoryAdd
            })
            setaddCategory(response.data)
            toast.success(`Category successfully added`)
        } catch (error) {
            console.log(error)
            toast.error(`${error.response.data.message}`)
        }
    }

    // save edit category
    const [saveCategoryResponse, setsaveCategoryResponse] = useState()
    const saveCategory = async (id) => {
        try {
            const response = await axios.post(`${context.REACT_APP_BACKEND_HOST}/Category/Update/${id}`, {
                name: inputCategory
            })
            setsaveCategoryResponse(response.data)
            toast.success(`Category successfully updated`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setinputCategory('')
            setEditIndex(null)
        } catch (error) {
            console.log(error)
            toast.error(`${error.response.data.message}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    // delete category
    const [deleteCategory, setdeleteCategory] = useState()
    const deleteCategoryFunc = async (id) => {
        try {
            const response = await axios.delete(`${context.REACT_APP_BACKEND_HOST}/Category/${id}`)
            setdeleteCategory(response.data)
            toast.success(`Category successfully deleted`)
        } catch (error) {
            console.log(error)
            toast.error(`${error.response.data.message}`)
        }
    }




    useEffect(() => {
        getCategory()
    }, [saveCategoryResponse, addCategory, deleteCategory])

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Add New Category</h2>
                <div className="mb-4">
                    <input
                        value={inputCategoryAdd}
                        onChange={handleAddInput}
                        type="text"
                        placeholder="Category Name"
                        className="p-2 border border-gray-300 rounded-lg w-full mb-2"
                    />
                    <button
                        onClick={addCategoryFunc}
                        className="bg-blue-500 text-white p-2 rounded-lg"
                    >
                        Add Category
                    </button>
                </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Manage Category</h2>
                {category.map((category, index) => (
                    <div key={index} className="flex items-center justify-between mb-2">
                        {editIndex === index ? (
                            <div className="flex-1 mr-4">
                                <input
                                    value={inputCategory}
                                    onChange={handleChangeInput}
                                    type="text"
                                    placeholder="Category Name"
                                    className="p-2 border border-gray-300 rounded-lg w-full mb-2"
                                />
                            </div>
                        ) : (
                            <div>
                                <p className="text-lg">{category.name}</p>
                            </div>
                        )}
                        <div>
                            {editIndex === index ? (
                                <button
                                    onClick={() => saveCategory(category._id)}
                                    className="bg-green-500 text-white p-2 rounded-lg mr-2"
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    onClick={() => handleEditClick(index)}
                                    className="bg-yellow-500 text-white p-2 rounded-lg mr-2"
                                >
                                    Edit
                                </button>
                            )}
                            <button
                                onClick={() => deleteCategoryFunc(category._id)}
                                className="bg-red-500 text-white p-2 rounded-lg"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AddCategory
