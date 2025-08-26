"use client";

import React, { useEffect, useState } from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const jobTitles = [
  "A Data Analyst.",
  "A Machine Learning Engineer.",
  "A UX Researcher.",
  "A Frontend Developer.",
  "A Backend Developer.",
  "A Product Manager.",
];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-blue-50 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-8">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6 md:space-y-8">
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Hi, I&apos;m Nataly <br />
            <span className="text-5xl md:text-6xl text-blue-900 transition-opacity duration-500">
              {jobTitles[currentTitleIndex]}
            </span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl">
            I combine analytical thinking and technical expertise to transform data into actionable insights and build innovative solutions that drive progress and impact.          
          </p>
        </div>

        <div className="flex space-x-6 mt-6 justify-center md:justify-start">
          <a
            href="https://x.com/GakenyeNataly"
            className="text-gray-800 hover:text-blue-500 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/nataly-gakenye-9909502b3"
            className="text-gray-800 hover:text-blue-500 transition duration-300"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="mailto:wambuinatalygakenye@gmail.com"
            className="text-gray-800 hover:text-blue-500 transition duration-300"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://github.com/Nataly-Wambui"
            className="text-gray-800 hover:text-blue-500 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
        </div>

        <a
          href="/images/Nataly Gakenye - CV.pdf"
          download="Nataly Gakenye - CV.pdf"
          className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 self-center md:self-start"
        >
          Download CV
        </a>
      </div>
       {/* Image Section */}
       <div className="w-full md:w-6/12 flex justify-end mt-12 md:mt-0">
        <div className="relative w-full md:w-[80%] aspect-square">
          <Image
            src="/images/Nataly.jpg"
            alt="Nataly Gakenye"
            className="rounded-2xl shadow-lg object-cover"
            fill
            sizes="(max-width: 760px) 90vw, 40vw"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
