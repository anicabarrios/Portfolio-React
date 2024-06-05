import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <button
          className="lg:hidden text-violet-500 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            ></path>
          </svg>
        </button>
        <h1 className="text-3xl font-semibold text-violet-500 lg:text-center flex-1 text-center lg:flex-none">
          Anica Barrios
        </h1>
        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            {['about', 'portfolio', 'resume', 'contact'].map((link) => (
              <li key={link}>
                <NavLink
                  to={`/${link}`}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-violet-500 border-b-2 border-violet-500 transition duration-300'
                      : 'text-gray-600 hover:text-violet-500 transition duration-300'
                  }
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:hidden bg-white shadow-lg`}
      >
        <ul className="space-y-4 p-4 text-center">
          {['about', 'portfolio', 'resume', 'contact'].map((link) => (
            <li key={link}>
              <NavLink
                to={`/${link}`}
                className={({ isActive }) =>
                  isActive
                    ? 'text-violet-500 border-b-2 border-violet-500 transition duration-300'
                    : 'text-gray-600 hover:text-violet-500 transition duration-300'
                }
                onClick={() => setIsOpen(false)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
