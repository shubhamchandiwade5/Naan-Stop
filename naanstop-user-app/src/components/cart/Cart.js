
import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const updateCartItems = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const currentTime = Date.now();

      const updatedCart = cart.map(item => {
        const timeElapsed = Math.floor((currentTime - item.timestamp) / 1000);
        const timeLeft = Math.max(0, 30 * 60 - timeElapsed); // 30 minutes in seconds
        return { ...item, timeLeft };
      }).filter(item => item.timeLeft > 0);

      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    updateCartItems();
    const interval = setInterval(updateCartItems, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Time Left</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td><img src={item.imageUrl} alt={item.name} className="cart-img img-fluid" /></td>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>{formatTime(item.timeLeft)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
