import React from 'react';

import { navigate } from '@reach/router';

import Button from 'components/Button';

import styles from './NotFoundPage.module.css';

const NotFoundPage = () => (
  <div className={styles['notfound-container']}>
    <div className={styles.notfound}>
      <div className={styles['notfound-404']}>
        <h1>Oops!</h1>
      </div>
      <h2>404 - Page not found</h2>
      <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
      <Button onClick={() => navigate('/')} label="Go To Homepage" />
    </div>
  </div>
);

export default NotFoundPage;
