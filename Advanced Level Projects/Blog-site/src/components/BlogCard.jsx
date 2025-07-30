// src/components/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (

    
    <Link to={`/blog/${blog.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold text-[#2D3748] mb-2">{blog.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-3">{blog.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
