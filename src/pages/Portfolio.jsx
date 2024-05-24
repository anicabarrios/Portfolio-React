import React from 'react';
import Project from '../components/project';

const projects = [
  {
    title: 'Book Search Engine',
    imageUrl: '/images/book-search.png',
    deployedUrl: 'https://book-search-engine-n6bx.onrender.com/',
    githubUrl: 'https://github.com/anicabarrios/Book-Search-Engine?tab=readme-ov-file',
  },
  {
    title: 'Tech Blog',
    imageUrl: '/images/tech-blog.png',
    deployedUrl: 'https://tech-blog-ab-23176522f867.herokuapp.com/',
    githubUrl: 'https://github.com/anicabarrios/Tech-Blog',
  },
  {
    title: 'Note Taker',
    imageUrl: '/images/note.png',
    deployedUrl: 'https://note-taker-anica-a74997e580e0.herokuapp.com',
    githubUrl: 'https://github.com/anicabarrios/Note-Taker',
  },
  {
    title: 'Code Quiz',
    imageUrl: '/images/code-quiz.png',
    deployedUrl: 'https://anicabarrios.github.io/Code-Quiz/',
    githubUrl: 'https://github.com/anicabarrios/Code-Quiz',
  },
  {
    title: 'Text Editor',
    imageUrl: '/images/jate.png',
    deployedUrl: 'https://text-editor-pwa-vsbv.onrender.com/',
    githubUrl: 'https://github.com/anicabarrios/Text-Editor-PWA',
  },
  {
    title: 'Music Search',
    imageUrl: '/images/music.png',
    deployedUrl: 'https://grandnaguszek.github.io/UM-Coding-BC-Group-Project-1/',
    githubUrl: 'https://github.com/anicabarrios/UM-Coding-BC-Group-Project-1',
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
