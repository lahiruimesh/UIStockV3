import React from 'react';
import Hero from '../layouts/Hero';

const LandingPage = () => {
    return (
        <>
        <div className="flex flex-col items-center justify-center h-screen bg-brand-dark">
            <div>
                <Hero />
            </div>
        </div>
    </>
    )
}

export default LandingPage;