import React from 'react';

const Rating = () => {
  return (
    <div className="inline-block">
      <div className="rating rating-sm">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-primary"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-primary"
          defaultChecked
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-primary"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-primary"
          defaultChecked
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-primary"
        />
      </div>
    </div>
  );
};

export default Rating;
