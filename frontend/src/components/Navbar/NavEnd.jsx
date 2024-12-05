import React from 'react';
import ThemeToggleButton from '../Button/ThemeToggleButton';
import { Link } from 'react-router-dom';
import CartButton from '../Button/CartIButton';
import LikeButton from '../Button/LikeButton';
import SearchToggleButton from '../Button/SearchToggleButton';

const NavEnd = () => {
  return (
    <>
      <SearchToggleButton />
      <div className="hidden sm:flex">
        <ThemeToggleButton />
      </div>

      <Link
        to="/liked"
        className="tooltip tooltip-bottom hidden sm:block"
        data-tip="Liked"
      >
        <LikeButton />
      </Link>
      <Link to="/cart" className="hidden sm:block">
        <CartButton />
      </Link>
    </>
  );
};

export default NavEnd;
