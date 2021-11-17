import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';

import { EmployeeAPIData, getAllEmployees } from 'api';
import { EmployeeList } from 'EmployeeList';

export const App = () => {
  const [employees, setEmployees] = useState<EmployeeAPIData[]>([]);
  const [filterQuery, setFilterQuery] = useState('');

  // Employee list is fetched from api when component first mounts
  useEffect(() => {
    getAllEmployees().then((data) => setEmployees(data));
  }, []);

  // Basic filtering by name or office. The two strings merged to one and then checked if it contains the filter query
  const filteredEmployees = employees.filter((employee) => {
    return (employee.name + ' ' + employee.office)
      .toLowerCase()
      .includes(filterQuery.toLowerCase());
  });

  return (
    <div className={styles.app}>
      <h1>The fellowship of the tretton37</h1>
      <div className={styles.toolbar}>
        <input
          placeholder="Search..."
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
        />
      </div>
      <EmployeeList employees={filteredEmployees} />
    </div>
  );
};
