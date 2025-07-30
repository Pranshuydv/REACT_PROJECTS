// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom"; // ✅ This is required

const Footer = () => {
    return (
        <footer className="bg-[#1A1E63] text-white py-10">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-sm">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold mb-3">CodeWay</h2>
                    <p className="text-gray-300">
                        Empowering your future with industry-relevant tech skills and hands-on learning.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Legal</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><Link to="#">Privacy Policy</Link></li>
                        <li><Link to="#">Terms & Conditions</Link></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="text-center text-gray-400 text-xs mt-10">
                © {new Date().getFullYear()} CodeWay. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
