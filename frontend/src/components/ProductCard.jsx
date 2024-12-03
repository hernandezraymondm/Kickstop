import React from 'react';
import ProductSingleCard from './ProductSingleCard';
import CardSkeleton from './Skeleton/CardSkeleton';

const ProductCard = ({ product, loading, cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 max-w-[1450px] mx-auto">
      {loading && <CardSkeleton cards={cards} />}
      {Array.isArray(product) &&
        product.map((item) => (
          <ProductSingleCard key={item._id} product={item} />
        ))}
    </div>
  );
};

export default ProductCard;
