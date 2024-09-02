import React, { useContext, useState } from 'react'
import { AdminContext } from '../../pages/Admin';

const AddProductModal = ({ product, onInputChange, onClose, isOpen, selectedImage, handleChangeFile, addProductCategoryFunc, addProductCategory, removeProductCategoryFunc, addProductFunc }) => {

    const { subCategory } = useContext(AdminContext)

    const [showSubCategory, setshowSubCategory] = useState(false)
    const changeSubCategory = () => {
        setshowSubCategory(!showSubCategory)
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Product</h2>
                <div className="space-y-4">
                    <input
                        value={product.name || ''}
                        onChange={onInputChange}
                        name="name"
                        type="text"
                        placeholder="Product Name"
                        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <textarea
                        value={product.description || ''}
                        onChange={onInputChange}
                        name="description"
                        placeholder="Product Description"
                        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        value={product.price || ''}
                        onChange={onInputChange}
                        name="price"
                        type="number"
                        placeholder="Product Price"
                        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleChangeFile}
                        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Preview"
                            className="w-24 h-24 object-cover rounded-lg mt-4"
                        />
                    )}
                </div>
                <div className="flex justify-end mt-6 space-x-3">
                    <button
                        onClick={onClose}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={addProductFunc}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all"
                    >
                        Save
                    </button>
                    <button
                        onClick={changeSubCategory}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        Change Subcategory
                    </button>
                </div>
            </div>
            {showSubCategory && (
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-40">
                    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md max-h-[70vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">Select Subcategories</h3>
                            <button
                                onClick={changeSubCategory}
                                className="text-gray-600 hover:text-gray-800 transition-all"
                            >
                                X
                            </button>
                        </div>
                        {subCategory && subCategory.map((oneMap, indexs) => (
                            <div key={indexs} className="flex justify-between items-center p-2 bg-gray-100 rounded-md mb-2">
                                <p className="text-lg text-gray-700">{oneMap.name}</p>
                                {
                                    addProductCategory.length > 0 ?
                                        addProductCategory.some(id => id === oneMap._id) ? <button
                                            onClick={() => removeProductCategoryFunc(oneMap._id)}
                                            className="text-red-600 hover:text-red-700 transition-all"
                                        >
                                            Remove
                                        </button> : <button
                                            className="text-green-600 hover:text-green-700 transition-all"
                                            onClick={() => addProductCategoryFunc(oneMap._id)}
                                        >
                                            Add
                                        </button>
                                        : <button
                                            className="text-green-600 hover:text-green-700 transition-all"
                                            onClick={() => addProductCategoryFunc(oneMap._id)}
                                        >
                                            Add
                                        </button>
                                }

                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}



export default AddProductModal