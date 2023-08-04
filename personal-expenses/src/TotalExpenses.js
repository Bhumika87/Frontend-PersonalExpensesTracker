import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL from './config'; // Adjust the path to the configuration file as needed

const TotalExpenses = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetchTotalAmount();
  }, []);

  const fetchTotalAmount = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/expens/total`);
      setTotalAmount(response.data);
    } catch (error) {
      console.error('Error fetching total amount:', error);
    }
  };

  return (
    <div>
      <h2>Total Expenses</h2>
      <p>Total Expenses Amount: {totalAmount}</p>
    </div>
  );
};

export default TotalExpenses;
