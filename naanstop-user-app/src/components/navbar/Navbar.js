

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaSun, FaMoon } from 'react-icons/fa';
// import './Navbar.css';

// const Navbar = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     document.body.classList.toggle('dark-mode');
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//       <div className="container-fluid">
//         <Link className="navbar-brand text-light" to="/">Naan Stop</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <button className="btn btn-outline-light nav-link" onClick={toggleTheme}>
//                 {isDarkMode ? <FaSun /> : <FaMoon />}
//               </button>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/cart">Cart</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          <img src="/images/Screenshot 2025-01-05 235731.png" alt="Naan Stop" className="logo" /> {/* Add your logo here */}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="btn btn-outline-light nav-link" onClick={toggleTheme}>
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
