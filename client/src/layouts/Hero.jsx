import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();

  return (
    <div
      className="w-screen h-screen bg-cover grid grid-cols-2 bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('/hero.png')` }}
    >
        <div className="text-white space-y-6 ml-16 pt-6">
        <h1 className="text-5xl font-bold">Your Creative Arsenal for<br/>Modern Web Design</h1>
        <p className="text-lg">
        Discover, share, and download premium UI<br/>
        designs, components, and complete website<br/>
        templates createdby designers and<br/>
        developers worldwide.
        </p>
        <div className="grid grid-cols-3 pt-4">
          <Link to="/allProducts" className="bg-blue-700 text-white text-center px-2 py-3 w-48 rounded-lg hover:bg-white hover:text-blue-600">Our Products</Link>
          <Link to="addProduct" className="bg-white text-blue-700 text-center px-2 py-3 w-48 rounded-lg hover:bg-blue-700 hover:text-white">Add Products</Link>
        </div>
      </div>
        
        <div>
        <img
          src="/image1.png"
          alt="Hero Graphic"
          className="max-w-full h-[480px] ml-[120px] mt-[80px]"
        />
        </div>
      
    </div>
  );
};

export default Hero;
