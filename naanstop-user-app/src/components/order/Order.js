import React, { useState, useEffect } from 'react';
import './Order.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const updateOrders = () => {
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      const currentTime = Date.now();

      const updatedOrders = orders.map(item => {
        const timeElapsed = Math.floor((currentTime - item.timestamp) / 1000);
        const timeLeft = Math.max(0, 30 * 60 - timeElapsed); // 30 minutes in seconds
        return { ...item, timeLeft };
      }).filter(item => item.timeLeft > 0);

      setOrders(updatedOrders);
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
    };

    updateOrders();
    const interval = setInterval(updateOrders, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const commonDescription = "Enjoy a delicious meal prepared with the freshest ingredients. Our dishes are made with care and attention to detail to provide you with an exceptional dining experience.";

  return (
    <div className="container mt-5">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>You have no active orders.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Time Left</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => (
              <tr key={index}>
                <td><img src={item.imageUrl} alt={item.name} className="order-img img-fluid" /></td>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>{formatTime(item.timeLeft)}</td>
                <td>{commonDescription}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
