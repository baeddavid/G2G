import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AccessDeniedPage.module.css';

const AccessDeniedPage = (props) => {

  return (
    <div className={styles.AccessDeniedPage}>

      <h1>Uh oh! Looks like this page</h1>
      <h1>has <span>members only</span> access.</h1>

      <p>Signing up for an account is free & easy!</p>

      <p>Create your account today to save bathrooms, add locations and reviews, and earn points.</p>

      <img src="lock.png" alt="lock"/>

      <Link to="/signup">
        <div className={styles.darkBtn}>Sign up</div>
      </Link>

      <p>Already have an account?</p>
      
      <Link to="/login">Log in</Link>

    </div>
  )
}

export default AccessDeniedPage;
