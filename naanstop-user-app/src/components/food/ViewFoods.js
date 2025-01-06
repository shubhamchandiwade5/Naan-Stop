
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { FaSearch, FaShoppingCart } from 'react-icons/fa'; // Import FaShoppingCart
// import ImageSlider from '../imageSlider/ImageSlider'; // Import ImageSlider component
// import './ViewFoods.css';

// const ViewFoods = () => {
//   const [foods, setFoods] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [category, setCategory] = useState('');
//   const [categories, setCategories] = useState([]);
//   const [sortCriteria, setSortCriteria] = useState('');

//   useEffect(() => {
//     const fetchFoods = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/foods', {
//           params: { category }
//         });
//         console.log('Fetched foods:', response.data);
//         if (Array.isArray(response.data)) {
//           setFoods(response.data);
//         } else if (response.data.data && Array.isArray(response.data.data)) {
//           setFoods(response.data.data);
//         } else {
//           console.error('Unexpected data format for foods:', response.data);
//           setFoods([]);
//         }
//       } catch (error) {
//         console.error('Error fetching foods:', error);
//         setFoods([]);
//       }
//     };
//     fetchFoods();
//   }, [category]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/categories');
//         console.log('Fetched categories:', response.data);
//         if (Array.isArray(response.data)) {
//           setCategories(response.data);
//         } else if (response.data.data && Array.isArray(response.data.data)) {
//           setCategories(response.data.data);
//         } else {
//           console.error('Unexpected data format for categories:', response.data);
//           setCategories([]);
//         }
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//   };

//   const handleSortChange = (event) => {
//     setSortCriteria(event.target.value);
//   };

//   const filteredFoods = foods.filter((food) =>
//     food.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const sortedFoods = filteredFoods.sort((a, b) => {
//     if (sortCriteria === 'priceAsc') {
//       return a.price - b.price;
//     } else if (sortCriteria === 'priceDesc') {
//       return b.price - a.price;
//     }
//     return 0;
//   });

//   const images = [
//     '/images/360_F_678313575_fGs0oNoFVTzJV4fM1duyo1qqWqf1Yr0Y.jpg',
//     '/images/Screenshot 2025-01-05 164843.png',
//     '/images/Screenshot 2025-01-05 164931.png',
//   ];

//   return (
//     <div className="container mt-5">
//       <ImageSlider images={images} /> {/* Add ImageSlider here */}
//       <h2>What's on your mind?</h2>
//       <div className="search-bar mb-4">
//         <div className="input-group">
//           <span className="input-group-text">
//             <FaSearch />
//           </span>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search for foods..."
//             value={searchTerm}
//             onChange={handleSearchChange}
//           />
//         </div>
//       </div>
//       <div className="filters mb-4 d-flex justify-content-center">
//         <select className="form-control mb-2" value={category} onChange={handleCategoryChange}>
//           <option value="">Cuisine</option>
//           {categories.map((cat) => (
//             <option key={cat.id} value={cat.name}>
//               {cat.name}
//             </option>
//           ))}
//         </select>
//         <select className="form-control mb-2" value={sortCriteria} onChange={handleSortChange}>
//           <option value="">Filter By Price</option>
//           <option value="priceAsc">Price: Low to High</option>
//           <option value="priceDesc">Price: High to Low</option>
//         </select>
//       </div>
//       <div className="row">
//         {sortedFoods.map((food) => (
//           <div className="col-md-4 mb-4" key={food.id}>
//             <div className="card h-100">
//               <img src={process.env.PUBLIC_URL + food.imageUrl} className="card-img-top" alt={food.name} onError={(e) => { e.target.src = 'fallback-image-url.jpg'; }} />
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">{food.name}</h5>
//                 <p className="card-text price">Price: ₹{food.price}</p>
//                 <p className="card-text">{food.description}</p>
//                 <div className="mt-auto">
//                   <Link to={`/foods/${food.id}`} className="btn btn-primary">View Details</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ViewFoods;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Import FaSearch
import './ViewFoods.css';

const ViewFoods = () => {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('');

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/foods', {
          params: { category }
        });
        console.log('Fetched foods:', response.data);
        if (Array.isArray(response.data)) {
          setFoods(response.data);
        } else if (response.data.data && Array.isArray(response.data.data)) {
          setFoods(response.data.data);
        } else {
          console.error('Unexpected data format for foods:', response.data);
          setFoods([]);
        }
      } catch (error) {
        console.error('Error fetching foods:', error);
        setFoods([]);
      }
    };
    fetchFoods();
  }, [category]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/categories');
        console.log('Fetched categories:', response.data);
        if (Array.isArray(response.data)) {
          setCategories(response.data);
        } else if (response.data.data && Array.isArray(response.data.data)) {
          setCategories(response.data.data);
        } else {
          console.error('Unexpected data format for categories:', response.data);
          setCategories([]);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedFoods = filteredFoods.sort((a, b) => {
    if (sortCriteria === 'priceAsc') {
      return a.price - b.price;
    } else if (sortCriteria === 'priceDesc') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="container mt-5">
      <div className="header-image-container">
        <img src="/images/Screenshot 2025-01-05 164931.png" alt="Header" className="header-image" />
        <div className="overlay-content">
          {/* <h1>What's on your mind?</h1> */}
          <div className="search-bar mb-4">
            <div className="input-group">
              <span className="input-group-text">
                <FaSearch />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search for foods..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="filters mb-4 d-flex justify-content-center">
            <select className="form-control mb-2" value={category} onChange={handleCategoryChange}>
              <option value="">Cuisine</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
            <select className="form-control mb-2" value={sortCriteria} onChange={handleSortChange}>
              <option value="">Price</option>
              <option value="priceAsc">Low to High</option>
              <option value="priceDesc">High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <br></br>
      <h1>What's on your mind?</h1>
      <div className="row">
        {sortedFoods.map((food) => (
          <div className="col-md-4 mb-4" key={food.id}>
            <div className="card h-100">
              <img src={process.env.PUBLIC_URL + food.imageUrl} className="card-img-top" alt={food.name} onError={(e) => { e.target.src = 'fallback-image-url.jpg'; }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{food.name}</h5>
                <p className="card-text price">Price: ₹{food.price}</p>
                <p className="card-text">{food.description}</p>
                <div className="mt-auto">
                  <Link to={`/foods/${food.id}`} className="btn btn-primary">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewFoods;