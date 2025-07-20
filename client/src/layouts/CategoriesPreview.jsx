import React from 'react';
import { Link } from 'react-router-dom';
import ui from '../assets/ui.png';
import web from '../assets/web.png';
import codes from '../assets/codes.png';

const CategoriesPreview = () => {

  const categories = [
    {title : "UI Designs", description:"Beautiful user interfaces for mobile, web, and more. Explore clean layouts and modern design trends to inspire your projects.", button:"Browse UI Designs", path:"/allProducts",image: ui },
    {title : "Web Designs", description:"Complete web page layouts and creative website templates. Built with user experience and accessibility in mind for all devices.", button:"Browse UI Designs", path:"/category/ui-designs",image: web },
    {title : "Website Codes", description:"Download or upload HTML, CSS, and JavaScript snippets for stunning components. Speed up development with ready-to-use, customizable code.", button:"Browse UI Designs", path:"/category/ui-designs",image: codes }
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#0a0e2a] via-[#201E54] to-[#03051a]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center text-white mb-4">Explore Categories</h1>
        <p className="text-center text-xl text-gray-300 mb-16">
          Discover, share, or download creative designs and code –<br />all in one place.
        </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {categories.map((cat, index) => (
            <Link
              key={index}
              to={cat.path}
              className="bg-gradient-to-b from-[#413EA2] to-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <img
                className="w-48 h-36 object-cover rounded-lg mb-8 mt-8 shadow-md"
                src={cat.image}
                alt={cat.title}
              />
              <h2 className="text-2xl font-semibold text-white mb-8">{cat.title}</h2>
              <p className="text-gray-300 text-lg text-center mb-8">{cat.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
  
};

export default CategoriesPreview;
