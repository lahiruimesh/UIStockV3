import { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: ""
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
        setProduct({ name: "", description: "", price: "" });
      } else {
        alert(data.message || "Failed to add product");
      }
    } catch (err) {
      console.error(err);
      alert("Error adding product");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 flex flex-col gap-4">
      <input name="name" type="text" placeholder="Product Name" onChange={handleChange} className="p-2 border" value={product.name} />
      <input name="description" type="text" placeholder="Description" onChange={handleChange} className="p-2 border" value={product.description} />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} className="p-2 border" value={product.price} />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Add Product</button>
    </form>
  );
};

export default AddProduct;
