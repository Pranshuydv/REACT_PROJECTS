// src/pages/BlogDetail.jsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogData from '../data/blogData';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find((b) => b.id.toString() === id);

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Blog Not Found</h1>
        <p className="text-gray-600 mb-6">Oops! We couldn't find the blog you're looking for.</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:underline font-medium"
      >
        ← Back to Blogs
      </button>

      {/* Blog Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full max-h-[450px] object-cover rounded-lg shadow-md mb-8"
      />

      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>

      {/* Blog Meta */}
      <div className="text-sm text-gray-500 mb-6">
        <span>📅 {blog.date}</span> · <span>📂 {blog.category}</span>
      </div>

      {/* Blog Content */}
      <div className="prose max-w-none text-gray-800 leading-relaxed">
        <p>{blog.content}</p>
      </div>
    </div>

    
  );
};

export default BlogDetail;
