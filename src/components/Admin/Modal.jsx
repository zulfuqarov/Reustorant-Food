import React from 'react';

const Modal = ({ isOpen, onClose, onSubmit, product, onInputChange, onSubcategoryChange, subcategories, onPictureChange }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]">
                <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
                <div>
                    <input
                        value={product.name}
                        onChange={onInputChange}
                        name="name"
                        type="text"
                        placeholder="Product Name"
                        className="p-2 border border-gray-300 rounded-lg w-full mb-2"
                    />
                    <textarea
                        value={product.description}
                        onChange={onInputChange}
                        name="description"
                        placeholder="Product Description"
                        className="p-2 border border-gray-300 rounded-lg w-full mb-2"
                    />
                    <input
                        value={product.price}
                        onChange={onInputChange}
                        name="price"
                        type="number"
                        placeholder="Product Price"
                        className="p-2 border border-gray-300 rounded-lg w-full mb-2"
                    />
                    <select
                        multiple
                        value={product.subcategory.map(sub => sub._id)}
                        onChange={onSubcategoryChange}
                        className="p-2 border border-gray-300 rounded-lg w-full mb-2"
                    >
                        {subcategories.map(subcategory => (
                            <option key={subcategory._id} value={subcategory._id} label={subcategory.name}>
                                {subcategory.name}
                            </option>
                        ))}
                    </select>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={onPictureChange}
                        className="p-2 border border-gray-300 rounded-lg w-full mb-2"
                    />
                    {product.picture && (
                        <img
                            src={product.picture}
                            alt="Preview"
                            className="w-24 h-24 object-cover rounded-lg mt-2"
                        />
                    )}
                </div>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white p-2 rounded-lg mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onSubmit}
                        className="bg-green-500 text-white p-2 rounded-lg"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
