import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { useLike } from '../../contexts/LikeContext';
import Rating from '../Rating/Rating';

const ProductSingleCard = ({ product }) => {
  const { addToCart, removeFromCart, cartItems } = useCart();
  const { addToLiked, removeFromLiked, likeItems } = useLike();

  const itemInCart = cartItems.find((item) => item._id === product._id);
  const itemInLiked = likeItems.find((item) => item._id === product._id);

  const quantity = itemInCart ? itemInCart.quantity : 0;

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product._id);
  };

  const handleToggleLike = () => {
    if (itemInLiked) {
      removeFromLiked(product._id);
    } else {
      addToLiked(product);
    }
  };

  return (
    <div className="hover:scale-110 transition-transform duration-300 bg-base-100 shadow-xl rounded-lg overflow-hidden whitespace-nowrap">
      <figure className="relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-52 object-cover object-center"
        />
        {product.category === 'Featured' && (
          <div className="badge badge-info absolute top-2 right-2">NEW</div>
        )}

        <button
          className="absolute top-2 left-2"
          onClick={handleToggleLike}
          aria-label={
            itemInLiked ? 'Remove from liked items' : 'Add to liked items'
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={itemInLiked ? '#E85858' : 'none'}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#E85858"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </figure>

      <div className="p-4 bg-base-200">
        <p className="text-xs text-gray-500">
          {product.target} / {product.category}
        </p>
        <h2 className="font-semibold sm:font-bold text-sm sm:text-base text-accent truncate">
          {product.name}
        </h2>
        <p className="text-gray-700 text-xs sm:text-sm">
          {product.description || 'No description available.'}
        </p>
        <div className="flex items-center flex-wrap tracking-wider">
          <span className="text-accent font-semibold text-lg">
            ₱{Math.floor(product.priceInCents / 100)}
            <span className="text-sm text-neutral-500">
              {((product.priceInCents / 100) % 1).toFixed(2).substring(1)}
            </span>
          </span>
        </div>
        <div className="mt-2">
          {quantity > 0 ? (
            <button
              className="btn btn-outline btn-xs sm:btn-sm w-full text-wrap"
              onClick={handleRemoveFromCart}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="btn btn-primary btn-xs sm:btn-sm w-full truncate"
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
