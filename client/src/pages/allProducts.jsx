import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-600 font-medium mt-2">{product.category}</p>
            <p className="text-gray-600">{product.message}</p>
            {product.image && (
                <img
                    src={`http://localhost:5000/uploads/${product.image}`}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-lg mt-2"
                />
                )}
            <p className="text-gray-600">{product.file}</p>
            <p className="text-gray-600">{product.link}</p>
            {product.userId?.email && (
              <p className="text-sm text-gray-400 mt-1">
                Added by: {product.userId.email}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
