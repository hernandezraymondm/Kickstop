import React from 'react';

const TableSkeleton = ({ rows }) => {
  return Array(rows)
    .fill(0)
    .map((_, index) => (
      <tr key={index} className="bg-base-100 hover:bg-base-300">
        <td>
          <div className="avatar">
            <div className="skeleton h-12 w-12 shrink-0 rounded-box flex items-center justify-center">
              <svg
                className="h-12 w-12 mt-3 ml-3 mx-auto animate-pulse text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 39 38"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
        </td>
        <td className="py-3 px-5">
          <div className="skeleton h-4 w-full" />
        </td>
        <td className="py-3 px-5">
          <div className="skeleton h-4 w-full" />
        </td>
        <td className="py-3 px-5">
          <div className="skeleton h-4 w-full" />
        </td>
        <td className="py-3 px-5">
          <div className="skeleton h-4 w-full" />
        </td>
        <td className="py-3 px-5">
          <div className="skeleton h-4 w-full" />
        </td>
        <td className="py-3 px-5">
          <div className="flex justify-center gap-x-1">
            <div className="skeleton rounded-lg rounded-r-none h-8 w-[59px]" />
            <div className="skeleton rounded-lg rounded-l-none h-8 w-[73px]" />
          </div>
        </td>
      </tr>
    ));
};

export default TableSkeleton;
