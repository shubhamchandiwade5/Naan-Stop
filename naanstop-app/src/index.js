// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Category from './components/category/Category';
// import ViewFoods from './components/food/ViewFoods';
// import AddFood from './components/food/AddFood';
// import UpdatedFood from './components/food/UpdatedFood'; 
// import LoginPage from './components/admin/LoginPage';

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/categories",
//         element: <Category />
//       },
//       {
//         path: "/categories/:id/add-food",
//         element: <AddFood />
//       },
//       {
//         path: "/ViewFoods",
//         element: <ViewFoods />
//       },
//       {
//         path: "/foods/:id/update-food",
//         element: <UpdatedFood /> // Updated path
//       },
//       {
//         index: true,
//         element: <LoginPage />
//       }
//     ]
//   }
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={routes} />
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Category from './components/category/Category';
import ViewFoods from './components/food/ViewFoods';
import AddFood from './components/food/AddFood';
import UpdatedFood from './components/food/UpdatedFood'; 
import LoginPage from './components/admin/LoginPage';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/categories",
        element: <Category />
      },
      {
        path: "/categories/:id/add-food",
        element: <AddFood />
      },
      {
        path: "/ViewFoods",
        element: <ViewFoods />
      },
      {
        path: "/foods/:id/update-food",
        element: <UpdatedFood /> // Updated path
      },
      {
        index: true,
        element: <LoginPage />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes} />
);
