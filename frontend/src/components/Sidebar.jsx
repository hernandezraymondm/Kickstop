import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Sidebar = ({ isOpen }) => {
  return (
    <div className="fixed w-20 h-full bg-base-100 flex-col justify-between items-center py-20 text-accent-content hidden md:flex">
      {isOpen && (
        <>
          <div className="flex flex-col items-center mt-14">
            {/* Rotated Text */}
            <ul className="list-none p-0 flex flex-col space-y-32 uppercase font-semibold text-center">
              <li>
                <div className="transform -rotate-90 text-left">
                  <ScrollLink
                    to="featured"
                    smooth={true}
                    duration={500}
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
          <div className="flex flex-col items-center">
            {/* Icons at the Bottom */}
            <div className="btn btn-ghost">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
            <div className="btn btn-ghost">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
            <div className="btn btn-ghost">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
