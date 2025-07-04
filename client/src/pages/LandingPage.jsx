import React from 'react';
import Hero from '../layouts/Hero';
import CategoriesPreview from '../layouts/CategoriesPreview';

const LandingPage = () => {
    return (
        <>
        <div className="items-center justify-center h-screen bg-brand-dark">
            <div>
                <Hero />
                <CategoriesPreview />
            </div>
        </div>
    </>
    )
}

export default LandingPage;