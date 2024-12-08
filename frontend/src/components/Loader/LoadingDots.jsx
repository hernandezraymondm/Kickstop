import React from 'react';

const LoadingDots = ({ size }) => {
  return (
    <div className="flex justify-center items-center">
      <span className={`loading loading-dots ${size}`}></span>
    </div>
  );
};

export default LoadingDots;
