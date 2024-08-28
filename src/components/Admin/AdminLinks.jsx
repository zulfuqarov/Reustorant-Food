import React from 'react';
import { Link } from 'react-router-dom';

const AdminLinks = () => {
    return (
        <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
            <Link
                to="Add-Category"
                className="w-full text-center py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors duration-300"
            >
                Category
            </Link>
            <Link
                to="Add-SubCategory"
                className="w-full text-center py-2 px-4 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors duration-300"
            >
                SubCategory
            </Link>
            <Link
                to="Add-Product"
                className="w-full text-center py-2 px-4 rounded-lg bg-purple-500 text-white font-semibold hover:bg-purple-600 transition-colors duration-300"
            >
                Product
            </Link>
        </div>
    );
};

export default AdminLinks;
