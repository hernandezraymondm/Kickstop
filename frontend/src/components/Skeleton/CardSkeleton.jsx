import React from 'react';

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div key={index} className="card-compact w-80 mb-5 shadow-xl rounded-xl">
        <div className="skeleton h-[250px] w-full rounded-b-none ">
          <div className="h-full flex justify-center items-center animate-pulse rounded-t-xl">
            <svg
              className="w-20 h-20 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>
        <div className="card-body bg-base-200 rounded-b-xl">
          <div className="skeleton h-3 w-32 mt-1" />
          <div className="skeleton h-5 w-full mt-3" />
          <div className="skeleton h-3 w-full mt-3" />
          <div className="flex items-center mt-1">
            <div className="skeleton h-4 w-48" />
          </div>
          <div className="flex justify-end">
            <div className="skeleton h-12 w-28 mt-1 rounded-lg" />
          </div>
        </div>
      </div>
    ));
};

export default CardSkeleton;
