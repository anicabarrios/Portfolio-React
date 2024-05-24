import React from 'react';
import Project from '../components/project';

const projects = [
  {
    title: 'Project One',
    imageUrl: '/images/project1.jpg',
    deployedUrl: 'https://deployed-app1.com',
    githubUrl: 'https://github.com/anicabarrios/project1',
  },
  {
    title: 'Project Two',
    imageUrl: '/images/project2.jpg',
    deployedUrl: 'https://deployed-app2.com',
    githubUrl: 'https://github.com/anicabarrios/project2',
  },
  {
    title: 'Project Three',
    imageUrl: '/images/project3.jpg',
    deployedUrl: 'https://deployed-app3.com',
    githubUrl: 'https://github.com/anicabarrios/project3',
  },
  {
    title: 'Project Four',
    imageUrl: '/images/project4.jpg',
    deployedUrl: 'https://deployed-app4.com',
    githubUrl: 'https://github.com/anicabarrios/project4',
  },
  {
    title: 'Project Five',
    imageUrl: '/images/project5.jpg',
    deployedUrl: 'https://deployed-app5.com',
    githubUrl: 'https://github.com/anicabarrios/project5',
  },
  {
    title: 'Project Six',
    imageUrl: '/images/project6.jpg',
    deployedUrl: 'https://deployed-app6.com',
    githubUrl: 'https://github.com/anicabarrios/project6',
  },
];

const Portfolio = () => {
  return (
    <div
      className="flex justify-center items-center min-h-[75vh] bg-cover bg-center"
    
    >
      <div className="w-11/12 max-w-6xl bg-white bg-opacity-70 backdrop-saturate-150 shadow-2xl rounded-xl overflow-hidden p-10 transform hover:scale-105 transition duration-500">
        <h1 className="text-3xl font-semibold mb-8 text-violet-500 text-center font-raleway">
          Portfolio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              imageUrl={project.imageUrl}
              deployedUrl={project.deployedUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
