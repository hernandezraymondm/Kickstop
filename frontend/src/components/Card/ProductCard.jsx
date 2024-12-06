import React from 'react';
import ProductSingleCard from './ProductSingleCard';
import CardSkeleton from '../Loader/CardSkeleton';

const ProductCard = ({ product, loading, error, fetchData, cards }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-5 mb-5 max-w-[1350px] mx-auto">
      {loading && <CardSkeleton cards={cards} />}
      {error && (
        <div className="flex col-span-full mx-auto flex-col gap-5">
          <h1 className="text-2xl">{'Failed to load products.'}</h1>
          <button onClick={() => fetchData()} className="btn btn-error">
            Retry
          </button>
        </div>
      )}
      {!loading && product.length === 0 && (
        <div className="text-center w-full col-span-full">
          No products available.
        </div>
      )}
      {!loading &&
        !error &&
        Array.isArray(product) &&
        product.map((item) => (
          <ProductSingleCard key={item._id} product={item} />
        ))}
    </div>
  );
};

export default ProductCard;
