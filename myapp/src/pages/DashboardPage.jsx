// src/pages/DashboardPage.jsx
import  { useState, useEffect } from 'react';
import { Header } from '../Component/Header';
import axios from 'axios';

export function DashboardPage() {
  const [totalEmployees, setTotalEmployees] = useState(0);

  useEffect(() => {
    fetchEmployeeCount();
  }, []);

  const fetchEmployeeCount = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/employees/count');
      setTotalEmployees(response.data.count);
    } catch (error) {
      console.error('Error fetching employee count:', error);
    }
  };

  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to Admin Panel</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Total Employees</h2>
            <p className="text-4xl font-bold">{totalEmployees}</p>
          </div>
        </div>
      </main>
    </div>
  );
}