import React, { useState } from 'react';
import { ArrowRight, Newspaper, ThumbsUp, MessageCircle, X, Menu, Briefcase, Users, Star} from 'lucide-react';

// ==========================
// File: src/pages/AboutPage.jsx
// ==========================
// Mock data for the team members based on the provided image.
const teamMembers = [
  {
    name: 'Jacob Wihardja',
    role: 'Founder',
    imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTYxNzR8MHwxfHNlYXJjaHw3fHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjcwOTM0NjE2&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    name: 'Hernanda Adi',
    role: 'Web Developer',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Irman Maulana',
    role: 'UI Designer',
    imageUrl: 'https://images.unsplash.com/photo-1695927621677-ec96e048dce2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
   {
    name: 'Jacob Wihardja',
    role: 'Founder',
    imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTYxNzR8MHwxfHNlYXJjaHw3fHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjcwOTM0NjE2&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    name: 'Hernanda Adi',
    role: 'Web Developer',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Irman Maulana',
    role: 'UI Designer',
    imageUrl: 'https://images.unsplash.com/photo-1695927621677-ec96e048dce2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  
  
];

// A modern and interactive "About Us" page component.
export const AboutPage = () => (
  <section className="font-['Inter']">
    {/* Hero Section with a background image */}
    <div
      className="relative overflow-hidden py-16 md:py-24 bg-cover bg-center animate-fade-in-up"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1755366204962-3cb4bc8452b1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg animate-scale-in">
          Crafting Digital Excellence
        </h1>
        <p className="text-base md:text-xl max-w-3xl mx-auto font-light drop-shadow-md animate-fade-in delay-200">
          We are dedicated to building high-quality websites and applications that drive business growth and innovation.
        </p>
      </div>
    </div>

    {/* Our Story & Values Section */}
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left Side: Our Story */}
        <div className="animate-fade-in-left delay-400">
          <div className="flex items-center text-blue-600 mb-4">
            <Briefcase size={28} />
            <h2 className="text-3xl md:text-4xl font-extrabold ml-3">Our Story</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded on the principle of innovation, our journey began with a simple idea: to help businesses turn their visions into reality through technology. We believe in creating digital products that are not only beautiful but also functional, intuitive, and scalable.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From our early days, we've grown into a full-service digital agency, serving clients from startups to large enterprises. Our passion for problem-solving and our commitment to our clients' success remain the driving forces behind everything we do.
          </p>
        </div>
        {/* Right Side: Our Values */}
        <div className="animate-fade-in-right delay-400">
          <div className="flex items-center text-purple-600 mb-4">
            <Star size={28} />
            <h2 className="text-3xl md:text-4xl font-extrabold ml-3">Our Values</h2>
          </div>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="flex-shrink-0 mr-3 text-blue-500 font-bold text-xl">1.</span>
              <div>
                <h3 className="font-semibold text-gray-800">Client-Centric Approach</h3>
                <p className="text-sm">We listen, we collaborate, and we prioritize your goals above all else.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 mr-3 text-blue-500 font-bold text-xl">2.</span>
              <div>
                <h3 className="font-semibold text-gray-800">Relentless Innovation</h3>
                <p className="text-sm">We stay at the forefront of technology to deliver cutting-edge solutions.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 mr-3 text-blue-500 font-bold text-xl">3.</span>
              <div>
                <h3 className="font-semibold text-gray-800">Design Excellence</h3>
                <p className="text-sm">We believe that great design is key to a remarkable user experience.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Meet the Team Section */}
    <div className="bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center text-red-600 mb-8">
          <Users size={28} />
          <h2 className="text-3xl md:text-4xl font-extrabold ml-3">Meet Our Team</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up" style={{ animationDelay: `${700 + index * 100}ms` }}>
              <div className="relative w-48 h-48 mb-4">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="rounded-full w-full h-full object-cover shadow-md transform transition-transform duration-500 hover:rotate-3"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
              <ArrowRight size={24} className="text-gray-400 mt-2 transform transition-transform duration-300 hover:translate-x-2" />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Call to Action Section */}
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 md:py-20 text-center animate-fade-in-up delay-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-md">
          Ready to build something amazing?
        </h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto font-light">
          We're here to help you turn your next big idea into a stunning reality. Let's start the conversation.
        </p>
        <button className="flex items-center mx-auto bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
          Let's Talk
          <ArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
  </section>
);