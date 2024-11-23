import React from 'react';
import { useCart } from '../context/CartContext';
import Rating from './rating/Rating';

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
    <div className="card card-compact w-80 my-5 bg-base-100 shadow-xl">
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[250px] object-cover object-center"
        />
      </figure>

      <div className="card-body bg-base-200 rounded-b-xl">
        <p className="target">
          {product.target} / {product.category}
        </p>
        <h2 className="card-title whitespace-nowrap font-bold text-2xl text-accent">
          {product.name}{' '}
          {product.category === 'Featured' ? (
            <div className="badge badge-info">NEW</div>
          ) : (
            ''
          )}
        </h2>
        <p>{product.description || 'No description available.'}</p>
        <div>
          <Rating />
          <span className="price text-secondary font-bold px-2 ml-2 border-l-2 border-gray-400">
            ₱{product.priceInCents.toFixed(2)}
          </span>
        </div>
        <div className="card-actions justify-end">
          {quantity > 0 ? (
            <button className="btn btn-error" onClick={handleRemoveFromCart}>
              Remove from Cart
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSingleCard;
