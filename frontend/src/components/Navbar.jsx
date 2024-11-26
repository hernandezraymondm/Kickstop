import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';
import CartIcon from './Icon/CartIcon';
import UserIcon from './Icon/UserIcon';
import HeartIcon from './Icon/HeartIcon';

const Navbar = ({ toggleSidebar }) => {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const getLinkClass = (path) =>
    location.pathname === path
      ? 'lg:border-b-2 border-secondary text-secondary py-1'
      : '';

  return (
    <div className="navbar mx-auto text-accent-content ">
      <div className="navbar-start xl:gap-4">
        {/* Hamburger Menu */}
        <button
          className="btn-ghost rounded-lg hidden md:flex"
          onClick={toggleSidebar}
        >
          <svg
            viewBox="0 0 32 32"
            className="h-12 transition-transform duration-600 ease-in-out transform-gpu"
          >
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              className="line"
              d="M7 16 27 16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </button>

        {/* Logo Icon */}
        <a href="/" className="btn btn-ghost text-xl flex items-center">
          <img
            src="/assets/images/Logo.png"
            width="40"
            height="40"
            alt="logo"
          />
          <h1 className="text-4xl font-bold uppercase hidden xl:flex">
            <span className="text-secondary">K</span>ickstop
          </h1>
        </a>
      </div>

      {/* Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-5 gap-8 rounded-box uppercase">
          <li>
            <Link to="/" className={getLinkClass('/')}>
              <span className="btn btn-ghost text-lg font-semibold">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/shop" className={getLinkClass('/shop')}>
              <span className="btn btn-ghost text-lg font-semibold">Shop</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className={getLinkClass('/about')}>
              <span className="btn btn-ghost text-lg font-semibold">About</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className={getLinkClass('/contact')}>
              <span className="btn btn-ghost text-lg font-semibold">
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Icons */}
      <div className="navbar-end sm:gap-5">
        <Link to="/cart" className="tooltip tooltip-bottom" data-tip="Liked">
          <HeartIcon />
        </Link>
        <Link to="/cart" className="tooltip tooltip-bottom" data-tip="Cart">
          <CartIcon />
        </Link>
        <ThemeToggleButton />
        <Link to="/login" className="tooltip tooltip-bottom" data-tip="Account">
          <UserIcon />
        </Link>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn-ghost rounded-lg mx-2 lg:hidden"
          >
            <label className="cursor-pointer relative">
              <input
                type="checkbox"
                className="hidden"
                checked={isDropdownOpen}
                onChange={toggleDropdown}
              />
              <svg
                viewBox="0 0 32 32"
                className="h-12 transition-transform duration-600 ease-in-out transform-gpu"
              >
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  className="line"
                  d="M7 16 27 16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </label>
          </div>
          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52 uppercase"
            >
              <li>
                <Link to="/" className={getLinkClass('/')}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className={getLinkClass('/shop')}>
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className={getLinkClass('/about')}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className={getLinkClass('/contact')}>
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
