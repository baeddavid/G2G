import React from 'react';
import styles from './WelcomePage.module.css';
import { Link } from 'react-router-dom';

export const WelcomePage = (props) => {

  const { handleContinueAsGuest } = props;

  return(
    <div className={styles.WelcomePage}>
      <div className={styles.headerSection}>
        <div className={styles.sparklesContainer}>
          <img src="sparkles.png" alt="sparkles"/>
        </div>
        <h1>Welcome</h1>
        <h2>Your places to <span>go</span>.</h2>
      </div>
      <div className={styles.loginSection}>
        <Link to="/login">
          <div className={styles.darkButton}>
            Log in
          </div>
        </Link>
        <Link to="/signup">
          <div className={styles.darkButton}>
            Sign up
          </div>
        </Link>
      </div>
      <h5>Need a bathroom ASAP?</h5>
      <Link to="/">
        <div 
          onClick={handleContinueAsGuest}
          className={styles.lightButton}
          >
          Continue as guest
        </div>
      </Link>
    </div >
  )
}