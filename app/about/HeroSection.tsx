import React, { useState, useEffect } from 'react';

export default function HeroSection({ images, imageUrl }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 mx-auto">
        {/* Column 1 - Image on the left */}
        <div className="flex items-center justify-center">
          <img 
            src={imageUrl} 
            alt="Sam Koscelny" 
            className="rounded-full w-64 h-64 object-cover shadow-lg"
          />
        </div>

        {/* Column 2 - Text on the right */}
        <div className="flex flex-col items-end">
          <h1 className="text-4xl font-bold mb-4 text-center w-full">Sam Koscelny</h1>
          <p className="text-base text-black leading-relaxed text-justify mb-4">

          <p className="text-base text-black leading-relaxed text-justify">
          As a passionate researcher and PhD student at Clemson University, I am committed to advancing healthcare education and literacy through AI technologies. My research focuses on improving user engagement with healthcare chatbots by using Bayesian statistical models to better understand human-AI interaction. With a deep focus on health informatics, my goal is to make healthcare information more accessible and equitable, especially for underserved populations. My international experiences and leadership have shaped my approach to designing inclusive, user-centered technologies that make a positive impact.</p> 
          <p className="text-base text-black leading-relaxed text-justify mt-4">
            Beyond research, I’m driven by a passion for learning through real-world experiences. Whether traveling, studying abroad, or engaging in cultural exchanges, I love exploring new perspectives. These experiences have not only enriched my work but also inspired my creative side. Photography is my way of capturing the moments, people, and places that inspire me, balancing intellectual curiosity with creative expression.</p>
            <p className="text-base text-black leading-relaxed text-justify mt-4">
            To learn more about me, here are some photos of me doing what I love—playing guitar, spending time with friends, immersing in cultural experiences, and exploring new places. Plus, a few highlights from my photography collection!
          </p>
          </p>
        </div>
        <p className="text-base text-black leading-relaxed text-justify">
  </p>

      </div>
    </div>
  );
}
