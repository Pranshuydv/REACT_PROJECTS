import React from 'react';
import { Link } from 'react-router-dom';

const BlogNotFound = () => {
  return (
    <div className="text-center py-20 text-gray-700 px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Blog Not Found</h1>
      <p className="text-lg mb-6">
        Sorry! Jo blog aap dekhna chahte ho wo exist nahi karta ya delete ho chuka hai.
      </p>
      <Link to="/" className="text-blue-600 underline hover:text-blue-800">
        Go back to Home
      </Link>
    </div>
  );
};

export default BlogNotFound;
