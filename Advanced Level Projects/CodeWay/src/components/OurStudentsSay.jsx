// src/components/OurStudentsSay.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
        id: 1,
        name: "Aarav Mehta",
        course: "React for Beginners",
        feedback:
            "This course was a turning point for me. I loved the way everything was explained step by step.",
        image: "/images/student1.jpg",
    },
    {
        id: 2,
        name: "Ravi Sharma",
        course: "Full Stack Web Development",
        feedback:
            "Amazing learning journey! Practical projects helped me gain confidence and build my portfolio.",
        image: "/images/student2.jpg",
    },
    {
        id: 3,
        name: "Rohan Verma",
        course: "JavaScript Essentials",
        feedback:
            "I had zero knowledge of JS before, but now I'm building small apps by myself. Highly recommend!",
        image: "/images/student3.jpg",
    },
    {
        id: 4,
        name: "Punnet Kapoor",
        course: "Frontend UI Design",
        feedback:
            "The design concepts and animations covered in this course were incredibly useful. Loved it!",
        image: "/images/student4.jpg",
    }
];

const OurStudentsSay = () => {
    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-[#1A1E63] mb-8">Our Students Say</h2>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((student) => (
                        <SwiperSlide key={student.id}>
                            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
                                <img
                                    src={student.image}
                                    alt={student.name}
                                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-[#1A1E63]"
                                />
                                <h3 className="text-xl font-semibold text-[#1A1E63]">{student.name}</h3>
                                <p className="text-sm text-gray-500 italic">{student.course}</p>
                                <p className="mt-3 text-gray-700 text-sm">“{student.feedback}”</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default OurStudentsSay;
