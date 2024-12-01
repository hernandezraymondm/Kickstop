import React from 'react';

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div
        key={index}
        className="hover:scale-110 transition-transform duration-300 bg-base-100 shadow-xl rounded-xl overflow-hidden mb-5"
      >
        <div className="skeleton w-full h-52 rounded-t-lg rounded-b-none animate-pulse">
          <div className="h-full flex justify-center items-center">
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
        <div className="card-body bg-base-200 rounded-b-xl p-4">
          <div className="skeleton h-3 w-1/2 mt-1" />
          <div className="skeleton h-3 w-full mt-[2px]" />
          <div className="skeleton h-3 w-full mt-[2px]" />
          <div className="skeleton h-4 w-1/2" />
          <div className="mt-2">
            <div className="skeleton h-5 sm:h-7 w-full rounded-lg" />
          </div>
        </div>
      </div>
    ));
};

export default CardSkeleton;
