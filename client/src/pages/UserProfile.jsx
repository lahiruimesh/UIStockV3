import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setLoading(false);
          return;
        }

        const res = await axios.get("http://localhost:5000/api/profile/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProfile(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Handle product deletion
  const handleDelete = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/products/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Update profile state
      setProfile({
        ...profile,
        products: profile.products.filter((p) => p._id !== productId),
      });
    } catch (err) {
      console.error("Error deleting product:", err);
      alert("Failed to delete product.");
    }
  };

  if (loading)
    return <p className="text-center text-white mt-20">Loading...</p>;
  if (!profile)
    return <p className="text-center text-red-500 mt-20">No profile data.</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e2a] via-[#201E54] to-[#03051a] p-6 text-white">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg mt-24">
        <h1 className="text-3xl font-bold mb-4">👤 {profile.user.username}</h1>
        <p className="mb-2">📧 {profile.user.email}</p>
        <p className="mb-4 text-gray-300">
          Joined: {new Date(profile.user.createdAt).toLocaleDateString()}
        </p>

        <h2 className="text-2xl font-semibold mb-3">My Products</h2>

        {profile.products.length > 0 ? (
          <ul className="space-y-2">
            {profile.products.map((product) => (
              <li
                key={product._id}
                className="bg-white/5 p-3 rounded-md flex justify-between items-center"
              >
                <span>{product.title}</span>
                <div className="flex gap-4">
                  <Link
                    to={`/products/${product._id}`}
                    className="text-blue-400 hover:underline"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="text-red-400 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">You haven’t added any products yet.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
