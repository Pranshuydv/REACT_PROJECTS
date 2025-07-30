import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-[#F7FAFC] shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                {/* LOGO */}
                <Link to="/">
                    <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#2B6CB0] to-[#ECC94B] text-transparent bg-clip-text">
                        My<span className="text-[#2D3748]">Blog</span>
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-[#2D3748] font-medium text-lg">
                    {navLinks.map((link, i) => (
                        <li key={i} className="relative group cursor-pointer">
                            <Link to={link.path}>
                                {link.name}
                            </Link>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ECC94B] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>

                {/* Mobile Icon */}
                <div className="md:hidden text-2xl text-[#2D3748]" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <ul className="md:hidden bg-[#F7FAFC] px-4 pb-4 space-y-2 text-[#2D3748] font-medium text-lg shadow">
                    {navLinks.map((link, i) => (
                        <li key={i} className="hover:bg-[#ECEFF1] p-2 rounded transition cursor-pointer">
                            <Link to={link.path} onClick={() => setIsOpen(false)}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
