import React from 'react';

const Hero = () => {
  return (
    <div
      className="w-screen h-screen bg-cover grid grid-cols-2 bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('/hero.png')` }}
    >
        <div className="text-white space-y-6 ml-16">
        <h1 className="text-5xl font-bold">Your Creative Arsenal for<br/>Modern Web Design</h1>
        <p className="text-lg">
        Discover, share, and download premium UI<br/>
        designs, components, and complete website<br/>
        templates createdby designers and<br/>
        developers worldwide.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded">Button 1</button>
          <button className="bg-white text-blue-600 px-6 py-3 rounded">Button 2</button>
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
