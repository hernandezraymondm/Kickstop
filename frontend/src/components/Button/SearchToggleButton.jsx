import React, { useState } from 'react';

const SearchToggleButton = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="flex items-center mr-2">
      {isSearchOpen ? (
        <div className="relative flex items-center transition-all duration-300 ease-in-out">
          <input
            type="text"
            className="input input-sm input-bordered pr-8 grow transform transition-all duration-300 ease-in-out w-0 focus:w-52"
            placeholder="Search product"
            autoFocus
            onBlur={() => setIsSearchOpen(false)} // Close when input loses focus
          />
          <div className="absolute text-secondary right-2 top-1/2 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      ) : (
        <div className="sm:tooltip sm:tooltip-bottom" data-tip="Search">
          <button
            className="btn btn-ghost btn-circle text-secondary"
            onClick={toggleSearch}
            aria-label="Open Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchToggleButton;
