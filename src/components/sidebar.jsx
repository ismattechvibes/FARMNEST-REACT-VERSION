// import React, { useState } from 'react';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [menuIcon, setMenuIcon] = useState('menu');
//   const [isActive, setIsActive] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//     setMenuIcon(menuIcon === 'menu' ? 'close' : 'menu');
//   };

//   const toggleDropdown = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <div className="top_nav">
//       <nav>
//         <div className="menu_dropdown">
//           <i className="material-icons menu" onClick={toggleSidebar}>
//             {menuIcon}
//           </i>
//           <div className={`container ${isOpen ? 'initiate' : ''} ${isActive ? 'active' : ''}`}>
//             <div className="arrow" onClick={toggleDropdown}>
//               <i className="material-icons">arrow_forward</i>
//             </div>
//             <div className="dropdown">
//               <a href="#">
//                 <i className="material-icons">home</i>
//                 <span>Home</span>
//               </a>
//               <a href="#">
//                 <i className="material-icons">account_balance_wallet</i>
//                 <span>Wallet</span>
//               </a>
//               <a href="#">
//                 <i className="material-icons">contact_support</i>
//                 <span>Contact Support</span>
//               </a>
//               <a href="#">
//                 <i className="material-icons">logout</i>
//                 <span>Logout</span>
//               </a>
//               <span className="hover"></span>
//             </div>
//           </div>
//         </div>
//         <div className="logo">
//           <h2>F<span className="first">O</span>C<span className="second">O</span></h2>
//         </div>
//         <div className="profile">
//           <i className="material-icons">account_circle</i>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;