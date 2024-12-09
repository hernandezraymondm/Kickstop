import React from 'react';
import PropTypes from 'prop-types';

const LoadingDots = ({ size = 'loading-md' }) => {
  return (
    <div className="flex justify-center items-center">
      <span className={`loading loading-dots ${size}`}></span>
    </div>
  );
};

// Prop validation for better clarity and error detection
LoadingDots.propTypes = {
  size: PropTypes.oneOf([
    'loading-xs',
    'loading-sm',
    'loading-md',
    'loading-lg',
  ]),
};

// Default props
LoadingDots.defaultProps = {
  size: 'loading-md',
};

export default LoadingDots;
