import React, { useState, useEffect } from 'react';
import './App.css';

import { EmployeeAPIData, getAllEmployees } from 'api';
import { EmployeeList } from 'EmployeeList';

export const App = () => {
  const [employees, setEmployees] = useState<EmployeeAPIData[]>([]);

  useEffect(() => {
    getAllEmployees().then((data) => setEmployees(data));
  }, []);

  return (
    <div className="App">
      <EmployeeList employees={employees} />
    </div>
  );
};
