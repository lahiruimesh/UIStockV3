import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      /*
      console.log(data);
      alert("Registered successfully!");
    } */
      const data = await res.json();
      if (res.ok) {
        alert("Registered successfully!");
        navigate("/login"); // 🔁 Redirect to login page
      } else {
        alert(data.message || "Registration failed");
      }
    } 
    
    catch (err) {
      console.error(err);
      alert("Error registering user");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto mt-10">
      <input name="username" type="text" placeholder="Username" onChange={handleChange} className="p-2 border" />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} className="p-2 border" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="p-2 border" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>
    </form>
  );
};

export default Register;
