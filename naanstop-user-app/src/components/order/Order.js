import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Order.css';

const Order = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({ cardNumber: '', expiryDate: '', cvv: '' });

  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/foods/${id}`);
        setFood(response.data);
      } catch (error) {
        console.error('Error fetching food details:', error);
      }
    };
    fetchFoodDetails();
  }, [id]);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCardDetailsChange = (event) => {
    const { name, value } = event.target;
    if (name === 'cvv' && value.length > 3) return; // Limit CVV to 3 digits
    if (name === 'expiryDate' && value.length > 5) return; // Limit expiry date to 5 characters (MM/YY)
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handlePay = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Add the selected food item, quantity, and initial countdown timer to the cart
    cart.push({ ...food.data, quantity: parseInt(quantity), timeLeft: 30 * 60 }); // 30 minutes in seconds
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Your order has been placed and will be delivered in 30 minutes.');
  };

  if (!food) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card order-card">
        <img src={food.data.imageUrl} alt={food.data.name} className="card-img-top img-fluid" onError={(e) => { e.target.src = 'fallback-image-url.jpg'; }} />
        <div className="card-body">
          <h2 className="card-title">{food.data.name}</h2>
          <p className="card-text">Price: ₹{food.data.price}</p>
          {/* <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" className="form-control" id="quantity" value={quantity} onChange={handleQuantityChange} min="1" />
          </div> */}
          <div className="payment-section">
            <h4>Payment Details</h4>
            <div className="form-group">
              <label htmlFor="paymentMethod">Payment Method</label>
              <select className="form-control" id="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange}>
                <option value="card">Card</option>
                <option value="cod">Cash on Delivery</option>
              </select>
            </div>
            {paymentMethod === 'card' && (
              <div className="card-details">
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    name="cardNumber"
                    value={cardDetails.cardNumber}
                    onChange={handleCardDetailsChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiryDate"
                    name="expiryDate"
                    value={cardDetails.expiryDate}
                    onChange={handleCardDetailsChange}
                    placeholder="MM/YY"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="password"
                    className="form-control"
                    id="cvv"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleCardDetailsChange}
                    placeholder="3-digit code"
                  />
                </div>
              </div>
            )}
            <button onClick={handlePay} className="btn btn-primary mt-3">Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
