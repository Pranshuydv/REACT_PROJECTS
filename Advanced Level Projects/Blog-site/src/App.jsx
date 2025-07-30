import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import BlogNotFound from './pages/BlogNotFound';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<BlogNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
