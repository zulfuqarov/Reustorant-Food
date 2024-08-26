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
    const saveCategory = async () => {
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


    useEffect(() => {
        getSubCategory()
    }, [addSubCategory])

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
                                <input
                                    type="text"
                                    placeholder="SubCategory Name"
                                    className="p-2 border border-gray-300 rounded-lg w-full mb-2"
                                />
                                <div className="mb-2">
                                    {
                                        category &&
                                        category.map((oneMap, indexs) => (
                                            <label key={indexs} className="block mb-2">
                                                <input
                                                    name={oneMap.name}
                                                    type="checkbox"
                                                    value={oneMap._id}
                                                    className="mr-2"
                                                    checked={indexs <= OnesubCategory.category.length - 1 ? true : false}
                                                />
                                                {oneMap.name}
                                            </label>
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
                                    onClick={saveCategory}
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