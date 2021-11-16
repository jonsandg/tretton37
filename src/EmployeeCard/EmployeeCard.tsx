import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import styles from './EmployeeCard.module.scss';
import { EmployeeAPIData } from 'api';

type EmployeeCardProps = {
  data: EmployeeAPIData;
};

export const EmployeeCard = React.memo(({ data }: EmployeeCardProps) => {
  const { name, office, imagePortraitUrl, gitHub, linkedIn, twitter } = data;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={imagePortraitUrl!} alt={name} />
      <div className={styles.info}>
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.office}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {office}
          </p>
        </div>
        <div className={styles.social}>
          {gitHub && (
            <a
              href={`https://github.com/${gitHub}`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          )}
          {twitter && (
            <a
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
          )}
          {linkedIn && (
            <a
              href={`https://linkedin.com${linkedIn}`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
});
