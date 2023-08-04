import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from './config'; // Adjust the path to the configuration file as needed
import './expens.css';



const ExpenseForm = () => {
  const [expenseDto, setExpenseDto] = useState({ expenseName: '', amount: 0 });
  const [categoryId, setCategoryId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/expens/create/${categoryId}`, expenseDto);
      console.log('Expense created:', response.data);
      // Handle successful response here or update state accordingly
    } catch (error) {
      console.error('Error creating expense:', error);
      // Handle error here or display error message to the user
    }
  };

  return (
    <div className="card">
      <div className="card-body"></div>
    <form onSubmit={handleSubmit}>
    <div className="mt-4">
      {/* Your form inputs for expenseDto and categoryId */}
      <div className="form-group">
      <label htmlFor="expenseName">Expense Name</label>
      <input
        type="text"
        value={expenseDto.expenseName}
        onChange={(e) => setExpenseDto({ ...expenseDto, expenseName: e.target.value })}
      />
      </div>
      <div className="form-group">
      <label htmlFor="expenseAmount">Expense Amount</label>
      <input
        type="number"
        value={expenseDto.amount}
        onChange={(e) => setExpenseDto({ ...expenseDto, amount: e.target.value })}
      />
      </div>
      <div className="form-group">
      <label htmlFor="catiD">Category</label>

      <input
        type="number"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      />
      </div>
      <div className="form-group">
      <button type="submit">Create Expense</button>
      </div>
      </div>
    </form>
    </div>
    
  );
};

export default ExpenseForm;
