import React from 'react';
import { useLocation } from 'react-router-dom';
import NavStart from './NavStart';
import NavCenter from './NavCenter';
import NavEnd from './NavEnd';
import NavDrawer from './NavDrawer';

const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (path) =>
    location.pathname === path
      ? 'lg:border-b-2 border-secondary text-secondary'
      : '';

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar w-full">
          <div className="navbar-start xl:gap-4">
            <NavStart />
          </div>
          <div className="navbar-center hidden xl:flex">
            <NavCenter getLinkClass={getLinkClass} />
          </div>
          <div className="navbar-end gap-3">
            <NavEnd />
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="sidebar-menu overflow-hidden space-y-4 bg-base-100 h-full text-xl text-center w-8/12">
          <NavDrawer getLinkClass={getLinkClass} />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
