import { useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      });
      const data = await res.json();
      console.log(data);

      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Login successful!");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error logging in");
    }
  };

  return (
    <div
    className="w-screen h-screen bg-cover grid grid-cols-2 bg-center flex items-center justify-center"
    style={{ backgroundImage: `url('/hero.png')` }}
    >
    <div>
    <img
          src="/image2.png"
          alt="Hero Graphic"
          className="max-w-[600px] h-[480px] mr-[220px] mt-[70px]"
        />
    </div>
    <div className="mr-6">
      <div className="text-right flex flex-col items-end mr-24 pt-4">
        <h1 className="text-4xl text-white font-bold">Welcome Back<br />Sign In to Your Account</h1>
      </div>
      <div className="flex justify-end px-8 mr-16">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mt-10 w-full">
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="p-2 border h-14 opacity-50 rounded"  />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="p-2 border h-14 opacity-50 rounded" />
        <button type="submit" className="bg-blue-600 h-12 text-white p-2 rounded">Login</button>
        <p className="text-white text-center">Don’t I have account? <Link to = "/register" className="text-blue-600">Register</Link></p>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
