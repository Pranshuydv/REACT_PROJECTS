// src/pages/Courses.jsx
import React, { useEffect, useState } from "react";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("public/utils/allCourses.json")
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(err => console.error("Error loading courses:", err));
    }, []);

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="bg-white py-12 mt-10">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-[#1A1E63] mb-8 text-center">
                    All Courses
                </h2>

                {/* 🔍 Search Input */}
                <div className="mb-8 text-center">
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A1E63]"
                    />
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <div key={course.id} className="bg-gray-100 p-5 rounded-xl shadow-md hover:shadow-xl transition">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-40 object-cover rounded mb-3"
                                />
                                <h3 className="text-lg font-semibold text-[#1A1E63]">
                                    {course.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">{course.category}</p>
                                <p className="text-xs text-gray-500 mt-2">
                                    Instructor: {course.instructor}
                                </p>
                                <p className="text-xs text-gray-500">Duration: {course.duration}</p>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">No courses found.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Courses;
