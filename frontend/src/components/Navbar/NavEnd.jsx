import React from 'react';
import ThemeToggleButton from '../Button/ThemeToggleButton';
import HeartIcon from '../Icon/HeartIcon';
import { Link } from 'react-router-dom';
import CartIcon from '../Icon/CartIcon';

const NavEnd = () => {
  return (
    <>
      <ThemeToggleButton />
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
    </>
  );
};

export default NavEnd;
