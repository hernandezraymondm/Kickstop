import React from 'react';
import ProductSingleCard from './ProductSingleCard';

const ProductCard = ({ product }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-[1450px] gap-6 mx-auto place-items-center">
      {Array.isArray(product) &&
        product.map((item) => (
          <ProductSingleCard key={item._id} product={item} />
        ))}
    </div>
  );
};

export default ProductCard;
