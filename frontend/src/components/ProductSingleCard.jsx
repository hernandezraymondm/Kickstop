import React from 'react';
import { useCart } from '../context/CartContext';
import Rating from './Rating/Rating';

const ProductSingleCard = ({ product }) => {
  const { addToCart, removeFromCart, cartItems } = useCart();

  const itemInCart = cartItems.find((item) => item._id === product._id);

  const quantity = itemInCart ? itemInCart.quantity : 0;

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product._id);
  };

  return (
    <div className="hover:scale-110 transition-transform duration-300 bg-base-100 shadow-xl rounded-lg overflow-hidden mb-5 whitespace-nowrap">
      <figure className="relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-64 object-cover object-center "
        />
        {product.category === 'Featured' && (
          <div className="badge badge-info absolute top-2 left-2">NEW</div>
        )}
      </figure>

      <div className="p-4 bg-base-200">
        <p className="text-xs text-gray-500">
          {product.target} / {product.category}
        </p>
        <h2 className="font-bold text-accent truncate">{product.name} </h2>
        <p className="text-sm text-gray-700">
          {product.description || 'No description available.'}
        </p>
        <div className="flex items-center mt-2 flex-wrap">
          <Rating rating={product.rating} />
          <span className="text-secondary font-bold ml-2">
            ₱{product.priceInCents.toFixed(2)}
          </span>
        </div>
        <div className="mt-4">
          {quantity > 0 ? (
            <button
              className="btn btn-error btn-sm w-full"
              onClick={handleRemoveFromCart}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="btn btn-primary btn-sm w-full"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSingleCard;
