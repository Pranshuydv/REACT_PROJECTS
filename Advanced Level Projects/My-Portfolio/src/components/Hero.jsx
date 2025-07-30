import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gray-100 px-4"
        >
            <div className="max-w-3xl text-center">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
                    Hello, I’m <span className="text-teal-600">Pranshu Yadav</span>
                </h1>

                <h2 className="text-2xl sm:text-3xl text-gray-700 font-semibold mb-4">
                    <Typewriter
                        options={{
                            strings: [
                                "Frontend Developer",
                                "Backend Developer",
                                "React Enthusiast",
                                "Full Stack Developer",
                                "Python & Django Developer",
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 60,
                            deleteSpeed: 40,
                        }}
                    />
                </h2>

                <p className="text-gray-600 text-lg sm:text-xl mb-6">
                    I craft modern, responsive websites using the latest technologies with focus on performance and design.
                </p>

                <a
                    href="#about"
                    className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-teal-700 transition"
                >
                    Know More About Me
                </a>

                <p className="text-sm text-gray-500 mt-4 italic">
                    "Turning ideas into real-world digital experiences."
                </p>
            </div>
        </section>
    );
};

export default Hero;