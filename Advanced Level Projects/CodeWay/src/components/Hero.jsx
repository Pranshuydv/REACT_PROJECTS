// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import heroImg from "/public/images/Hero-img.png"; // apne image path ke hisaab se adjust karna

const Hero = () => {
    return (
        <section className="bg-[#F9FAFB] py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

                {/* Left Content */}
                <div className="md:w-1/2">
                    <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1E63] mb-6 leading-tight">
                        Empower Your Future <br /> with <span className="text-[#F97316]">CodeWay</span>
                    </h1>
                    <p className="text-gray-600 mb-6 text-lg">
                        Join the most trusted platform for learning development, design, and career-focused tech skills. Start your journey now!
                    </p>
                    <div className="space-x-4">
                        <Link to="/register" className="bg-[#1A1E63] text-white px-6 py-3 rounded hover:bg-[#2e3490] transition">
                            Get Started
                        </Link>
                        <Link to="/courses" className="border border-[#1A1E63] text-[#1A1E63] px-6 py-3 rounded hover:bg-[#1A1E63] hover:text-white transition">
                            Browse Courses
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2">
                    <img src={heroImg} alt="Learning" className="w-full h-auto" />
                </div>

            </div>
        </section>
    );
};

export default Hero;
