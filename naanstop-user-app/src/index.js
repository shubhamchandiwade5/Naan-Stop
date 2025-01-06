import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ViewFoods from './components/food/ViewFoods';
import FoodDetails from './components/food/FoodDetails';
import Order from './components/order/Order';
import Cart from './components/cart/Cart';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ViewFoods />
      },
      {
        path: "/foods/:id",
        element: <FoodDetails />
      },
      {
        path: "/order/:id",
        element: <Order />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes} />
);
