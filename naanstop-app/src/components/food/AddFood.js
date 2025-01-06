import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddFood() {
  let { id: categoryId } = useParams();  // this will capture the category ID from the URL
  let { data: categoryData } = useApi(`http://localhost:8080/api/categories/${categoryId}`);
  let { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const handleFormSubmit = async (formData) => {
    // formData['category'] = { id: Number(id) };  // Automatically attach the category ID
    console.log('Form Data:', formData);  // Log the form data to verify
    try {
      let response = await fetch(`http://localhost:8080/api/foods/category/${categoryId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json();
      console.log('Response Data:', data);  // Log the response data to verify
      reset();
      navigate('/ViewFoods');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='d-flex flex-column align-items-center mt-5'>
        <h1 className='mb-3'>You are adding food item for <span className='text-danger'>{categoryData && categoryData.data && categoryData.data.name}</span> category</h1>
        <div className='w-25 text-center'>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <input type="text" className="form-control mb-3" id="name" placeholder='Food Name' {...register('name', { required: true, minLength: 3 })} />
            <input type="number" className="form-control mb-3" id="price" placeholder='Food Price' {...register('price', { required: true, min: 0 })} />
            <input type="text" className="form-control mb-3" id="imageUrl" placeholder='Image URL' {...register('imageUrl', { required: true })} />
            
            <button type="submit" className="btn btn-primary w-100">Add Food</button>
          </form>
        </div>
      </div>
    </div>
  );
}
