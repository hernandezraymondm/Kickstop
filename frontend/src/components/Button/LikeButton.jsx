import React from 'react';
import { useLike } from '../../contexts/LikeContext';

const LikeButton = () => {
  const { likeItems } = useLike();

  const totalQuantity = likeItems.length;

  return (
    <div className="flex-none text-secondary">
      <div className="btn btn-ghost btn-circle text-secondary">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <span className="badge badge-sm indicator-item bg-secondary text-white rounded-full">
            {totalQuantity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LikeButton;
