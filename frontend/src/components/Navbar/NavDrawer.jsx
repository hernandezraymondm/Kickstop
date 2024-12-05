import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeartIcon from '../Icon/HeartIcon';
import CartIcon from '../Icon/CartIcon';
import ThemeToggleButton from '../Button/ThemeToggleButton';
import UserIcon from '../Icon/UserIcon';

const NavDrawer = ({ getLinkClass }) => {
  const location = useLocation();
  const token = localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
  };

  return (
    <>
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
              className={`font-semibold border-none block rounded-lg p-1 hover:bg-base-200 ${getLinkClass(
                '/'
              )}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className={`font-semibold border-none block rounded-lg p-1 hover:bg-base-200 ${getLinkClass(
                '/shop'
              )}`}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`font-semibold border-none block rounded-lg p-1 hover:bg-base-200 ${getLinkClass(
                '/about'
              )}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`font-semibold border-none block rounded-lg p-1 hover:bg-base-200 ${getLinkClass(
                '/contact'
              )}`}
            >
              Contact
            </Link>
          </li>
          <div className="flex justify-evenly pt-5">
            <ThemeToggleButton />
            <Link
              to="/liked"
              className="tooltip tooltip-bottom"
              data-tip="Liked"
            >
              <HeartIcon />
            </Link>
            <Link to="/cart" className="tooltip tooltip-bottom" data-tip="Cart">
              <CartIcon />
            </Link>
          </div>
        </div>
        <div className="sticky bottom-5 ">
          <div className="flex justify-evenly pt-5 text-neutral-500">
            <Link className="tooltip tooltip-bottom" data-tip="LinkedIn">
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
            <Link className="tooltip tooltip-bottom" data-tip="GitHub">
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
          {token ? (
            <div className="flex justify-center items-center gap-4">
              <div className="dropdown dropdown-top dropdown-hover">
                <Link to="/admin">
                  <UserIcon />
                </Link>
                <ul
                  tabIndex={0}
                  className="dropdown-content bg-base-200 rounded-box z-[1] w-44 shadow gap-1 overflow-hidden text-base space-y-3"
                >
                  <div className="p-2 text-start bg-secondary text-white">
                    @SuperAdmin
                  </div>
                  <div className="px-2 pb-3">
                    <li>
                      <Link
                        to={'/admin'}
                        className="btn-ghost rounded-lg block p-1"
                      >
                        Account
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'/admin'}
                        className="btn-ghost rounded-lg block p-1"
                      >
                        Purchase
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'/admin'}
                        className="btn-ghost rounded-lg block p-1"
                      >
                        Notification
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
              <Link
                to="/"
                onClick={logout}
                className="w-full outline outline-1 rounded-lg bg-base-200 py-1 hover:bg-base-300 transition-colors duration-300 ease-in-out"
              >
                Logout
              </Link>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
};

export default NavDrawer;
