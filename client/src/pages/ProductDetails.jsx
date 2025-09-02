import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate(`/contactOwner/${product.userId?._id}`);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Failed to fetch product details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return <p className="text-center text-white mt-20">Loading...</p>;
  if (!product)
    return (
      <p className="text-center text-red-500 mt-20">Product not found.</p>
    );

  // Image Carousel
  const nextImage = () => {
    if (product.images?.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevImage = () => {
    if (product.images?.length > 0) {
      setCurrentIndex(
        (prev) => (prev - 1 + product.images.length) % product.images.length
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e2a] via-[#201E54] to-[#03051a] text-white p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        {/* Image Carousel */}
        {product.images?.length > 0 && (
          <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-xl mt-28 mb-32">
            <img
              src={product.images[currentIndex]}
              alt={product.title}
              className="w-full h-full object-cover"
            />

            {/* Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full"
            >
              <ChevronLeft size={28} className="text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full"
            >
              <ChevronRight size={28} className="text-white" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {product.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-white" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Product Details */}
        <div className="mt-8 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
          <h1 className="text-3xl font-extrabold mb-3">{product.title}</h1>
          <p className="text-gray-300 mb-2">{product.description}</p>
          <p className="text-green-400 font-semibold mb-4">{product.category}</p>

          {product.message && (
            <p className="text-gray-300 mb-4">{product.message}</p>
          )}

          {product.userId?.email && (
            <p className="text-sm text-gray-400 mb-6">
              Added by{" "}
              <span className="text-blue-300">{product.userId.email}</span>
            </p>
          )}

          {/* Tech Stack Section */}
          {product.stack && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-400">Tech Stack:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {(Array.isArray(product.stack) ? product.stack : product.stack.split(',')).map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-900/70 text-blue-200 px-3 py-1 rounded-full text-sm shadow-md"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        )}



          {/* Buttons Section */}
          <div className="flex flex-col md:flex-row flex-wrap gap-4 mb-6">
            {product.link && (
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-center transition w-full md:w-auto"
              >
                Explore
              </a>
            )}
            {product.file && (
              <a
                href={product.file}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg text-center transition w-full md:w-auto"
              >
                Open File
              </a>
            )}
            {product.github && (
              <a
                href={product.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg text-center transition w-full md:w-auto"
              >
                GitHub Repo
              </a>
            )}
            {product.figma && (
              <a
                href={product.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg text-center transition w-full md:w-auto"
              >
                Figma Design
              </a>
            )}
            {product.otherLink && (
              <a
                href={product.otherLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg text-center transition w-full md:w-auto"
              >
                Additional Link
              </a>
            )}
            {product.sourceFile && (
              <a
                href={product.sourceFile}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg text-center transition w-full md:w-auto"
              >
                Source File
              </a>
            )}
            <button
              onClick={handleContactClick}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg text-center transition w-full md:w-auto"
            >
              Contact Owner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
