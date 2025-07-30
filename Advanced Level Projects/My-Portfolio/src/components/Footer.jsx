import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-4 mt-20">
            <div className="max-w-6xl mx-auto text-center px-4 space-y-2">
                <h2 className="text-base font-semibold text-gray-800 tracking-wide">
                    Pranshu Yadav
                </h2>

                <div className="flex justify-center flex-wrap gap-5 text-sm text-gray-600 font-medium">
                    <a href="#home" className="hover:text-black transition">Home</a>
                    <a href="#about" className="hover:text-black transition">About</a>
                    <a href="#projects" className="hover:text-black transition">Projects</a>
                    <a href="#skills" className="hover:text-black transition">Skills</a>
                    <a href="#contact" className="hover:text-black transition">Contact</a>
                </div>

                <p className="text-xs text-gray-400 font-light">
                    &copy; {new Date().getFullYear()} Pranshu Yadav. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;