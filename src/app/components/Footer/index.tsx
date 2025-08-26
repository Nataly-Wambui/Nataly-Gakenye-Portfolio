import React from 'react';
import { FaTwitter, FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto text-center">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://x.com/GakenyeNataly"
              aria-label="Twitter Profile"
              className="text-white hover:text-pink-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://github.com/Nataly-Wambui"
              aria-label="GitHub Profile"
              className="text-white hover:text-pink-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/nataly-gakenye-9909502b3"
              aria-label="LinkedIn Profile"
              className="text-white hover:text-pink-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="mailto:wambuinatalygakenye@gmail.com"
              aria-label="Email Nataly Gakenye"
              className="text-white hover:text-pink-500 transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
          {/* Email Address */}
          <p className="text-lg text-gray-300 mb-4">wambuinatalygakenye@gmail.com</p>
          {/* Footer Text */}
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Personal Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
