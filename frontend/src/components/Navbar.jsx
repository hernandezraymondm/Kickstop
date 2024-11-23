import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';
import CartIcon from './Icon/CartIcon';
import UserIcon from './Icon/UserIcon';
import HeartIcon from './Icon/HeartIcon';
import SearchIcon from './Icon/SearchIcon';

const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (path) =>
    location.pathname === path
      ? 'border-b-2 border-secondary text-secondary py-1'
      : '';

  return (
    <header className="navbar max-w-[1600px] mx-auto text-accent-content uppercase">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-none w-52"
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
        </div>
        <a href="/" className="btn btn-ghost text-xl flex items-center">
          <img
            src="/assets/images/Logo.png"
            width="40"
            height="40"
            alt="logo"
          />
          <h1 className="text-4xl font-bold">
            <span className="text-secondary">K</span>ickstop
          </h1>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 gap-8 rounded-box">
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

      <div className="navbar-end gap-5">
        <Link to="/login">
          <SearchIcon />
        </Link>
        <Link to="/cart">
          <HeartIcon />
        </Link>
        <Link to="/cart">
          <CartIcon />
        </Link>
        <ThemeToggleButton />
        <Link to="/login">
          <UserIcon />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
