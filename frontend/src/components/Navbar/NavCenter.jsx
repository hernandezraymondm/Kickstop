import React from 'react';
import { Link } from 'react-router-dom';

const NavCenter = ({ getLinkClass }) => {
  return (
    <>
      <ul className="menu-horizontal gap-5 rounded-box uppercase">
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
            <span className="btn btn-ghost text-lg font-semibold">Contact</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavCenter;
