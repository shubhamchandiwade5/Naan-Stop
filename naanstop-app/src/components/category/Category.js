import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Category() {
  const { register, handleSubmit, reset } = useForm();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      let response = await fetch('http://localhost:8080/api/categories');
      let data = await response.json();
      console.log(data);
      
      setCategories(data.data); // Adjust based on your ResponseWrapper structure
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = async (formData) => {
    console.log(formData);
    try {
      let response = await fetch('http://localhost:8080/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      let data = await response.json();
      console.log(data);
      fetchCategories(); // Refresh the list
      reset(); // Reset form fields
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/categories/${id}`, {
        method: 'DELETE',
      });
      fetchCategories(); // Refresh the list
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='d-flex flex-column align-items-center mt-5'>
      <div className='w-25 text-center'>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <input type="text" className="form-control mb-3" id="category" placeholder='Category Name' {...register('name', { required: true, minLength: 3 })} />
          <button type="submit" className="btn btn-primary w-100">Add Cuisine</button>
        </form>
      </div>
      <div className='w-75 mt-3 table-bordered'>
        <table className="table text-center">
          <thead className='table-dark'>
            <tr>
              <th>ID</th>
              <th>CUISINE</th>
              <th>FOOD</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(category => (
              <tr key={category.id}>
                <th>{category.id}</th>
                <td>{category.name}</td>
                <td>
                  <Link className='btn btn-success' to={`/categories/${category.id}/add-food`}>Add Food</Link>
                </td>
                <td>
                  <Link className='btn btn-danger' onClick={() => handleDelete(category.id)}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
