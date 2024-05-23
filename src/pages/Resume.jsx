// src/components/Resume.jsx
import React from 'react';

const proficiencies = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'SQL',
  'NoSQL',
  'Git',
  'RESTful APIs',
  'Responsive Design',
  'Agile Methodologies',
  'MERN'
];

const Resume = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-100 py-10">
      <div className="w-11/12 max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden p-8 transform hover:scale-105 transition duration-500">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center font-raleway">
          Resume
        </h1>
        <div className="flex flex-col items-center mb-8">
          <a
            href="/path/to/Anica_Barrios_Resume.pdf"
            download
            className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-bold shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Download Resume
          </a>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 text-center">Proficiencies</h2>
          <ul className="grid grid-cols-2 gap-4 text-lg leading-relaxed text-gray-800 font-roboto">
            {proficiencies.map((proficiency, index) => (
              <li key={index} className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L7 13.586 4.707 11.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l9-9a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                {proficiency}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
