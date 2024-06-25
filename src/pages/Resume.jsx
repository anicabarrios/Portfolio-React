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
  'TailwindCSS',
  'Git',
  'RESTful APIs',
  'Responsive Design',
  'Agile Methodologies',
  'MERN'
];

const Resume = () => {
  return (
    <div className="flex justify-center items-center min-h-[75vh] bg-cover bg-center p-4 md:p-0">
      <div className="w-full md:w-11/12 max-w-3xl bg-white bg-opacity-70 backdrop-saturate-150 shadow-2xl rounded-xl overflow-hidden p-6 md:p-10 transform hover:scale-105 transition duration-500">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-6 text-violet-500 text-center font-raleway">
          Resume
        </h1>
        <div className="flex flex-col items-center mb-6 md:mb-8">
          <a
            href="/Resume.pdf"
            download
            className="bg-violet-500 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg text-lg font-bold shadow-lg hover:bg-violet-700 transition duration-300 text-center"
          >
            Download Resume
          </a>
        </div>
        <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-inner">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-gray-900 text-center">Proficiencies</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 text-base md:text-lg leading-relaxed text-gray-800 font-roboto text-center md:text-left">
            {proficiencies.map((proficiency, index) => (
              <li key={index} className="flex items-center justify-center md:justify-start space-x-2">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-violet-500"
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
