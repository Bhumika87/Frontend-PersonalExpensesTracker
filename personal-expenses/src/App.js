import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ExpenseForm from './ExpenseForm';
import ExpensesData from './ExpensesData';
import TotalExpenses from './TotalExpenses';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/addExpenses" element={<ExpenseForm />} />
      <Route path="/allExpenses" element={<ExpensesData />} />
      <Route path="/total" element={<TotalExpenses />} />
    </Router>
  );
}

export default App;
