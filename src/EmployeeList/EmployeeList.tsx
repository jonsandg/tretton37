import React from 'react';

import styles from './EmployeeList.module.scss';
import { EmployeeCard } from 'EmployeeCard';
import { EmployeeAPIData } from 'api';

type EmployeeListProps = {
  employees: EmployeeAPIData[];
};

export const EmployeeList = React.memo(({ employees }: EmployeeListProps) => {
  return (
    <div className={styles.container}>
      {employees.map((e) => (
        <EmployeeCard key={e.name} data={e} />
      ))}
    </div>
  );
});
