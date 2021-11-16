import React from 'react';

import styles from './EmployeeCard.module.scss';
import { EmployeeAPIData } from 'api';

type EmployeeCardProps = {
  data: EmployeeAPIData;
};

export const EmployeeCard = ({ data }: EmployeeCardProps) => {
  return (
    <div className={styles.container}>{`${data.name} - ${data.office}`}</div>
  );
};
