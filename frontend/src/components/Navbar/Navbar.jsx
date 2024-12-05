import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggleButton from '../Button/ThemeToggleButton';
import CartIcon from '../Icon/CartIcon';
import HeartIcon from '../Icon/HeartIcon';

const Navbar = () => {
  const location = useLocation();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const getLinkClass = (path) =>
    location.pathname === path
      ? 'lg:border-b-2 border-secondary text-secondary'
      : '';

  const isHome = location.pathname === '/';

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar w-full">
          <div className="navbar-start xl:gap-4">
            {/* Hamburger Menu - only shows on homepage */}
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
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
            <Link
              to="/"
              className="btn-ghost rounded-lg -mt-1 text-xl flex items-center"
            >
              <img
                src="/assets/images/Logo.png"
                className="h-7 w-8 lg:h-8 lg:w-9"
                alt="logo"
              />
              <h1 className="text-3xl lg:text-4xl font-bold uppercase">
                <span className="text-secondary">K</span>ickstop
              </h1>
            </Link>
          </div>
          {/* Links */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal px-5 gap-5 rounded-box uppercase">
              <li>
                <Link to="/" className={getLinkClass('/')}>
                  <span className="btn btn-ghost text-lg font-semibold">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/shop" className={getLinkClass('/shop')}>
                  <span className="btn btn-ghost text-lg font-semibold">
                    Shop
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/about" className={getLinkClass('/about')}>
                  <span className="btn btn-ghost text-lg font-semibold">
                    About
                  </span>
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
          <div className="navbar-end gap-1 lg:gap-5 hidden sm:flex ">
            <div className="">
              <ThemeToggleButton />
            </div>
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
            <Link
              to="/login"
              className="rounded-lg bg-secondary py-2 px-4 font-semibold hover:bg-orange-700 text-white transition-colors duration-300 ease-in-out"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="sidebar-menu lg:hidden overflow-hidden space-y-4 bg-base-100 h-full text-xl text-center w-8/12">
          <div className="self-start p-2 text-xl flex items-center min-w-0 overflow-hidden">
            <img
              src="/assets/images/Logo.png"
              className="h-6 w-7 sm:h-7 sm:w-8 flex-shrink min-w-0 min-h-0 transition-all duration-300"
              alt="logo"
            />
            <h1 className="text-2xl sm:text-3xl font-bold uppercase flex-shrink">
              <span className="text-secondary">K</span>ickstop
            </h1>
          </div>
          <div className="h-full px-3 flex flex-col justify-between">
            <div>
              <li>
                <Link
                  to="/"
                  className={`font-semibold block rounded-lg p-1 hover:bg-base-200 ${getLinkClass(
                    '/'
                  )}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className={`font-semibold block rounded-lg p-1 hover:bg-base-200 ${getLinkClass(
                    '/shop'
                  )}`}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`font-semibold block rounded-lg p-1 hover:bg-base-200 ${getLinkClass(
                    '/about'
                  )}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`font-semibold block rounded-lg p-1 hover:bg-base-200 ${getLinkClass(
                    '/contact'
                  )}`}
                >
                  Contact
                </Link>
              </li>
              <div className="flex justify-evenly pt-5 sm:hidden">
                <ThemeToggleButton />
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
              </div>
            </div>
            <div className="sticky bottom-5 ">
              <div className="flex justify-evenly pt-5 text-neutral-500">
                <Link className="tooltip tooltip-bottom" data-tip="Twitter">
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
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link className="tooltip tooltip-bottom" data-tip="Instagram">
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
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link className="tooltip tooltip-bottom" data-tip="Facebook">
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
              <div className="divider" />
              <div className="flex justify-center gap-2">
                <Link
                  to="/login"
                  className="w-full outline outline-1 outline-secondary rounded-lg bg-secondary py-1  hover:bg-orange-700 text-white transition-colors duration-300 ease-in-out"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="w-full outline outline-1 rounded-lg bg-base-200 py-1 hover:bg-base-300 transition-colors duration-300 ease-in-out"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
