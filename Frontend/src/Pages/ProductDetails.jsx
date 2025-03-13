import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product details:', error);
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [productId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
        <div className="  h-[calc(100vh-5rem)]  w-full">
            <div className=" rounded-lg p-6  bg-white">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-contain mb-6 rounded-md"
                />
                <h2 className="text-2xl font-bold mb-3">{product.title}</h2>
                <p className="text-xl text-gray-800 mb-3">${product.price}</p>
                <p className="text-md text-gray-500 mb-4">{product.category}</p>
                <p className="text-gray-700 mb-6">{product.description}</p>
                <div className='flex items-center justify-between'>
                    <div className="flex items-center mt-4">
                        <button onClick={decrementQuantity} className="bg-gray-200 text-black px-3 py-2 rounded-l-md hover:bg-gray-300">
                            <FaMinus />
                        </button>
                        <span className="px-4 text-lg">{quantity}</span>
                        <button onClick={incrementQuantity} className="bg-gray-200 text-black px-3 py-2 rounded-r-md hover:bg-gray-300">
                            <FaPlus />
                        </button>
                    </div>
                    <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
                        Add to Cart
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;