import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useLike } from '../contexts/LikeContext';
import ProductSingleCard from '../components/Card/ProductSingleCard';

const LikedItems = () => {
  const { addToCart } = useCart();
  const { likeItems } = useLike();

  if (likeItems.length === 0) {
    return (
      <div className="text-3xl text-center my-80">You have no liked items.</div>
    );
  }

  return (
    <div className="p-4 my-4 max-w-[1400px] mx-auto">
      <h2 className="text-2xl font-semibold text-center my-6">Liked Items</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {likeItems.map((item, index) => (
          <div
            key={index}
            className="bg-base-200 rounded-lg shadow-lg p-4 flex flex-col"
          >
            <ProductSingleCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedItems;
