import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  // Fetch all products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
  <div className="min-h-screen bg-gradient-to-br from-[#0a0e2a] via-[#201E54] to-[#03051a] p-8">
    <h1 className="text-4xl mt-20 font-extrabold text-center text-white mb-2 tracking-wide">
      Explore All Products
    </h1>
    <p className="text-gray-300 text-center mb-16 text-xl mb-12">
      Browse through all the products added by our community.
    </p>

    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition transform duration-300"
        >
          {/* Product Image */}
          {product.images?.length > 0 && (
          <img
            src={product.images[1]}
            alt={product.title}
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
        )}


          {/* Product Info */}
          <h2 className="text-xl font-bold text-white">{product.title}</h2>
          <p className="text-gray-300 text-sm mt-1">{product.description}</p>
          <p className="text-green-400 font-semibold mt-2">{product.category}</p>
          

          {/* User Info */}
          {product.userId?.email && (
            <p className="text-xs text-gray-400 mt-3">
              Added by <span className="text-blue-300">{product.userId.email}</span>
            </p>
          )}

          {/* Link */}
          <Link
            to={`/products/${product._id}`}
            className="mt-4 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-medium transition"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  </div>
);

};

export default AllProducts;
