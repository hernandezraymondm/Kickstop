import React from 'react';
import { useCart } from '../contexts/CartContext';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51QNfZUEUzX7X7JbDXAIxiklCxN91TaZuNHDTefThNTaZHVnCyUlRRGPrMUMriOO4OgcjZH4HFXjagBkIyoxOulGd00eDtiZmAX'
);

const Cart = () => {
  const { cartItems, decreaseCartItemQuantity, addToCart, clearCart } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-3xl text-center my-80">Your cart is empty.</div>
    );
  }

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.priceInCents / 100) * item.quantity,
    0
  );

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const transformedItems = cartItems.map((item) => ({
      name: item.name,
      priceInCents: item.priceInCents,
      quantity: item.quantity,
      image: item.image,
    }));

    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
        }/stripe/create-checkout-session`,
        {
          products: transformedItems,
        }
      );

      const { error } = await stripe.redirectToCheckout({
        sessionId: response.data.id,
      });

      if (error) {
        console.error('Error during Stripe checkout redirection: ', error);
      }
    } catch (error) {
      console.error('Checkout process error:', error);
    }
  };

  return (
    <div className="p-4 my-4 max-w-[1400px] mx-auto">
      <h2 className="text-2xl font-semibold text-center my-6">Shopping Cart</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="bg-base-200 rounded-lg shadow-lg p-4 flex flex-col"
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="rounded-md mb-4 w-full h-64 object-cover"
            />
            <p className="text-xs text-gray-500">
              {item.target} / {item.category}
            </p>
            <h2 className="font-bold text-lg text-accent truncate">
              {item.name}
            </h2>
            <div className="flex items-center flex-wrap tracking-wider">
              <span className="font-semibold text-base">
                ₱{Math.floor(item.priceInCents / 100)}
                <span className="text-sm text-neutral-500">
                  {((item.priceInCents / 100) % 1).toFixed(2).substring(1)}
                </span>
              </span>
            </div>
            <div className="flex items-center justify-between text-md mb-3">
              <p>Quantity: {item.quantity}</p>
              <div className="flex items-center">
                <button
                  onClick={() => decreaseCartItemQuantity(item._id)}
                  className="  font-bold hover:underline text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-2xl font-semibold mb-4">
          Total Price: ₱{totalPrice.toFixed(2)}
        </p>
        <button
          onClick={handleCheckout}
          className="btn btn-secondary text-white text-lg font-bold "
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
