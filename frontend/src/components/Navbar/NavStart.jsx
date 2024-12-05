import React from 'react';
import { Link } from 'react-router-dom';

const NavStart = () => {
  return (
    <>
      <div className="flex-none">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 23 23"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      {/* Logo Icon */}
      <Link to="/" className="lg:-mt-1 text-xl flex items-center">
        <img
          src="/assets/images/Logo.png"
          className="h-7 w-8 -mt-1 lg:h-8 lg:w-9 lg:-mt-0"
          alt="logo"
        />
        <h1 className="text-3xl lg:text-4xl font-bold uppercase">
          <span className="text-secondary">K</span>ickstop
        </h1>
      </Link>
    </>
  );
};

export default NavStart;
