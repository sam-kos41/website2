"use client"; 
import React, { useState } from 'react';
import { FaFileAlt } from 'react-icons/fa'; // Import icon for the thesis link

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F5F5F5] text-black min-h-screen font-serif">
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
            <a href="/cv" className="hover:text-[#2541B2] hover:underline">CV</a> {/* Updated Link to CV Page */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 flex flex-col lg:flex-row justify-between items-center py-16 px-4 lg:px-24 bg-white">
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-extrabold mb-4">Samuel N. Koscelny</h1>
          <p className="text-lg mb-6">Ph.D. Candidate | Graduate Research Assistant</p>
          
          {/* Research Keywords */}
          <ul className="text-base mb-8 font-light text-gray-700 space-y-2">
            <li>Bayesian statistics for user behavior modeling</li>
            <li>AI-driven healthcare informatics</li>
            <li>Quantitative models evaluating user interaction</li>
            <li>Psychological constructs in human-AI interaction</li>
          </ul>

          {/* Thesis Section */}
          <div className="mt-8">
            <h3 className="text-lg italic font-light text-gray-700">
              Thesis: <em>Exploring Healthcare Chatbot Information Presentation: Applying Hierarchical Bayesian Regression and Inductive Thematic Analysis in a Mixed Methods Study</em>
            </h3>
            <a
              href="https://open.clemson.edu/all_theses/4342/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[#EA8F1F] hover:text-[#FF8800] text-lg"
            >
              <FaFileAlt className="inline mr-2" /> View Thesis
            </a>
          </div>
        </div>
        <div className="lg:w-5/12 mt-8 lg:mt-0">
          <img src="/SK_Headshot2.jpg" alt="Samuel Koscelny" className="rounded-lg shadow-lg max-w-full lg:max-w-md" />
        </div>
      </section>


     {/* Research Goal Section */}
     <section className="py-16 px-6 bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Title */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-4">Research Goal</h2>
          </div>
          {/* Right Column - Content */}
          <div className="lg:col-span-2">
            <p className="text-lg font-light text-gray-700 mb-4">
              My research focuses on Human-AI interactions, leveraging both quantitative and qualitative methods to enhance usability and efficiency of AI-driven systems. A key strength lies in Bayesian statistics, employed in my thesis research to assess healthcare chatbot interactions.
            </p>
            <p className="text-lg font-light text-gray-700 mb-8">
              In addition to Human Factors, my healthcare research focuses on pediatric emergency department visits, applying statistical models to improve care delivery. I recently defended my thesis, which explored healthcare chatbots' information presentation.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Projects Section with Accordion */}
      <section className="bg-[#F0F0F0] py-16">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Title */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2">
            {/* Project 1 */}
            <div className="border-b-2 border-gray-200 py-4">
              <h3
                className="text-2xl font-semibold cursor-pointer"
                onClick={() => toggleAccordion(0)}
              >
                Big Data Analytics to Advance Understanding of Pediatric Mental and Behavioral Healthcare
              </h3>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === 0 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-lg font-light text-gray-700 mt-4">
                  Leverage human-centered data and advanced statistical models in R to identify key factors in pediatric mental and behavioral health emergency visits, improving care efficiency and patient outcomes in emergency departments.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border-b-2 border-gray-200 py-4">
              <h3
                className="text-2xl font-semibold cursor-pointer"
                onClick={() => toggleAccordion(1)}
              >
                Investigating Human-AI Interaction: Bayesian Statistics and Thematic Analysis Approaches
              </h3>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === 1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-lg font-light text-gray-700 mt-4">
                  Utilized Bayesian hierarchical regression and inductive thematic analysis to evaluate user interactions with healthcare chatbots, assessing effectiveness and exploring the psychological constructs that shape user engagement with AI-driven healthcare systems.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="py-4">
              <h3
                className="text-2xl font-semibold cursor-pointer"
                onClick={() => toggleAccordion(2)}
              >
                Exploring Linguistic Differences in Intuitive Gesture Elicitation for 3D Gestural Systems
              </h3>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === 2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-lg font-light text-gray-700 mt-4">
                  Investigated how primary verbal language influences intuitive gesture selection in 3D systems, revealing cultural and linguistic differences across English, Mandarin, and Spanish speakers, with a focus on gesture mappings and reaction times in human-computer interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#A8AB9B] text-black py-4 text-center">
        <p>&copy; Created & designed by Sam Koscelny</p>
      </footer>
    </div>
  );
};

export default HomePage;
