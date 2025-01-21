import React, { useState, useEffect } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartWithQuantities = cart.map(item => ({
      ...item,
      quantity: item.quantity || 1 // Ensure each item has a quantity property
    }));
    setCartItems(cartWithQuantities);
    localStorage.setItem('cart', JSON.stringify(cartWithQuantities));
  }, []);

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (index, delta) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += delta;
    if (newCartItems[index].quantity <= 0) {
      newCartItems[index].quantity = 1;
    }
    setCartItems(newCartItems);
    localStorage.setItem('cart', JSON.stringify(newCartItems));
  };

  const handleRemoveItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
    localStorage.setItem('cart', JSON.stringify(newCartItems));
  };

  const handlePayment = (event) => {
    event.preventDefault();
    const currentTime = Date.now();
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrders = cartItems.map(item => ({ ...item, timestamp: currentTime }));
    localStorage.setItem('orders', JSON.stringify([...orders, ...newOrders]));
    localStorage.removeItem('cart');
    navigate('/orders');
  };

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td><img src={item.imageUrl} alt={item.name} className="cart-img img-fluid" /></td>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>
                    <button className="btn btn-secondary" onClick={() => handleQuantityChange(index, -1)}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="btn btn-secondary" onClick={() => handleQuantityChange(index, 1)}>+</button>
                  </td>
                  <td><button className="btn btn-danger" onClick={() => handleRemoveItem(index)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total Amount: ₹{calculateTotalAmount()}</h3>
          <div className="card payment-card smaller-card">
            <div className="card-body">
              <form onSubmit={handlePayment} className="payment-form">
                <h3>Payment Method</h3>
                <div className="mb-3">
                  <label htmlFor="paymentMethod" className="form-label">Select Payment Method</label>
                  <select
                    id="paymentMethod"
                    className="form-control form-control-sm"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    required
                  >
                    <option value="card">Credit/Debit Card</option>
                    <option value="cod">Cash on Delivery</option>
                  </select>
                </div>
                {paymentMethod === 'card' && (
                  <>
                    <div className="mb-3">
                      <label htmlFor="cardNumber" className="form-label">Card Number</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
                        maxLength="16"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                      <DatePicker
                        selected={expiryDate}
                        onChange={date => setExpiryDate(date)}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        showFullMonthYearPicker
                        className="form-control form-control-sm"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="cvv" className="form-label">CVV</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="cvv"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                        maxLength="3"
                        required
                      />
                    </div>
                  </>
                )}
                <button type="submit" className="btn btn-primary">Pay Now</button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
