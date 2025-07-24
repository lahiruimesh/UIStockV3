import React from 'react';
import Hero from '../layouts/Hero';
import CategoriesPreview from '../layouts/CategoriesPreview';
import UplaodPreview from '../layouts/UploadPreview';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <>
        <div className="items-center justify-center h-screen bg-brand-dark">
            <div className='bg-gradient-to-br from-[#0a0e2a] via-[#201E54] to-[#03051a]'>
                <Hero />
                <CategoriesPreview />
                <UplaodPreview />
                <Footer />
            </div>
        </div>
    </>
    )
}

export default LandingPage;