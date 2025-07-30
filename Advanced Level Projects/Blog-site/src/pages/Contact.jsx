import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600">
          We'd love to hear from you! Whether it's feedback, questions, or just saying hi — reach out any time.
        </p>
      </div>

      {/* Contact Info Card */}
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2 bg-gray-50 rounded-2xl shadow-lg p-10 border border-gray-200">

        {/* Email */}
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-blue-600 text-2xl" />
          <div>
            <p className="text-lg font-semibold">Email</p>
            <p className="text-blue-700">myblog@example.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-blue-600 text-xl" />
          <div>
            <p className="text-lg font-semibold">Phone</p>
            <p className="text-blue-700">+91 9876543210</p>
          </div>
        </div>

        {/* Website */}
        <div className="flex items-center gap-4">
          <FaGlobe className="text-blue-600 text-2xl" />
          <div>
            <p className="text-lg font-semibold">Website</p>
            <p className="text-blue-700">www.myblog.com</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-blue-600 text-2xl" />
          <div>
            <p className="text-lg font-semibold">Location</p>
            <p className="text-blue-700">Agra, India</p>
          </div>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="max-w-4xl mx-auto mt-12 rounded-xl overflow-hidden shadow-md border">
        <iframe
          title="MyBlog Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5524457394263!2d78.00910907459166!3d27.176670947085456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397476cb7300e9a5%3A0x7b7dd263d46bde5d!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1720858856105!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>

      {/* Footer Note */}
      <p className="mt-12 text-center text-sm text-gray-500">
        We'll get back to you as soon as possible. Thanks for connecting with MyBlog 💙
      </p>
    </div>
  );
};

export default Contact;
