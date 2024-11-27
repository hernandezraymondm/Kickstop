import React from 'react';

const Rating = ({ rating }) => {
  return (
    <div className="inline-flex mb-1">
      <div className="rating rating-sm rating-half">
        <input
          type="radio"
          name={`rating-${Math.random()}`}
          className="rating-hidden"
        />
        {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((value, index) => (
          <input
            key={index}
            type="radio"
            name={`rating-${Math.random()}`}
            className={`mask mask-star-2 ${
              value % 1 === 0.5 ? 'mask-half-1' : ''
            } ${value % 1 === 0 ? 'mask-half-2' : ''} bg-primary ${
              value % 1 === 0 ? 'mr-1' : ''
            }`}
            disabled
            checked={rating === value}
            readOnly
          />
        ))}
      </div>
    </div>
  );
};

export default Rating;
