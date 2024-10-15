"use client";
import React, { useState, useEffect } from 'react';

// Carousel component for each project
const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically cycle through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Function to manually switch images
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      {/* Display current image */}
      <img
        src={images[currentImageIndex]}
        alt="carousel"
        className="w-full h-full object-cover rounded-md"
      />

      {/* Next and Previous buttons */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button onClick={prevImage} className="bg-gray-200 p-2 rounded-full">
          &#8592;
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button onClick={nextImage} className="bg-gray-200 p-2 rounded-full">
          &#8594;
        </button>
      </div>
    </div>
  );
};

const ResearchPage = () => {
  // Image arrays for each project
  const bayesianChatbotImages = [
    'https://placehold.co/300x200?text=Chatbot+1',
    'https://placehold.co/300x200?text=Chatbot+2',
    'https://placehold.co/300x200?text=Chatbot+3',
  ];

  const thematicAnalysisImages = [
    'https://placehold.co/300x200?text=Thematic+1',
    'https://placehold.co/300x200?text=Thematic+2',
    'https://placehold.co/300x200?text=Thematic+3',
  ];

  const bigDataImages = [
    'https://placehold.co/300x200?text=BigData+1',
    'https://placehold.co/300x200?text=BigData+2',
    'https://placehold.co/300x200?text=BigData+3',
  ];

  const gestureStudyImages = [
    'https://placehold.co/300x200?text=Gesture+1',
    'https://placehold.co/300x200?text=Gesture+2',
    'https://placehold.co/300x200?text=Gesture+3',
  ];

  return (
    <div className="bg-[#F5F5F5] text-black min-h-screen font-serif">
      {/* Sticky Navigation with Name and Links */}
      <nav className="bg-white py-4 shadow-md fixed top-0 left-0 w-full z-50 text-center">
        <div className="container mx-auto">
          {/* Name Section */}
          <h1 className="text-3xl font-bold">Samuel N. Koscelny</h1>

          {/* Navigation Links */}
          <div className="mt-4 space-x-8 font-sans text-lg flex justify-center">
            <a href="/" className="hover:text-[#2541B2] hover:underline">Home</a>
            <a href="/research" className="hover:text-[#2541B2] hover:underline underline">Research</a>
            <a href="/publications" className="hover:text-[#2541B2] hover:underline">Publications</a>
            <a href="/about" className="hover:text-[#2541B2] hover:underline">About</a>
            <a href="/cv" className="hover:text-[#2541B2] hover:underline">CV</a>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <section className="pt-32 py-16 px-4 lg:px-24 bg-[#F5F5F5]">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-left">Research Projects</h1>

          {/* EASt Lab Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-left">Ergonomics and Applied Statistics (EASt) Lab: Recent Projects - 
            <a href="https://cecas.clemson.edu/east/" className="text-[#EA8F1F] underline hover:text-[#FF8800]">Visit Lab</a></h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project 1 with Carousel */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <ImageCarousel images={bayesianChatbotImages} />
                <h3 className="text-xl font-bold mb-2">Bayesian Chatbot Models</h3>
                <p className="text-base">
                Evaluated healthcare chatbot information presentation styles through Bayesian hierarchical regression. By evaluating key outcomes such as trust, usability, and effectiveness, this study highlights the power of communication style in shaping user interaction with AI-driven health systems. The findings contribute to the growing field of human-AI interaction, offering insights on how mediator variables can be leveraged to enhance the design and functionality of conversational agents in healthcare. 
                </p>
              </div>

              {/* Project 2 with Carousel */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <ImageCarousel images={thematicAnalysisImages} />
                <h3 className="text-xl font-bold mb-2">Thematic Analysis in Human-AI Interaction</h3>
                <p className="text-base">
                Explored user experience and perceptions by conducting semi-structured interviews with participants who interacted with healthcare chatbots. It delves into the psychological constructs of user interactions with conversational agents, offering a theoretical foundation on how processing fluency bias—the tendency to favor information that's easier to understand—affects these interactions. By examining communication and language styles, this study uncovers how users balance simplicity with critical thinking, providing key insights into optimizing AI design for enhanced user engagement and informed decision-making in healthcare settings.</p>
              </div>

              {/* Project 3 with Carousel */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <ImageCarousel images={bigDataImages} />
                <h3 className="text-xl font-bold mb-2">Big Data Healthcare Analytics</h3>
                <p className="text-base">
                Investigate the underlying characteristics of pediatric patients in emergency departments (EDs), with a special focus on mental and behavioral health (MBH) patients. By constructing linear regression, binomial, ordinal, and time series models, my research evaluates how underlying patient characteristics impact critical outcomes such as time to disposition and risk of recidivism. Time series analysis has also been constructed to assess the effectiveness of interventions implemented in EDs. These findings contribute to the evolving field of health informatics, providing actionable insights for healthcare procedures and targeted interventions. By focusing on MBH pediatric patients, this research offers valuable direction for redesigning EDs to improve patient care and outcomes.</p>
              </div>
            </div>
          </div>

          {/* HSEAS Lab Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-left">Human-Systems Engineering and Applied Statistics (HSEAS) Lab: Past Project -     <a href="https://sites.google.com/view/hseas-lab/" className="text-[#EA8F1F] underline hover:text-[#FF8800]">Visit Lab</a>
            </h2>

            {/* Single Project with Carousel */}
            <div className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-2xl">
              <ImageCarousel images={gestureStudyImages} />
              <h3 className="text-xl font-bold mb-2">Gesture Study Research</h3>
              <p className="text-base">
              Natural gesture elicitation across different linguistic and cultural groups was explored, focusing on how primary verbal language shapes intuitive gestures in 3D systems. Using a repeated-measures design, participants (English, Mandarin, Spanish speakers) were asked to select intuitive gestures for controlling a 3D interface. Findings revealed distinct gesture patterns and reaction times among the language groups, with Mandarin speakers displaying the highest variety of unique gestures. The study supports the Sapir-Whorf hypothesis, highlighting how language influences cognitive processes in gesture selection and offering insights to enhance natural user interface design by incorporating both cultural and cognitive considerations.








</p>
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

export default ResearchPage;
