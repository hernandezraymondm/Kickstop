import React from 'react';
import ProductSingleCard from './ProductSingleCard';

const ProductCard = ({ product }) => {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 max-w-[1450px] gap-y-7 mx-auto place-items-center">
      {Array.isArray(product) &&
        product.map((item) => (
          <ProductSingleCard key={item._id} product={item} />
        ))}
    </div>
  );
};

export default ProductCard;
