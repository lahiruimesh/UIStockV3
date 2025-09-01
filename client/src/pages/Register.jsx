import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !formData.email.endsWith('@gmail.com') &&
      !formData.email.endsWith('@email.com')
    ) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    try {
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      }else {
        setErrors({});
        console.log('✅ Form is valid. Send to backend:', formData);
        const res = await fetch("http://localhost:5000/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        const data = await res.json();
      if (res.ok) {
        alert("Registered successfully!");
        navigate("/login"); // 🔁 Redirect to login page
      } else {
        alert(data.message || "Registration failed");
      }
      }
    }
    catch (err) {
      console.error(err);
      alert("Error registering user");
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
        <h1 className="text-4xl text-white font-bold">Create Account<br />Unlock Access Now</h1>
      </div>
      <div className="flex justify-end px-8 mr-16">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mt-10 w-full">
        <input name="username" type="text" placeholder="Username" onChange={handleChange} className="p-2 border h-14 opacity-50 rounded" />{errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="p-2 border h-14 opacity-50 rounded" />{errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="p-2 border h-14 opacity-50 rounded" />{errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Register;
