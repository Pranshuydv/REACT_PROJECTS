import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../assets/hero-image.png'; // Make sure the image exists

const Hero = () => {
    return (
        <section className="bg-[#F7FAFC] min-h-[90vh] flex items-center px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-10">

                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#2D3748] leading-tight">
                        Share Your Stories with the World 🌍
                    </h1>
                    <p className="text-lg text-gray-600">
                        Publish articles, learn from others, and grow your audience in our community-driven blog platform.
                    </p>
                    <a href="" className="inline-block px-6 py-3 bg-[#2B6CB0] hover:bg-[#2C5282] text-white rounded-lg font-semibold transition duration-300">
                         Explore Blogs
                    </a>

                </div>

                {/* Hero Image */}
                <div className="md:w-1/2">
                    <img
                        src={HeroImg}
                        alt="Hero Illustration"
                        className="w-full max-w-[500px] mx-auto"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;
