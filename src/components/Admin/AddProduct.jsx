import React, { useState, useContext, useEffect } from 'react';
import Modal from './Modal'; // Modal bileşenini import edin
import { AdminContext } from '../../pages/Admin';

const AddProduct = () => {

    const { product, getProduct } = useContext(AdminContext)

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

    useEffect(() => {
        getProduct()
    }, [])

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
                    {/* <div className="absolute inset-y-0 right-2 flex items-center">
                        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
                            Search
                        </button>
                    </div> */}
                </div>
            </div>

            {searchProductFunc(searchTerm).length > 0 ?
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
                                // onClick={() => handleEditClick(product)}
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
                :
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
                                // onClick={() => handleEditClick(product)}
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


            {/* {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={updateProduct}
                    product={editProductInput}
                    onInputChange={handleEditProduct}
                    onSubcategoryChange={handleSubcategoryChange}
                    subcategories={subcategories}
                    onPictureChange={handleEditPicture}
                />
            )} */}
        </div>
    );
};

export default AddProduct;
