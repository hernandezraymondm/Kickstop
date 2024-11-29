import React from 'react';

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div key={index} className="w-80 mb-5 shadow-xl rounded-xl">
        <div className="skeleton h-52 w-full rounded-b-none " />
        <div className="card-body bg-base-200 rounded-b-xl">
          <div className="skeleton h-4 w-32" />
          <div className="skeleton h-5 w-full" />
          <div className="skeleton h-4 w-full" />
          <div className="flex items-center">
            <div className="skeleton h-4 w-24" />
            <div className="skeleton h-4 w-24" />
          </div>
          <div className="flex justify-end">
            <div className="skeleton h-8 w-32" />
          </div>
        </div>
      </div>
    ));
};

export default CardSkeleton;
