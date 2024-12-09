import React from 'react';
import { useCart } from '../../contexts/CartContext';

const CartButton = () => {
  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="flex-none text-secondary">
      <div className="dropdown dropdown-end dropdown-hover">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <span className="badge badge-sm indicator-item bg-secondary text-white rounded-full">
              {totalQuantity}
            </span>
          </div>
        </div>
        {totalQuantity > 0 && (
          <div
            tabIndex={0}
            className="dropdown-content w-52 bg-base-200 shadow rounded-box z-[1]"
          >
            <div className="card-body">
              <span className="font-bold text-lg text-accent-content">
                Items: {totalQuantity}
              </span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartButton;
