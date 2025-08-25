import { useState } from "react";
import React from "react";
import image from "../assets/up.png";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    image: null,
    link: "",
    file: "",
    message: ""
  });

  // Handle text input and select changes
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Handle image file input
  const handleFileChange = (e) => {
    setProduct((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  // Submit form using FormData
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    // Required fields
    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("description", product.description);
    formData.append("category", product.category);
    formData.append("image", product.image); // File
    formData.append("link", product.link);
    if (product.file.trim()) {
    formData.append("file", product.file);
  }  if (product.message.trim()) {
    formData.append("message", product.message.trim());
  }
    
    
    try {
      const res = await fetch("http://localhost:5000/api/products/add", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
          // Note: DO NOT manually set "Content-Type" with FormData
        },
        body: formData
      });

      const data = await res.json();
      if (res.ok) {
        alert("Product added!");
        setProduct({
          title: "",
          description: "",
          category: "",
          image: null,
          link: "",
          file: "",
          message: ""
        });
      } else {
        alert(data.message || "Failed to add product");
      }
    } catch (err) {
      console.error(err);
      alert("Error adding product");
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-[#0a0e2a] via-[#201E54] to-[#03051a] flex items-center justify-center p-6">
    <div className="w-full mt-24 mb-20 max-w-6xl bg-white/5 backdrop-blur-md rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Left Side - Form */}
      <div>
        <div className="text-center md:text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Showcase Your Creation</h1>
          <p className="text-gray-300 text-sm">
            Submit your design, code, or template to showcase your creativity.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="title"
            type="text"
            placeholder="Title"
            onChange={handleChange}
            value={product.title}
            required
            className="p-3 rounded-md border border-gray-600 bg-white/10 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="description"
            type="text"
            placeholder="Description"
            onChange={handleChange}
            value={product.description}
            required
            className="p-3 rounded-md border border-gray-600 bg-white/10 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="category"
            onChange={handleChange}
            value={product.category}
            required
            className="p-3 rounded-md border border-gray-600 bg-white/10 text-gray-300 focus:outline-none focus:ring-2"
          >
            <option value="">Select a category</option>
            <option value="UI Design">UI Design</option>
            <option value="UX Design">UX Design</option>
            <option value="Web Design">Web Design</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Illustration">Illustration</option>
            <option value="Motion Graphics">Motion Graphics</option>
            <option value="Product Design">Product Design</option>
            <option value="Branding">Branding</option>
            <option value="Print Design">Print Design</option>
          </select>

          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="p-1 rounded-md border border-gray-600 bg-white/10 text-white 
             file:mr-2 file:py-1 file:px-3 file:text-sm 
             file:rounded-md file:border-0 file:bg-blue-600 file:text-white file:cursor-pointer"/>
          </div>  

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="link"
            type="text"
            placeholder="Github Repo or Live Link"
            onChange={handleChange}
            value={product.link}
            className="p-3 rounded-md border border-gray-600 bg-white/10 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="file"
            type="text"
            placeholder="Other Link (eg: Figma, Dribbble, Behance)"
            onChange={handleChange}
            value={product.file}
            className="p-3 rounded-md border border-gray-600 bg-white/10 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          </div>
          <textarea
            name="message"
            placeholder="Message or Notes"
            onChange={handleChange}
            value={product.message}
            className="p-3 rounded-md border border-gray-600 bg-white/10 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold p-3 rounded-md mt-2"
          >
            Add Product
          </button>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="flex items-center justify-center">
        <img 
          src={image} 
          alt="Creative Upload" 
          className="rounded-xl shadow-lg w-96 h-auto object-cover"
        />
      </div>
    </div>
  </div>
);
};

export default AddProduct;
