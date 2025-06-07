import { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
    link: "",
    file: "",
    message: ""
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:5000/api/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(product)
      });

      const data = await res.json();
      if (res.ok) {
        alert("Product added!");
        setProduct({ title: "", description: "", category: "", image: "", link: "", file: "", message: "" });
      } else {
        alert(data.message || "Failed to add product");
      }
    } catch (err) {
      console.error(err);
      alert("Error adding product");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 flex flex-col gap-4">
      <input name="title" type="text" placeholder="Title" onChange={handleChange} className="p-2 border" value={product.title} />
      <input name="description" type="text" placeholder="Description" onChange={handleChange} className="p-2 border" value={product.description} />
      <select
          name="category"
          onChange={handleChange}
          className="p-2 border"
          value={product.category}
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
          <option value="Video">Video</option>
          
      </select>
      <input name="image" type="text" placeholder="Image URL" onChange={handleChange} className="p-2 border" value={product.image} />
      <input name="link" type="text" placeholder="Product Link" onChange={handleChange} className="p-2 border" value={product.link} />
      <input name="file" type="text" placeholder="File URL or Name" onChange={handleChange} className="p-2 border" value={product.file} />
      <textarea name="message" placeholder="Message or Notes" onChange={handleChange} className="p-2 border" value={product.message} />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Add Product</button>
    </form>
  );
};

export default AddProduct;
