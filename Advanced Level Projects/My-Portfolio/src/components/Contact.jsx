import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        const whatsappMessage = `Hello, I am ${name}%0AEmail: ${email}%0AMessage: ${message}`;
        const phoneNumber = "918954382678"; // ✅ Replace with your WhatsApp number

        window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");

        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="p-6 max-w-xl mx-auto pt-24" id="contact">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1">Message</label>
                    <textarea
                        name="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Send via WhatsApp
                </button>
            </form>
        </div>
    );
};

export default Contact;
