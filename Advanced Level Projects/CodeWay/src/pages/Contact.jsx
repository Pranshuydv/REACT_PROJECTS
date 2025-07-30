// src/pages/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        console.log("Register Input:", formData);
    };

    return (
        <>
            {/* Contact Section with Background */}
            <section
                className="min-h-screen py-20 px-4 flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: "url('/public/images/contact-bg.jpg')", // 🔁 Replace with your image
                }}
            >
                <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-xl w-full">
                    <h2 className="text-3xl font-bold text-center text-[#1A1E63] mb-6">
                        Contact Us
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-[#1A1E63] outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-[#1A1E63] outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-[#1A1E63] outline-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#1A1E63] text-white w-full py-3 rounded hover:bg-[#2c34a6] transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Google Map Section */}
            <section className="bg-gray-100 py-10 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-[#1A1E63] mb-8">
                        Our Location
                    </h2>

                    <div className="overflow-hidden rounded-xl shadow-lg border border-gray-300">
                        <iframe
                            title="Google Map Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0463892432954!2d77.22305797543455!3d27.17043747650117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397377383a9ba275%3A0x362546ea38b5d6e3!2sAgra%20College!5e0!3m2!1sen!2sin!4v1719557614963!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                        ></iframe>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Contact;
