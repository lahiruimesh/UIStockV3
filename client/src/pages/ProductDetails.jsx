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

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="mb-2">{product.description}</p>
      <p className="text-green-600 font-medium mb-2">{product.category}</p>
      {product.image && (
        <img
          src={product.image}
          alt={product.title}
          className="max-w-full h-auto mb-4"
        />
      )}
      <p>{product.message}</p>
      <p><strong>File:</strong> {product.file}</p>
      <p>
        <a href={product.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Product Link
        </a>
      </p>
      {product.userId?.email && (
        <p className="text-sm text-gray-400 mt-4">Added by: {product.userId.email}</p>
      )}
    </div>
  );
};

export default ProductDetails;
