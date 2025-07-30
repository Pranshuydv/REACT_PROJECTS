// src/pages/Home.jsx

import React, { useState } from 'react';
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';
import blogData from '../data/blogData';

const categories = ["All", ...new Set(blogData.map(blog => blog.category))];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  // ✅ Filter by category
  const filteredBlogs =
    selectedCategory === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === selectedCategory);

  // ✅ Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero />

      {/* CATEGORY FILTER */}
      <section className="max-w-7xl mx-auto px-4 pt-10">
        <div className="flex gap-3 flex-wrap justify-center overflow-x-auto py-4">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition 
              ${
                selectedCategory === category
                  ? 'bg-[#2B6CB0] text-white border-[#2B6CB0]'
                  : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* BLOG CARDS */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-center mt-10 gap-2 flex-wrap">
          {/* PREV BUTTON */}
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded border font-semibold transition ${
              currentPage === 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            ← Prev
          </button>

          {/* PAGE NUMBERS */}
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={`px-4 py-2 rounded border transition font-semibold ${
                currentPage === index + 1
                  ? 'bg-[#ECC94B] text-[#2D3748]'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* NEXT BUTTON */}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded border font-semibold transition ${
              currentPage === totalPages
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Next →
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
