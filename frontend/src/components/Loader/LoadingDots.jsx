import React from 'react';

const LoadingDots = ({ size }) => {
  return (
    <div className="flex justify-center items-center">
      <span className={`loading loading-dots loading-${size}`}></span>
    </div>
  );
};

export default LoadingDots;
