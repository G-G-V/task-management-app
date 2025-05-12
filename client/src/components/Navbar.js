import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    //   <div className="container">
    //     <Link className="navbar-brand" to="/">Task Manager</Link>
    //     <div className="collapse navbar-collapse">
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item">
    //           <Link to="/" className="nav-link">Dashboard</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/add" className="nav-link">Add Task</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>


    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#003366' }}>
  <div className="container">
    <Link className="navbar-brand text-white" to="/">Task Manager</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/add" className="nav-link text-white">Add Task</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
