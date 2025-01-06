
import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const handleCheckout = () => {
    // Handle checkout logic here
  };

  return (
    <div className="container mt-5">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ₹{item.price}</li>
            ))}
          </ul>
          <Link to="/checkout" className="btn btn-success" onClick={handleCheckout}>Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
