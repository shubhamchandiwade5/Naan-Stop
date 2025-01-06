// import React, { useState, useEffect } from 'react';
// import './Cart.css';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const updateCartItems = () => {
//       const cart = JSON.parse(localStorage.getItem('cart')) || [];
//       const updatedCart = cart.map(item => {
//         const timeLeft = Math.max(0, item.timeLeft - 1);
//         return { ...item, timeLeft };
//       }).filter(item => item.timeLeft > 0);

//       setCartItems(updatedCart);
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     updateCartItems();
//     const interval = setInterval(updateCartItems, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cartItems.map((item, index) => (
//           <div key={index} className="card cart-card">
//             <div className="card-body">
//               <img src={item.imageUrl} alt={item.name} className="cart-img img-fluid" />
//               <h5 className="card-title">{item.name}</h5>
//               <p className="card-text">Price: ₹{item.price}</p>
//               <p className="card-text">Your order will be delivered in {formatTime(item.timeLeft)}</p>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Cart;


import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const updateCartItems = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const updatedCart = cart.map(item => {
        const timeLeft = Math.max(0, item.timeLeft - 1);
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
