// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from './components/navbar/Navbar';

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Outlet />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer /> 
    </div>
  );
};

export default App;

