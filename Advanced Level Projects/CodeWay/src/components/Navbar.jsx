// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-[#1A1E63] text-white shadow-md fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-wide">CodeWay</Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link to="/" className="hover:text-gray-300 transition">Home</Link>
                    <Link to="/courses" className="hover:text-gray-300 transition">Courses</Link>
                    <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
                </div>

                {/* Desktop Login/Register Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link
                        to="/login"
                        className="bg-white text-[#1A1E63] px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#e2e8f0] hover:scale-105 transition"
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="bg-white text-[#1A1E63] px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#e2e8f0] hover:scale-105 transition"
                    >
                        Register
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#1A1E63] px-4 py-4 space-y-3">
                    <Link
                        to="/"
                        className="block hover:text-gray-300 cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/courses"
                        className="block hover:text-gray-300 cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        Courses
                    </Link>
                    <Link
                        to="/contact"
                        className="block hover:text-gray-300 cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </Link>
                    <hr className="border-gray-500" />
                    <Link
                        to="/login"
                        className="block bg-white text-[#1A1E63] text-center py-2 rounded font-semibold hover:bg-[#e2e8f0] transition cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="block bg-white text-[#1A1E63] text-center py-2 rounded font-semibold hover:bg-[#e2e8f0] transition cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        Register
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
