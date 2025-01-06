// import React from 'react';
// import './Footer.css';
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="footer bg-dark text-white py-4">
//       <div className="container text-center">
//         <div className="row">
//           <div className="col-md-4">
//             <h5>Contact Us</h5>
//             <p>123 Food Street, Food City, FC 12345</p>
//             <p>Email: info@foodwebsite.com</p>
//             <p>Phone: (123) 456-7890</p>
//           </div>
//           <div className="col-md-4">
//             <h5>Follow Us</h5>
//             <div>
//               <a href="https://www.facebook.com" className="text-white me-2">
//                 <FaFacebook />
//               </a>
//               <a href="https://www.twitter.com" className="text-white me-2">
//                 <FaTwitter />
//               </a>
//               <a href="https://www.instagram.com" className="text-white">
//                 <FaInstagram />
//               </a>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <h5>Quick Links</h5>
//             <ul className="list-unstyled">
//               <li><a href="/" className="text-white">Home</a></li>
//               <li><a href="/ViewFoods" className="text-white">View Foods</a></li>
//               <li><a href="/categories" className="text-white">Categories</a></li>
//               <li><a href="/login" className="text-white">Login</a></li>
//             </ul>
//           </div>
//         </div>
//         <hr className="my-4" />
//         <p className="mb-0">&copy; 2025 Naan Stop. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p> Fort, Mumbai, Pin 12345</p>
            <p>Email: naanstop@gmail.com</p>
            <p>Phone: (+91) 910-456-7890</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div>
              <a href="https://www.facebook.com" className="text-white me-2">
                <FaFacebook />
              </a>
              <a href="https://www.twitter.com" className="text-white me-2">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" className="text-white">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              {/* <li><a href="/ViewFoods" className="text-white">View Foods</a></li>
              <li><a href="/categories" className="text-white">Categories</a></li>
              <li><a href="/login" className="text-white">Login</a></li> */}
              <li><a>View Foods</a></li>
              <li><a>Categories</a></li>
              <li><a>Login</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <p className="mb-0">&copy; 2025 Naan Stop. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
