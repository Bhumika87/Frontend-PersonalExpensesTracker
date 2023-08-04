// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './nav.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Expenses Tracker</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/addExpenses">AddExpenses</Link>
            </li>
            <li className="nav-item">
              <Link to="/allExpenses">View All Expenses</Link>
            </li>
            <li className="nav-item">
              <Link to="/total">Total Spent</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
