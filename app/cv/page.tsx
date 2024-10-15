"use client"; 
import React from 'react';

const CVPage = () => {
  return (
    <div className="bg-[#F5F5F5] text-black min-h-screen flex flex-col justify-between font-serif">
      {/* Sticky Navigation with Name and Links */}
      <nav className="bg-white py-4 shadow-md fixed top-0 left-0 w-full z-50 text-center">
        <div className="container mx-auto">
          {/* Name Section */}
          <h1 className="text-4xl font-bold">Samuel N. Koscelny</h1>

          {/* Navigation Links */}
          <div className="mt-4 space-x-12 font-sans text-lg flex justify-center">
            <a href="/" className="hover:text-[#2541B2] hover:underline">Home</a>
            <a href="/research" className="hover:text-[#2541B2] hover:underline">Research</a>
            <a href="/publications" className="hover:text-[#2541B2] hover:underline">Publications</a>
            <a href="/about" className="hover:text-[#2541B2] hover:underline">About</a>
            <a href="/cv" className="hover:text-[#2541B2] hover:underline underline">CV</a> {/* CV is underlined to show the current page */}
          </div>
        </div>
      </nav>

      {/* CV Section */}
      <section className="flex-grow pt-60 py-16 px-4 bg-[#F5F5F5] text-center">
        <div className="container mx-auto">
          {/* Download Text */}
          <p className="text-1xl font-light text-gray-700 mb-4">Click here to download</p>
          <h2 className="text-3xl font-extrabold mb-6 underline">Sam Koscelny's CV</h2>

          {/* Download Button */}
          <a
            href="/path/to/SamuelKoscelnyCV.pdf" // Replace with actual path to your CV PDF file
            download
            className="bg-[#EA8F1F] text-white px-8 py-4 rounded-lg shadow-lg hover:bg-[#FF8800] text-xl font-sans inline-block"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* Footer - moved to the bottom */}
      <footer className="bg-[#A8AB9B] text-black py-4 text-center">
        <p>&copy; Created & designed by Sam Koscelny</p>
      </footer>
    </div>
  );
};

export default CVPage;
