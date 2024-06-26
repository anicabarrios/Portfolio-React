import React from 'react';

const About = () => {
  return (
    <div
      className="flex justify-center items-center min-h-[75vh] bg-cover bg-center"
         >
      <div className="w-11/12 max-w-4xl bg-white bg-opacity-70 backdrop-saturate-150 shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row transform hover:scale-105 transition duration-500">
        <div className="md:w-2/5 relative">
          <img
            src="/images/photo.jpg"
            alt="Anica Barrios"
            className="object-cover w-full h-full rounded-t-xl md:rounded-t-none md:rounded-l-xl"
          />
        </div>
        <div className="md:w-3/5 p-6 md:p-10 flex flex-col justify-center bg-white bg-opacity-80 backdrop-saturate-200">
          <div className="bg-white bg-opacity-80 backdrop-saturate-200 p-6 md:p-8 rounded-lg shadow-lg text-gray-900">
            <h1 className="text-3xl font-semibold mb-4 text-violet-500 font-raleway">
              Anica Barrios
            </h1>
            <p className="text-lg leading-relaxed mb-4 text-gray-800 font-roboto">
            Welcome! I'm Anica Barrios, a passionate full-stack web developer with a talent for creating engaging and efficient web applications. My skills in both frontend and backend development allow me to deliver comprehensive digital solutions. In my free time, I love exploring new technologies, getting lost in books, enjoying the outdoors, and playing with my dog.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/anica-barrios/" className="text-violet-500 hover:text-violet-700 transition duration-300">
                LinkedIn
              </a>
              <a href="https://github.com/anicabarrios" className="text-violet-500 hover:text-violet-700 transition duration-300">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
