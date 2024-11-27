import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <h1 className="text-9xl font-bold mb-8">404</h1>
      <h2 className="text-4xl mb-4">Page Not Found</h2>
      <p className="text-xl mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <div className="flex space-x-4">
        <Link to="/" className="btn btn-primary btn-lg">
          Go Home
        </Link>
        <Link to="/contact" className="btn btn-outline btn-lg">
          Contact Us
        </Link>
      </div>
      <div className="absolute bottom-10 flex items-center justify-center space-x-2 animate-bounce">
        <div className="w-4 h-4 bg-white rounded-full"></div>
        <div className="w-4 h-4 bg-white rounded-full"></div>
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default NotFound;
