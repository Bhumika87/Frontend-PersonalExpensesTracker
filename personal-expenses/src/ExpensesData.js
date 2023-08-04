import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import './ExpenseTable.css';
import BASE_URL from './config'; // Adjust the path to the configuration file as needed

const ExpenseTable = () => {
  const [expDto, setExpDto] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/expens/view/`, expDto); 


      // Replace this with the actual API endpoint URL
      setExpDto(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  return (
    <div className="card">
      <h2>Expense Details</h2>
      <table className="lined-table">
        <thead>
          <tr>
            <th>Expense Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {expDto.map((expDto) => (
            <tr key={expDto.id}>
              <td>{expDto.expenseName}</td>
              <td>{expDto.amount}</td>
              <td>{moment(expDto.date).format('MM/DD/YYYY')}</td>
              <td>{expDto.categoryName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
