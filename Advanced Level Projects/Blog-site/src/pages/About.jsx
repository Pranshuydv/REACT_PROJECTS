import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      
      {/* Banner Image */}
      <div className="w-full h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
          alt="Blogging Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* About Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          About <span className="text-gray-900">MyBlog</span>
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          <strong className="text-blue-600">MyBlog</strong> is a simple, clean, and modern blogging platform where you can share your <em>thoughts, stories, coding tutorials, gaming insights, AI ideas</em>, and more.
          It's built using <span className="text-green-600 font-medium">React.js</span> and <span className="text-pink-600 font-medium">Tailwind CSS</span> for fast performance and easy customization.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Whether you're a developer, designer, or enthusiast — this platform is made for you.
          Our goal is to keep it personal, user-friendly, and constantly evolving.
        </p>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-300 shadow-md">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">🚀 What's Coming Next?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>🔐 Login & Signup System</li>
            <li>💬 Comment Section</li>
            <li>📝 Rich Text Blog Editor</li>
            <li>📊 Blog Analytics</li>
            <li>🌙 Light/Dark Mode Toggle</li>
            <li>🧑‍💻 Author Profiles</li>
          </ul>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Made with ❤️ for the community. Keep writing, keep sharing.
        </p>
      </div>
    </div>
  );
};

export default About;
