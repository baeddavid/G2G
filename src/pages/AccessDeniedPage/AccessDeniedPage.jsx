import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AccessDeniedPage.module.css';

const AccessDeniedPage = (props) => {

  return (
    <div className={styles.AccessDeniedPage}>

      <h1>Uh oh! Looks like this page has <span>members only</span> access.</h1>

      <p>Signing up for an account is free & easy!</p>

      <p>Create your account today to save bathrooms, add locations and reviews, and earn points.</p>

      <img src="/lock.png" alt="lock"/>

      <Link to="/signup" className={styles.darkBtn}>
        Sign up
      </Link>

      <div className={styles.pEnd}>Already have an account?</div>
      
      <Link to="/login" className={styles.login}>Log in</Link>

    </div>
  )
}

export default AccessDeniedPage;
