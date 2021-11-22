import React, { useState, useEffect, useRef, useCallback } from 'react';

import styles from './EmployeeList.module.scss';
import { EmployeeCard } from 'EmployeeCard';
import { EmployeeAPIData } from 'api';

type EmployeeListProps = {
  employees: EmployeeAPIData[];
};

// Infinity scroll code based on
// https://medium.com/suyeonme/react-how-to-implement-an-infinite-scroll-749003e9896a
export const EmployeeList = ({ employees }: EmployeeListProps) => {
  const EMPLOYEES_PER_PAGE = 30;
  const [page, setPage] = useState(1);

  // IntersectionObserver is here used to track when an element enters the viewport,
  // in this case the last of the employee cards currently showing
  const observer = useRef<IntersectionObserver>();
  const lastEmployeeCardRef = useCallback(
    (node: HTMLDivElement) => {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        const target = entries[0];
        const hasMoreEmployees = page * EMPLOYEES_PER_PAGE < employees.length;
        if (target.isIntersecting && hasMoreEmployees) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [employees, page]
  );

  // When the employee array changes (due to changes to the search query)
  // we start showing just the first set of employees
  useEffect(() => {
    setPage(1);
  }, [employees]);

  const employeesToRender = employees.slice(0, page * EMPLOYEES_PER_PAGE);

  return (
    <div className={styles.container}>
      {employeesToRender.map((e, i) => {
        const isLast = employeesToRender.length === i + 1;
        return isLast ? (
          <div key={e.name} ref={lastEmployeeCardRef}>
            <EmployeeCard data={e} />
          </div>
        ) : (
          <div key={e.name}>
            <EmployeeCard key={e.name} data={e} />
          </div>
        );
      })}
    </div>
  );
};
