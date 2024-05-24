import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-semibold text-violet-500">
          Anica Barrios
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-violet-500 border-b-2 border-violet-500 transition duration-300'
                    : 'text-gray-600 hover:text-violet-500 transition duration-300'
                }
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive
                    ? 'text-violet-500 border-b-2 border-violet-500 transition duration-300'
                    : 'text-gray-600 hover:text-violet-500 transition duration-300'
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive
                    ? 'text-violet-500 border-b-2 border-violet-500 transition duration-300'
                    : 'text-gray-600 hover:text-violet-500 transition duration-300'
                }
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-violet-500 border-b-2 border-violet-500 transition duration-300'
                    : 'text-gray-600 hover:text-violet-500 transition duration-300'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
