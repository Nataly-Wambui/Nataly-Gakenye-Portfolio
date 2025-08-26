import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const Projects = () => {
  const projectItems = [
    {
      title: 'Deals Database',
      description: 'Managed and cleaned a comprehensive database of venture capital investments in African startups. Addressed data quality issues by handling missing values, correcting formatting and spelling errors, and removing blank rows. Conducted data cleaning to ensure accuracy and consistency. Final analysis results were effectively communicated through visualizations.',
      link: 'https://github.com/Nataly-Wambui/Deals-Database',
      image: '/images/Project 1.png',
    },
    {
      title: 'Statewide Distributed Solar',
      description: 'Analyzed a dataset related to solar energy installations, focusing on installation locations and energy output. Conducted data cleaning by filling and removing null values, dropping duplicates, and visualizing key trends.',
      link: 'https://github.com/Nataly-Wambui/Data-Cleaning',
      image: '/images/Project 2.png',
    },
    {
      title: 'Tuinuane Mentorship System',
      description: 'A mentorship system that connects mentors and mentees, providing tools for tracking tasks, and setting goals, and achievements to enhance the mentorship experience.',
      link: 'https://github.com/Nataly-Wambui/Mentorship-Program.git',
      image: '/images/Project 3.png',
    },
    {
      title: 'LostLocate',
      description: 'A centralized system for managing missing persons cases that allows police officers and mortuary staff to input detailed data on missing individuals and unidentified bodies, utilizing fuzzy matching algorithms to identify potential matches quickly, and providing a public interface to promote transparency and community involvement.',
      link: 'https://coda.io/d/_dhmm6ZtAylu/Upile-Project-Hub_suRFRetp',
      image: '/images/Project 4.png',
    },
    {
      title: 'Task Countdown Timer',
      description: 'The task countdown timer tracks the duration of each activity, providing a detailed record of the time spent on specific tasks added to the to-do list.',
      link: 'https://github.com/Nataly-Wambui/To-do-Timer.git',
      image: '/images/Project 5.png',
    },
    {
      title: 'Multimedia Project',
      description: 'A platform that brings together articles, videos, blog posts, and podcasts in one place, making it easy for users to learn, engage, and explore content.',
      link: 'https://github.com/Nataly-Wambui/Multimedia-Project',
      image: '/images/Project 6.png',
    },
  ];

  return (
  <section id="projects" className="py-20 bg-gray-50">
  <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">My Projects</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
    {projectItems.map((project, idx) => (
      <div
        key={idx}
        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col h-full"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          className="object-cover rounded-md mb-4 h-[200px] w-full"
        />
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300 flex items-center mb-2"
        >
          {project.title} <FaExternalLinkAlt className="ml-2 text-sm" />
        </a>
        <p className="text-lg text-black-500">{project.description}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default Projects;
