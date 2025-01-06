import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';

export default function ViewFoods() {
  const [foods, setFoods] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriteria, setSortCriteria] = useState('');

  // Fetch foods
  const fetchData = async () => {
    try {
      let response = await fetch("http://localhost:8080/api/foods");
      let allData = await response.json();
      console.log("Fetched Foods:", allData); // Log the fetched data
      setFoods(allData.data);
    } catch (error) {
      console.log("Error fetching foods:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isDeleted]);

  useEffect(() => {
    console.log("Foods state:", foods);
  }, [foods]);

  const deleteFood = async (id) => {
    try {
      let response = await fetch(`http://localhost:8080/api/foods/${id}`, { method: 'DELETE' });
      let data = await response.json();
      console.log(data);
      setIsDeleted(true);
    } catch (error) {
      console.log("Error deleting food:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
  };

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (food.category && food.category.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  console.log("Filtered Foods:", filteredFoods); // Log the filtered foods

  const sortedFoods = filteredFoods.sort((a, b) => {
    if (sortCriteria === 'costLowToHigh') {
      return a.price - b.price;
    } else if (sortCriteria === 'costHighToLow') {
      return b.price - a.price;
    }
    return 0;
  });

  const cardStyle = {
    width: '300px',
    height: '360px',
    marginBottom: '20px'
  };

  const imgStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '10px'
  };

  const dropdownStyle = {
    width: '115px',
    backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' fill=\'%23222\' class=\'bi bi-caret-down-fill\' viewBox=\'0 0 16 16\'%3E%3Cpath d=\'M7.247 11.14 2.451 5.658a1 1 0 0 1 .8-1.6h9.498a1 1 0 0 1 .8 1.6l-4.796 5.482a1 1 0 0 1-1.6 0z\'/%3E%3C/svg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
    backgroundSize: '12px 12px'
  };

  return (
    <div className='d-flex flex-column align-items-center mt-5'>
      <div className="input-group mb-3 w-50">
        <span className="input-group-text">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="Search by name or cuisine"
          value={searchQuery}
          onChange={handleSearchChange}
          className="form-control"
        />
      </div>

      <div className="dropdown me-2 mb-3">
        <button className="btn btn-outline-primary dropdown-toggle" type="button" id="filterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          Filter
        </button>
        <ul className="dropdown-menu" aria-labelledby="filterDropdown">
          <li><button className="dropdown-item" onClick={() => handleSortChange('costLowToHigh')}>Cost: Low to High</button></li>
          <li><button className="dropdown-item" onClick={() => handleSortChange('costHighToLow')}>Cost: High to Low</button></li>
        </ul>
      </div>

      <br></br>
      <h1>Dishes Available !</h1>
      <br></br>
      <br></br>

      <div className='container'>
        <div className='row'>
          {sortedFoods.length > 0
            ? sortedFoods.map(food => (
              <div className='col-md-4 mb-4' key={food.id}>
                <div className='card' style={cardStyle}>
                  <img src={food.imageUrl} className='card-img-top' style={imgStyle} alt={food.name} />
                  <div className='card-body'>
                    <h5 className='card-title'>{food.name}</h5>
                    <p className='card-text'>Price: {food.price}</p>
                    {/* <p className='card-text'>Cuisine: {food.category && food.category.name ? food.category.name : 'Unknown'}</p> */}
                    <div style={buttonContainerStyle}>
                      <Link className='btn btn-warning' to={`/foods/${food.id}/update-food`}>Update</Link>
                      <button className='btn btn-danger' onClick={() => deleteFood(food.id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
            : <div>No dishes found</div>
          }
        </div>
      </div>
    </div>
  );
}
