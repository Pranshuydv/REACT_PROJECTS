// src/components/FeaturedCoursesCarousel.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeaturedCoursesCarousel = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("public/utils/featuredCourses.json")
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(err => console.error("Error loading featured courses:", err));
    }, []);

    return (
        <section className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-[#1A1E63] mb-8 text-center">
                    Featured Courses
                </h2>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {courses.map((course) => (
                        <SwiperSlide key={course.id}>
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-40 object-cover rounded mb-4"
                                />
                                <h3 className="text-xl font-semibold text-[#1A1E63]">
                                    {course.title}
                                </h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    {course.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default FeaturedCoursesCarousel;
