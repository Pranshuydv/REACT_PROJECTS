import React, { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => {
            const updated = { ...prev, [name]: value };
            return updated;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Registration successful!");
        setFormData({ name: "", email: "", password: "" });
        console.log("Register Input:", formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f1f5f9] px-4">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#1A1E63]">Register</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#1A1E63]"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#1A1E63]"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#1A1E63]"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-[#1A1E63] text-white py-2 rounded hover:bg-[#2c318a]">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
