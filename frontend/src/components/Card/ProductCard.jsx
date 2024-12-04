import React from 'react';
import ProductSingleCard from './ProductSingleCard';
import CardSkeleton from '../Loader/CardSkeleton';

const ProductCard = ({ product, loading, cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-5 mb-5 max-w-[1450px] mx-auto">
      {loading && <CardSkeleton cards={cards} />}
      {Array.isArray(product) &&
        product.map((item) => (
          <ProductSingleCard key={item._id} product={item} />
        ))}
    </div>
  );
};

export default ProductCard;
