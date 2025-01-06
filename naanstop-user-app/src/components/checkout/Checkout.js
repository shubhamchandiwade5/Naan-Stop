
import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Order placed successfully!');
    localStorage.removeItem('cart');
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Card Number"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
