import React from 'react';
import { Link } from 'react-router-dom';
import ui from '../assets/ui.png';
import web from '../assets/web.png';
import codes from '../assets/codes.png';

const CategoriesPreview = () => {

  const categories = [
    {
      title: "UI / UX",
      description:
        "Explore clean and modern user interface and user experience designs wireframes, mockups, and prototypes crafted for mobile and web apps.",
      button: "Browse UI / UX Designs",
      path: "/category/ui-ux",
      image: ui,
    },
    {
      title: "Web Templates",
      description:
        "Find complete website templates and reusable code components. You can upload full websites, page templates, or individual components with design and code.",
      button: "Browse Web Templates & Code",
      path: "/category/web-templates",
      image: web,
    },
    {
      title: "Graphic Design",
      description:
        "Download or share creative graphic assets like logos, posters, icons, and social media visuals for your branding and marketing needs.",
      button: "Browse Graphic Designs",
      path: "/category/graphic-designs",
      image: codes,
    }
  ];
  

  return (
    <section className="w-full min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center text-white mb-4">Explore Categories</h1>
        <p className="text-center text-xl text-gray-300 mb-16">
          Discover, share, or download creative designs and code –<br />all in one place.
        </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {categories.map((cat, index) => (
            <Link
              key={index}
              to={cat.path}
              className="bg-gradient-to-b from-[#413EA2] to-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <img
                className="w-48 h-36 object-cover rounded-lg mb-6 mt-4 shadow-md"
                src={cat.image}
                alt={cat.title}
              />
              <h2 className="text-2xl font-semibold text-white mb-8">{cat.title}</h2>
              <p className="text-gray-300 text-lg text-center mb-6">{cat.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
  
};

export default CategoriesPreview;
