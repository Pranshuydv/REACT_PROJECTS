import React from "react";

const About = () => {
    return (
        <section
            id="about"
            className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-1 bg-teal-600 mx-auto mb-6 rounded"></div>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                    About Me
                </h2>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    I'm a passionate full stack developer skilled in crafting both beautiful frontends and robust backends.
                    With expertise in HTML, CSS, JavaScript, React, Django, and Flask, I love building web applications
                    that are fast, accessible, and user-friendly.
                </p>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-4">
                    I enjoy turning complex problems into simple, elegant solutions. Whether it's developing interactive
                    UIs or building powerful APIs, I'm always learning and exploring new technologies.
                </p>
            </div>
        </section>
    );
};

export default About;