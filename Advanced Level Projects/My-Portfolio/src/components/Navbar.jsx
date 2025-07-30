import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);

    return (
        <header className="bg-gray-900 text-white fixed top-0 w-full z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <div className="text-2xl font-bold">Pranshu</div>

                <nav className="hidden md:flex space-x-6">
                    <a href="#home" className="hover:text-teal-400 transition">Home</a>
                    <a href="#about" className="hover:text-teal-400 transition">About</a>
                    <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
                    <a href="#skills" className="hover:text-teal-400 transition">Skills</a>
                    <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
                </nav>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            {open ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {open && (
                <div className="md:hidden bg-gray-900 px-4 pb-4 space-y-2">
                    <a href="#home" onClick={() => setOpen(false)} className="block hover:text-teal-400">Home</a>
                    <a href="#about" onClick={() => setOpen(false)} className="block hover:text-teal-400">About</a>
                    <a href="#projects" onClick={() => setOpen(false)} className="block hover:text-teal-400">Projects</a>
                    <a href="#skills" onClick={() => setOpen(false)} className="block hover:text-teal-400">Skills</a>
                    <a href="#contact" onClick={() => setOpen(false)} className="block hover:text-teal-400">Contact</a>
                </div>
            )}
        </header>
    );
};

export default Navbar;