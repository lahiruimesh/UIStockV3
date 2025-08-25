import React from 'react';
import { Link } from 'react-router-dom';
import upload from '../assets/uplaod.png';

const UploadPreview = () => {
    return (
        <section className="w-full py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-5xl font-extrabold text-center text-white mb-4">Featured Uploads</h1>
                <p className="text-center text-xl text-gray-300 mb-16">
                    Explore top UI, code, and website designs shared <br />by the community
                </p>

                <div className="bg-gradient-to-b from-[#413EA2] to-gray-900 rounded-2xl shadow-lg p-8 flex flex-col items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <img src={upload} className="w-64 h-64" alt="Featured Upload" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold text-white mb-6">
                                Showcase Your Creative Work
                            </h1>
                            <p className="text-gray-300 text-lg text-left mb-8 pb-2">
                                Share your UI designs, web templates, and graphic assets with a global community of developers and designers. 
                                Gain visibility, inspire others, and explore creative resources uploaded by fellow creators worldwide.
                            </p>
                            <Link
                                to="/addProduct"
                                className="bg-purple-700/60 backdrop-blur-md text-white text-center px-4 py-3 w-56 rounded-lg hover:bg-pink-500 hover:text-white hover:bg-opacity-70 border border-white/30 shadow-md transition duration-300"
                            >
                                Upload Product
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UploadPreview;
