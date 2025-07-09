import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesPreview = () => {

  const categories = [
    {title : "UI Designs", description:"Beautiful user interfaces for mobile, web, and more. Get inspired or share your own!", button:"Browse UI Designs", path:"/category/ui-designs",image:"https://th.bing.com/th/id/OIP.qmnUHFw_JFwK1WZGW4UdGgHaFj?w=225&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    {title : "Web Designs", description:"Complete web page layouts and creative website templates from real designers.", button:"Browse UI Designs", path:"/category/ui-designs",image:"https://th.bing.com/th/id/OIP.qmnUHFw_JFwK1WZGW4UdGgHaFj?w=225&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    {title : "Website Codes", description:"Download or upload HTML, CSS, JS code for stunning website components.", button:"Browse UI Designs", path:"/category/ui-designs",image:"https://th.bing.com/th/id/OIP.qmnUHFw_JFwK1WZGW4UdGgHaFj?w=225&h=180&c=7&r=0&o=7&pid=1.7&rm=3"}
  ];

  return (
    <section className="w-full py-16 bg-blue-900">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-2 text-white">Explore Categories</h1>
        <p className='text-center mb-12 text-2xl text-gray-100 '>Discover, share, or download creative designs and code – all in <br />one place.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <Link
              key={index}
              to={cat.path}
              className="bg-gradient-to-b from-purple-700 to-black shadow-md rounded-xl p-6 text-center hover:shadow-2xl transition"
            >
              <h1 className="text-3xl mb-6">{cat.title}</h1>
              <img src= { cat.image } alt="images" />
              <h3 className="text-xl font-semibold mt-10 text-gray-800">{cat.description}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesPreview;
