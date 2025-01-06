
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './UpdateFood.css';

// const UpdatedFood = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [food, setFood] = useState({
//     name: '',
//     price: 0,
//     imageUrl: '',
//     category: ''
//   });
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const foodResponse = await fetch(`http://localhost:8080/api/foods/${id}`);
//         const foodData = await foodResponse.json();
//         setFood(foodData.data);

//         const categoriesResponse = await fetch(`http://localhost:8080/api/categories`);
//         const categoriesData = await categoriesResponse.json();
//         setCategories(categoriesData.data || []);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFood({ ...food, [name]: value });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`http://localhost:8080/api/foods/${id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(food)
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log(data);
//       navigate('/ViewFoods');
//     } catch (error) {
//       console.error('Error updating food:', error);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4 text-center">Update Food Item</h1>
//       <form onSubmit={handleFormSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Food Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             value={food.name || ''}
//             onChange={handleInputChange}
//             placeholder="Enter food name"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="price" className="form-label">Food Price</label>
//           <input
//             type="number"
//             className="form-control"
//             id="price"
//             name="price"
//             value={food.price || ''}
//             onChange={handleInputChange}
//             placeholder="Enter food price"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="imageUrl" className="form-label">Image URL</label>
//           <input
//             type="text"
//             className="form-control"
//             id="imageUrl"
//             name="imageUrl"
//             value={food.imageUrl || ''}
//             onChange={handleInputChange}
//             placeholder="Enter image URL"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="category" className="form-label">Category</label>
//           <select
//             className="form-control"
//             id="category"
//             name="category"
//             value={food.category}
//             onChange={handleInputChange}
//             required
//           >
//             <option value="">Select a category</option>
//             {categories.map((category) => (
//               <option key={category.id} value={category.name}>
//                 {category.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button type="submit" className="btn btn-primary w-100">Update Food</button>
//       </form>
//     </div>
//   );
// };

// export default UpdatedFood;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UpdateFood.css';

const UpdatedFood = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState({
    name: '',
    price: 0,
    imageUrl: '',
    category: ''
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const foodResponse = await fetch(`http://localhost:8080/api/foods/${id}`);
        const foodData = await foodResponse.json();
        setFood(foodData.data);

        const categoriesResponse = await fetch(`http://localhost:8080/api/categories`);
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFood({ ...food, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/foods/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(food)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      navigate('/ViewFoods'); // Navigate to ViewFoods page after successful update
    } catch (error) {
      console.error('Error updating food:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Update Food Item</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Food Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={food.name || ''}
            onChange={handleInputChange}
            placeholder="Enter food name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Food Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={food.price || ''}
            onChange={handleInputChange}
            placeholder="Enter food price"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            name="imageUrl"
            value={food.imageUrl || ''}
            onChange={handleInputChange}
            placeholder="Enter image URL"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select
            className="form-control"
            id="category"
            name="category"
            value={food.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">Update Food</button>
      </form>
    </div>
  );
};

export default UpdatedFood;
