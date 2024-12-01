import React from 'react';
import ArrowIcon from '../Icon/ArrowIcon';
import { Link } from 'react-router-dom';

const CollectionCard = ({ name, background, target }) => {
  return (
    <div className="hover:scale-110 transition-transform duration-300">
      <div
        className="section hero w-full shadow-xl rounded-xl"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="card-body items-center text-center">
          <h2 className="card-title pb-40 sm:pb-56 lg:pb-40 text-black">
            {name}
          </h2>
          <div className="card-actions">
            <Link
              to={`/shop?target=${target}`}
              className="btn-ghost btn-primary flex items-center gap-2 font-semibold text-lg border-2 border-current py-2 px-4 text-black hover:border-current hover:bg-primary"
            >
              Explore All
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
