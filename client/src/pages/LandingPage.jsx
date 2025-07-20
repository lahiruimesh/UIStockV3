import React from 'react';
import Hero from '../layouts/Hero';
import CategoriesPreview from '../layouts/CategoriesPreview';
import UplaodPreview from '../layouts/UploadPreview';

const LandingPage = () => {
    return (
        <>
        <div className="items-center justify-center h-screen bg-brand-dark">
            <div>
                <Hero />
                <CategoriesPreview />
                <UplaodPreview />
            </div>
        </div>
    </>
    )
}

export default LandingPage;