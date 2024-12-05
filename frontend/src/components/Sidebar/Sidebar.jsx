import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Sidebar = ({ isOpen }) => {
  return (
    <div className="fixed top-0 w-20 h-full bg-base-100 flex-col justify-between items-center text-accent-content hidden md:flex">
      {isOpen && (
        <>
          <div className="flex flex-col items-center mt-52">
            {/* Rotated Text */}
            <ul className="list-none p-0 flex flex-col space-y-32 uppercase font-semibold text-center">
              <li>
                <div className="transform -rotate-90 text-left">
                  <ScrollLink
                    to="featured"
                    smooth={true}
                    duration={500}
                    offset={-65}
                    spy={true}
                    activeClass="text-secondary"
                    className="btn-ghost rounded-lg p-2 text-accent-content text-lg cursor-pointer"
                  >
                    Featured
                  </ScrollLink>
                </div>
              </li>
              <li>
                <div className="transform -rotate-90">
                  <ScrollLink
                    to="collection"
                    smooth={true}
                    duration={500}
                    offset={-200}
                    spy={true}
                    activeClass="text-secondary"
                    className="btn-ghost rounded-lg p-2 text-lg cursor-pointer"
                  >
                    Collection
                  </ScrollLink>
                </div>
              </li>
              <li>
                <div className="transform -rotate-90">
                  <ScrollLink
                    to="bestsellers"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    spy={true}
                    activeClass="text-secondary"
                    className="btn-ghost rounded-lg p-2 text-accent-content text-lg cursor-pointer"
                  >
                    Bestsellers
                  </ScrollLink>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center mb-3">
            {/* Icons at the Bottom */}
            <div className="btn btn-ghost">
              <Link className="tooltip tooltip-top" data-tip="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
            <div className="btn btn-ghost">
              <Link className="tooltip tooltip-top" data-tip="GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
            </div>
            <div className="btn btn-ghost">
              <Link className="tooltip tooltip-top" data-tip="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
