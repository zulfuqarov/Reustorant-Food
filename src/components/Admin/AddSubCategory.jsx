import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { FoodContext } from '../../context/Context'
const AddSubCategory = ({ category, getSubCategory, subCategory }) => {

    const context = useContext(FoodContext)

    // show edit
    const [editIndex, setEditIndex] = useState(null)
    const handleEditClick = (index) => {
        setEditIndex(index)
    }

    // save edit subCategory
    const CancelCategory = async () => {
        try {
            setEditIndex(null)
        } catch (error) {
            console.log(error)
        }
    }

    // subcategory input and section
    const [categoryInput, setCategoryInput] = useState([]);
    const handleChangeCategory = (e) => {
        const { value, checked } = e.target;
        setCategoryInput(
            checked ? [...categoryInput, value] : categoryInput.filter(
                (category) => category !== value
            )
        )
    };

    const [subCategoryInput, setsubCategoryInput] = useState('')
    const handleChangeSubCategory = (e) => {
        setsubCategoryInput(e.target.value)
    }

    const [addSubCategory, setaddSubCategory] = useState()
    const addSubCategoryFunc = async () => {
        try {
            const response = await axios.post(`${context.REACT_APP_BACKEND_HOST}/SubCategory`, {
                name: subCategoryInput,
                category: categoryInput,
            })
            toast.success('Subcategory added successfully')
            setaddSubCategory(response.data)
            setsubCategoryInput('')
            setCategoryInput([])
        } catch (error) {
            console.log(error)
            toast.error(`${error.response.data.message}`)
        }
    }

    const [EditSubCategoryInput, setEditSubCategoryInput] = useState('')
    const handleEditSubCategory = (e) => {
        setEditSubCategoryInput(e.target.value)
    }

    // editSubCategoryName
    const [editSubCategoryName, seteditSubCategoryName] = useState()
    const editSubCategoryNameFunc = async (id) => {
        try {
            const response = await axios.post(`${context.REACT_APP_BACKEND_HOST}/SubCategory/categoryName/${id}`, {
                name: EditSubCategoryInput,
            })
            seteditSubCategoryName(response.data)
            toast.success('Subcategory name updated successfully')
            setEditSubCategoryInput('')
        } catch (error) {
            console.log(error)
            toast.error(`${error.response.data.message}`)
        }
    }

    // editSubCategoryAdd
    const [editSubCategoryAdd, seteditSubCategoryAdd] = useState()
    const editSubCategoryAddFunc = async (_id, id) => {
        try {
            const response = await axios.post(`${context.REACT_APP_BACKEND_HOST}/SubCategory/categoryPush/${_id}`, {
                id: [id]
            })
            seteditSubCategoryAdd(response.data)
            toast.success('Subcategory category updated successfully')
        } catch (error) {
            console.log(error)
            toast.error(`${error.response.data.message}`)
        }
    }

    // editSubCategoryPull
    const [editSubCategoryPull, seteditSubCategoryPull] = useState()
    const editSubCategoryPullFunc = async (_id, id) => {
        try {
            const response = await axios.post(`${context.REACT_APP_BACKEND_HOST}/SubCategory/categoryPull/${_id}`, {
                id: [id]
            })
            seteditSubCategoryPull(response.data)
            toast.success('Subcategory category updated successfully')
        } catch (error) {
            console.log(error)
            toast.error(`${error.response.data.message}`)
        }
    }

    // delete subCategory
    const [deleteSubCategory, setdeleteSubCategory] = useState()
    const deleteSubCategoryFunc = async (id) => {
        try {
            const response = await axios.delete(`${context.REACT_APP_BACKEND_HOST}/SubCategory/${id}`)
            setdeleteSubCategory(response.data)
            toast.success(`Subcategory successfully deleted`)
        } catch (error) {
            console.log(error)
            toast.error(`${error.response.data.message}`)
        }
    }



    useEffect(() => {
        getSubCategory()
    }, [addSubCategory, editSubCategoryName, deleteSubCategory, editSubCategoryAdd, editSubCategoryPull])

    return (
        <div className="p-6 bg-gray-100 min-h-screen">

            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Add New SubCategory</h2>
                <div className="mb-4">
                    <input
                        value={subCategoryInput}
                        onChange={handleChangeSubCategory}
                        type="text"
                        placeholder="SubCategory Name"
                        className="p-2 border border-gray-300 rounded-lg w-full mb-2"
                    />
                    <div className="mb-2">
                        <p className="font-semibold mb-2">Select Categories</p>
                        {
                            category &&
                            category.map((oneMap, index) => (
                                <label key={index} className="block mb-2">
                                    <input
                                        onChange={handleChangeCategory}
                                        name={oneMap.name}
                                        type="checkbox"
                                        value={oneMap._id}
                                        className="mr-2"
                                    />
                                    {oneMap.name}
                                </label>
                            ))
                        }
                    </div>
                    <button
                        onClick={addSubCategoryFunc}
                        className="bg-blue-500 text-white p-2 rounded-lg"
                    >
                        Add SubCategory
                    </button>
                </div>
            </div>


            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Manage SubCategory</h2>
                {subCategory.map((OnesubCategory, index) => (
                    <div key={index} className="flex items-center justify-between mb-2">
                        {editIndex === index ? (
                            <div className="flex-1 mr-4">
                                <div className='flex justify-between items-center w-full'>
                                    <input
                                        value={EditSubCategoryInput}
                                        onChange={handleEditSubCategory}
                                        type="text"
                                        placeholder="SubCategory Name"
                                        className="p-2 border border-gray-300 rounded-lg w-[50%] mb-2"
                                    />
                                    <button
                                        onClick={() => editSubCategoryNameFunc(OnesubCategory._id)}
                                        className="bg-green-500 text-white p-2 rounded-lg mr-2"
                                    >
                                        Change
                                    </button>
                                </div>
                                <div className="mb-2">
                                    {
                                        category &&
                                        category.map((oneMap, indexs) => (
                                            <div key={indexs} className="block mb-2">
                                                <div className="flex justify-between items-center bg-gray-100 rounded p-2 shadow">
                                                    <p className="text-lg font-semibold">{oneMap.name}</p>

                                                    {OnesubCategory.category.some(cat => cat._id === oneMap._id) ? (
                                                        <button
                                                            className="ml-4 font-medium text-red-500"
                                                            onClick={() => editSubCategoryPullFunc(OnesubCategory._id, oneMap._id)}
                                                        >
                                                            Remove
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="ml-4 font-medium text-green-500"
                                                            onClick={() => editSubCategoryAddFunc(OnesubCategory._id, oneMap._id)}
                                                        >
                                                            Add
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ) : (
                            <div>
                                <p className="text-lg">{OnesubCategory.name}</p>
                            </div>
                        )}
                        <div>
                            {editIndex === index ? (
                                <button
                                    onClick={CancelCategory}
                                    className="bg-yellow-500 text-white p-2 rounded-lg mr-2"
                                >
                                    Cancel
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
                                onClick={() => deleteSubCategoryFunc(OnesubCategory._id)}
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

export default AddSubCategory