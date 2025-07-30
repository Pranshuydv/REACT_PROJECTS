// src/components/About.jsx
import React from "react";

const About = () => {
    return (
        <section className="bg-white py-16" id="about">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

                {/* Left: Textual content */}
                <div>
                    <h2 className="text-4xl font-bold text-[#1A1E63] mb-6">
                        How can I help you?
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Welcome to <strong>CodeWay</strong> – your personalized learning platform. I’m here to help you:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 text-md">
                        <li>Understand and learn modern web technologies.</li>
                        <li>Practice hands-on with real-time projects.</li>
                        <li>Prepare for internships and job placements.</li>
                        <li>Get personalized guidance and feedback.</li>
                    </ul>
                    <p className="mt-6 text-gray-700">
                        Whether you're a beginner or already in tech, I’ll guide you step-by-step toward your goals with the best resources and mentoring.
                    </p>
                </div>

                {/* Right: Image */}
                <div className="w-full">
                    <img
                        src="/public/images/About-img.gif"
                        alt="How can I help you"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
