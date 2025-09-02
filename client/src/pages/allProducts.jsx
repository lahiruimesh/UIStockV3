import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (query = '') => {
    setLoading(true);
    try {
      const res = query
        ? await axios.get(`http://localhost:5000/api/products/search?query=${query}`)
        : await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProducts(searchQuery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e2a] via-[#201E54] to-[#03051a] p-8">
      <h1 className="text-4xl mt-20 font-extrabold text-center text-white mb-2 tracking-wide">
        Explore All Products
      </h1>
      <p className="text-gray-300 text-center mb-16 text-xl">
        Browse through all the products added by our community.
      </p>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex justify-center mb-12 gap-2"
      >
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 w-1/2 md:w-1/3 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {loading ? (
        <p className="text-center text-white">Loading...</p>
      ) : products.length === 0 ? (
        <p className="text-center text-red-400">No products found.</p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition transform duration-300"
            >
              {product.images?.length > 0 && (
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
              )}

              <h2 className="text-xl font-bold text-white">{product.title}</h2>
              <p className="text-gray-300 text-sm mt-1">{product.description}</p>
              <p className="text-green-400 font-semibold mt-2">{product.category}</p>

              {product.userId?.email && (
                <p className="text-xs text-gray-400 mt-3">
                  Added by <span className="text-blue-300">{product.userId.email}</span>
                </p>
              )}

              <Link
                to={`/products/${product._id}`}
                className="mt-4 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-medium transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
