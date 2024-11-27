import React from 'react';
import ArrowIcon from './Icon/ArrowIcon';
import { Link } from 'react-router-dom';

const CollectionCard = ({ name, background }) => {
  return (
    <div>
      <div
        className="section hero w-96 shadow-xl rounded-xl"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="card-body items-center text-center">
          <h2 className="card-title pb-32 text-black">{name}</h2>
          <div className="card-actions">
            <Link
              to={'/shop'}
              className="btn-ghost btn-primary flex items-center gap-2 font-semibold text-lg border-2 border-current py-2 px-4 text-black hover:border-current hover:bg-secondary"
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
