
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, Link } from 'react-router-dom';
// import './FoodDetails.css';

// const FoodDetails = () => {
//   const { id } = useParams();
//   const [food, setFood] = useState(null);

//   useEffect(() => {
//     const fetchFoodDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/api/foods/${id}`);
//         setFood(response.data);
//       } catch (error) {
//         console.error('Error fetching food details:', error);
//       }
//     };
//     fetchFoodDetails();
//   }, [id]);

//   if (!food) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mt-5">
//       <h2>{food.name}</h2>
//       <img src={food.imageUrl} alt={food.name} className="img-fluid" onError={(e) => { e.target.src = 'fallback-image-url.jpg'; }} />
//       <p>{food.description}</p>
//       <p>Price: ₹{food.price}</p>
//       <Link to="/cart" className="btn btn-success">Add to Cart</Link>
//     </div>
//   );
// };

// export default FoodDetails;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './FoodDetails.css';

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [quantity, setQuantity] = useState(1); // Added state for quantity
  const navigate = useNavigate();

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

  const handleOrderNow = () => {
    navigate(`/order/${id}?quantity=${quantity}`);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  if (!food) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card food-details-card">
        <img src={food.data.imageUrl} alt={food.data.name} className="card-img-top img-fluid" onError={(e) => { e.target.src = 'fallback-image-url.jpg'; }} />
        <div className="card-body">
          <h2 className="card-title">{food.data.name}</h2>
          <p className="card-text">Price: ₹{food.data.price}</p>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" className="form-control" id="quantity" value={quantity} onChange={handleQuantityChange} min="1" />
          </div>
          <button onClick={handleOrderNow} className="btn btn-success mt-3">Procead To Payment</button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
