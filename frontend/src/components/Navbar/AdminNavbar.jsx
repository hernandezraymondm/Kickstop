import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggleButton from '../Button/ThemeToggleButton';
import CartIcon from '../Icon/CartIcon';
import UserIcon from '../Icon/UserIcon';
import HeartIcon from '../Icon/HeartIcon';

const AdminNavbar = ({ toggleSidebar }) => {
  const location = useLocation();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const logout = () => {
    localStorage.removeItem('token');
  };

  const getLinkClass = (path) =>
    location.pathname === path
      ? 'lg:border-b-2 border-secondary text-secondary py-1'
      : '';

  const isHome = location.pathname === '/';

  return (
    <div className="navbar mx-auto text-accent-content pr-8">
      <div className="navbar-start xl:gap-4">
        {/* Hamburger Menu - only shows on homepage */}

        <button
          className={`${
            isHome && 'cursor-pointer'
          } ml-2 mt-2 cursor-default rounded-lg hidden md:flex fixed`}
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-11"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
            />
          </svg>
        </button>

        {/* Logo Icon */}
        <Link
          to="/"
          className="btn btn-ghost text-xl flex items-center md:ml-14"
        >
          <img
            src="/assets/images/Logo.png"
            width="40"
            height="40"
            alt="logo"
          />
          <h1 className="text-4xl font-bold uppercase hidden xl:flex">
            <span className="text-secondary">K</span>ickstop
          </h1>
        </Link>
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
      <div className="navbar-end gap-1 sm:gap-5">
        <Link
          to="/liked"
          className="tooltip tooltip-bottom hidden sm:block"
          data-tip="Liked"
        >
          <HeartIcon />
        </Link>
        <Link to="/cart" className="hidden sm:block">
          <CartIcon />
        </Link>
        <div className="hidden sm:block">
          <ThemeToggleButton />
        </div>

        <div className="dropdown dropdown-end dropdown-hover">
          <Link to="/admin">
            <UserIcon />
          </Link>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-44 p-2 shadow gap-1"
          >
            <li>
              <Link to={'/admin'} className="btn-ghost font-bold">
                Account
              </Link>
            </li>
            <li>
              <Link to={'/admin'} className="btn-ghost font-bold">
                Purchase
              </Link>
            </li>
            <li>
              <Link to={'/admin'} className="btn-ghost font-bold">
                Notification
              </Link>
            </li>
            <li>
              <Link to={'/'} onClick={logout} className="btn font-bold">
                Logout
              </Link>
            </li>
          </ul>
        </div>

        <button
          onClick={toggleNavbar}
          className={`btn-ghost rounded-lg hamburger lg:hidden z-20 ${
            mobileDrawerOpen && 'fixed'
          }`}
          aria-expanded={mobileDrawerOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <svg
            viewBox="0 0 32 32"
            className={`h-12 transition-transform duration-600 ease-in-out transform-gpu ${
              mobileDrawerOpen ? 'transform rotate-45' : ''
            }`}
          >
            <path
              className={`line line-top-bottom ${
                mobileDrawerOpen ? 'line-top-bottom-open' : ''
              }`}
              d="M27 10L13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              className="line"
              d="M7 16L27 16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </button>
        {mobileDrawerOpen && (
          <div className="fixed top-0 right-0 z-10 flex w-full flex-col items-center justify-center bg-base-200 lg:hidden rounded-b-xl shadow-xl p-2">
            <div className="self-start p-2 text-xl flex items-center">
              <img
                src="/assets/images/Logo.png"
                width="30"
                height="30"
                alt="logo"
              />
              <h1 className="text-3xl font-bold uppercase">
                <span className="text-secondary">K</span>ickstop
              </h1>
            </div>

            <ul className="space-y-2 font-semibold text-xl text-center w-full py-4">
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
              <div className="flex justify-evenly pt-2 space-x-2 sm:hidden">
                <Link
                  to="/liked"
                  className="tooltip tooltip-bottom"
                  data-tip="Liked"
                >
                  <HeartIcon />
                </Link>
                <Link
                  to="/cart"
                  className="tooltip tooltip-bottom"
                  data-tip="Cart"
                >
                  <CartIcon />
                </Link>
                <ThemeToggleButton />
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNavbar;
