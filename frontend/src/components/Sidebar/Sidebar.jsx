import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import FacebookIcon from '../Icon/FacebookIcon';
import GitHubIcon from '../Icon/GitHubIcon';
import LinkedInIcon from '../Icon/LinkedInIcon';

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
              <LinkedInIcon tooltip={'top'} />
            </div>
            <div className="btn btn-ghost">
              <GitHubIcon tooltip={'top'} />
            </div>
            <div className="btn btn-ghost">
              <FacebookIcon tooltip={'top'} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
