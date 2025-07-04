import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesPreview = () => {

  const categories = [
    {title : "UI Designs", description:"Beautiful user interfaces for mobile, web, and more. Get inspired or share your own!", button:"Browse UI Designs", path:"/category/ui-designs"},
    {title : "UI Designs", description:"Beautiful user interfaces for mobile, web, and more. Get inspired or share your own!", button:"Browse UI Designs", path:"/category/ui-designs"},
    {title : "UI Designs", description:"Beautiful user interfaces for mobile, web, and more. Get inspired or share your own!", button:"Browse UI Designs", path:"/category/ui-designs"}
  ];

  return (
    <section className="w-full py-16 bg-blue-900">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">Explore Categories</h1>
        <p className='text-center mb-8 text-2xl text-gray-100 '>Discover, share, or download creative designs and code – all in one place.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <Link
              key={index}
              to={cat.path}
              className="bg-white shadow-md rounded-xl p-6 text-center border border-gray-200 hover:shadow-xl hover:border-blue-500 transition"
            >
              <div className="text-5xl mb-4">{cat.title}</div>
              <h3 className="text-xl font-semibold text-gray-800">{cat.description}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesPreview;
