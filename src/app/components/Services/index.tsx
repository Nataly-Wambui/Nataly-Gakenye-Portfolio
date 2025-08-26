"use client";

import React, { useState } from 'react';
import { FaLaptopCode, FaBrain, FaDatabase, FaSearch, FaProjectDiagram, FaTasks, FaArrowRight } from 'react-icons/fa'; // Importing icons

const servicesData = [
  {
    title: "Data & Software Architecture",
    icon: <FaProjectDiagram size={60} className="text-blue-500" />,
    shortDescription: "Designing robust architectures that support your business objectives.",
    details: "I offer services in system and data architecture design, focusing on creating scalable solutions that meet your current and future needs. From SQL database modeling to structuring system components, my goal is to help businesses grow with well-architected software systems.",
  },
  {
    title: "Machine Learning",
    icon: <FaBrain size={60} className="text-blue-500" />,
    shortDescription: "I provide end-to-end machine learning solutions tailored to business needs, from preparing raw data to deploying intelligent models.",
    details: "My expertise includes data cleaning to ensure accuracy, data visualization to uncover patterns, and feature engineering to boost model performance. I also specialize in Natural Language Processing (NLP) for applications like chatbots, sentiment analysis, and text classification — enabling smarter, data-driven decision-making.",
  },
  {
    title: "UX Research",
    icon: <FaSearch size={60} className="text-blue-500" />,
    shortDescription: "I help businesses create user-centered products by applying design thinking and proven research methodologies.",
    details: "From project planning and mapping user journeys and flows to conducting task analysis and usability testing, I ensure that every design decision is backed by real insights. My process includes analysis and synthesis of research findings, along with model management, to translate user needs into actionable strategies that improve usability and overall product experience.",
  },
  {
    title: "Frontend Development",
    icon: <FaLaptopCode size={60} className="text-blue-500" />,
    shortDescription: "Creating dynamic and responsive web interfaces with a focus on user experience.",
    details: "With a passion for building intuitive and responsive user interfaces, I specialize in using modern tools like React, Next.js, and JavaScript. My frontend development services ensure that your web applications are optimized for performance, accessibility, and mobile-first design.",
  },
  {
    title: "Backend Development",
    icon: <FaDatabase size={60} className="text-blue-500" />,
    shortDescription: "Building solid backend systems to power your web and mobile applications.",
    details: "Using Django and RESTful APIs, I provide backend solutions that ensure your applications are scalable and maintainable. I focus on secure data management, API integration, and cloud deployment, creating the foundation that allows your applications to run smoothly.",
  },
  {
    title: "Product Management",
    icon: <FaTasks size={60} className="text-blue-500" />,
    shortDescription: "I support businesses in driving products from concept to launch through effective planning and execution.",
    details: "With a strong understanding of Agile methodologies, I ensure teams remain adaptable and aligned with business goals. I streamline workflows and maintain clarity through documentation on Notion and Jira, enabling transparent communication, progress tracking, and efficient collaboration. My approach ensures products are delivered on time, meet user needs, and create measurable business impact.",
  },
];

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle the clicked service
  };

  return (
    <section id="services" className="py-32 bg-pink-50">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-black-500">What Services I&rsquo;m Providing</h2>
          <p className="text-gray-600 mt-2 text-xl">Click &quot;Learn More&quot; to discover how I can help bring your ideas to life.</p>
          <div className="mt-2 h-1 w-16 bg-pink-500 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center transition-transform transform hover:-translate-y-2 duration-300 hover:shadow-xl"
            >
              <div className="flex justify-center items-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-black-500 text-lg mb-6">
                {expandedIndex === index ? service.details : service.shortDescription}
              </p>
              <button
                onClick={() => toggleDetails(index)}
                className="flex justify-center items-center text-gray-400 hover:text-pink-500 transition-colors duration-300"
              >
                {expandedIndex === index ? "Show Less" : "Learn More"} <FaArrowRight className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
