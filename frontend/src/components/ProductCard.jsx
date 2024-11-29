import React from 'react';
import ProductSingleCard from './ProductSingleCard';
import CardSkeleton from './Skeleton/CardSkeleton';

const ProductCard = ({ product, loading, cards }) => {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 max-w-[1450px] gap-y-7 mx-auto place-items-center">
      {loading && <CardSkeleton cards={cards} />}
      {Array.isArray(product) &&
        product.map((item) => (
          <ProductSingleCard key={item._id} product={item} />
        ))}
    </div>
  );
};

export default ProductCard;
