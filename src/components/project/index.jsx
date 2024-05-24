import React from 'react';

const Project = ({ title, imageUrl, deployedUrl, githubUrl }) => {
  return (
    <div className="bg-white bg-opacity-80 backdrop-saturate-200 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out">
      <img src={imageUrl} alt={title} className="object-cover w-full h-36" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">{title}</h2>
        <div className="flex justify-between mt-2">
          <a href={deployedUrl} className="text-violet-500 hover:text-violet-700 transition duration-300">
            Live Demo
          </a>
          <a href={githubUrl} className="text-violet-500 hover:text-violet-700 transition duration-300">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
