import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggleButton from '../Button/ThemeToggleButton';
import UserIcon from '../Icon/UserIcon';
import CartButton from '../Button/CartIButton';
import LikeButton from '../Button/LikeButton';
import LinkedInIcon from '../Icon/LinkedInIcon';
import GitHubIcon from '../Icon/GitHubIcon';
import FacebookIcon from '../Icon/FacebookIcon';
import { useAuth } from '../../contexts/AuthContext';

const NavDrawer = ({ getLinkClass }) => {
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div className="self-start p-2 text-xl flex items-center min-w-0 overflow-hidden">
        <img
          src="/assets/images/Logo.png"
          className="h-6 w-7 -mt-[3px]"
          alt="logo"
        />
        <h1 className="text-2xl font-bold">
          <span className="text-secondary">K</span>ickStop
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
              className="sm:tooltip sm:tooltip-bottom"
              data-tip="Liked"
            >
              <LikeButton />
            </Link>
            <Link
              to="/cart"
              className="sm:tooltip sm:tooltip-bottom"
              data-tip="Cart"
            >
              <CartButton />
            </Link>
          </div>
        </div>
        <div className="sticky bottom-5 ">
          <div className="flex justify-evenly pt-5 text-neutral-500">
            <LinkedInIcon tooltip={'top'} />
            <GitHubIcon tooltip={'top'} />
            <FacebookIcon tooltip={'top'} />
          </div>
          <div className="divider" />
          {isAuthenticated ? (
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
                    {user.username}
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
                onClick={handleLogout}
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
