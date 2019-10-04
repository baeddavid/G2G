import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';


export const LoginPage = (props) => {
  return (
    <div className={styles.LoginPage}>
      <Link to="/welcome">
        <span className={styles.backButton}>Back</span>
      </Link>
      <h1>Log in</h1>
      <div className={styles.inputGroup}>
        <label htmlFor="username">Username</label>
        <div className={styles.inputContainer}>
          <input type="text" id="username" name="username"/>
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Password</label>
        <div className={styles.inputContainer}>
          <input type="text" id="password" name="password"/>
        </div>
      </div>
      <div className={styles.darkButton}>
        Log in
      </div>
    </div>
  )
}