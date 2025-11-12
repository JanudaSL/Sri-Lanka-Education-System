'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Get In Touch</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a question or want to discuss about English education? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Contact Info Cards */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
              <Mail className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">madushani@email.com</p>
            <a href="mailto:madushani@email.com" className="text-orange-600 hover:text-orange-700 font-semibold mt-3 inline-block">
              Send Email →
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
              <Phone className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">+94 (0)76 123 4567</p>
            <a href="tel:+94761234567" className="text-orange-600 hover:text-orange-700 font-semibold mt-3 inline-block">
              Call Now →
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
              <MapPin className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Location</h3>
            <p className="text-gray-600">Hambantota, Sri Lanka</p>
            <a href="#" className="text-orange-600 hover:text-orange-700 font-semibold mt-3 inline-block">
              Get Directions →
            </a>
          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Send Me a Message</h3>

          {submitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-3">
              <Send className="w-5 h-5" />
              <p className="font-semibold">Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}

          <div className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition resize-none"
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-6 text-center">
            I typically respond within 24 hours. Please provide as much detail as possible.
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Office Hours</h3>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Monday - Friday:</span> 8:00 AM - 5:00 PM</p>
              <p><span className="font-semibold">Saturday:</span> 10:00 AM - 2:00 PM</p>
              <p><span className="font-semibold">Sunday:</span> Closed</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Response</h3>
            <p className="text-gray-700">
              For urgent matters, please call during office hours. For other inquiries, email is preferred and I'll respond as soon as possible.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}