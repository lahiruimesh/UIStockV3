import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error('Failed to fetch product details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center text-white mt-20">Loading...</p>;
  if (!product) return <p className="text-center text-red-500 mt-20">Product not found.</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e2a] via-[#201E54] to-[#03051a] flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
        
        {/* Left Side - Image */}
        {product.image && (
        <img
          src={product.image}
          alt={product.title}
          className="w-80 h-80 md:w-[400px] md:h-[400px] rounded-xl shadow-lg object-cover"
        />
      )}


        {/* Right Side - Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold mb-3">{product.title}</h1>
            <p className="text-gray-300 mb-2">{product.description}</p>
            <p className="text-green-400 font-semibold mb-4">{product.category}</p>
            {product.message && (
              <p className="text-gray-300 mb-4">{product.message}</p>
            )}

            {product.userId?.email && (
              <p className="text-sm text-gray-400 mb-6">
                Added by <span className="text-blue-300">{product.userId.email}</span>
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            {product.link && (
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-center transition"
              >
                Visit Product
              </a>
            )}

            {product.file && (
              <a
                href={product.file}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg text-center transition"
              >
                Open File
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
