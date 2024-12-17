import React from 'react';
import { Link } from 'react-router-dom';
import CheckIcon from '../components/Icon/CheckIcon';
import CircleArrowIcon from '../components/Icon/CircleArrowIcon';

const RegisterSuccess = () => {
  return (
    <div className="p-4 max-w-[1300px] mx-auto my-5">
      <div className="hero-content text-center mb-24">
        <div className="max-w-xl gap-y-3 flex flex-col place-items-center">
          <CheckIcon />
          <h1 className="text-2xl font-bold text-success">
            Registration Complete
          </h1>
          <h1 className="text-3xl font-bold">
            Welcome to <span className="text-secondary">Kickstop</span>
          </h1>
          <Link
            to="/login"
            className="btn btn-success m-4 text-white sm:text-lg font-semibold"
          >
            <CircleArrowIcon />
            Login to your account
          </Link>
          <p>
            Simply tap{' '}
            <span className="text-success">Login to your account</span> and the
            account login screen will appear. Once the login screen is
            displayed, enter your email and you password.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterSuccess;
