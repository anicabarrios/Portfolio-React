// src/components/Project.jsx
import React from 'react';

const Project = ({ title, imageUrl, deployedUrl, githubUrl }) => {
  return (
    <div className="bg-white bg-opacity-80 backdrop-saturate-200 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-500">
      <img src={imageUrl} alt={title} className="object-cover w-full h-48" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">{title}</h2>
        <div className="flex justify-between mt-4">
          <a href={deployedUrl} className="text-blue-500 hover:text-blue-700 transition duration-300">
            Live Demo
          </a>
          <a href={githubUrl} className="text-blue-500 hover:text-blue-700 transition duration-300">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
