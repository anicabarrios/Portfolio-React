import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-6 border-t border-gray-200">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/anicabarrios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-500 hover:text-violet-700 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/anica-barrios/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-500 hover:text-violet-700 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://x.com/BarriosAnica"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-500 hover:text-violet-700 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={30} />
          </a>
        </div>
        <p className="text-violet-500 text-sm">&copy; 2024 Anica Barrios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
