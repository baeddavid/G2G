import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SignupPage.module.css';

export const SignupPage = (props) => {
  return (
    <div className={styles.SignupPage}>
      <Link to="/welcome">
        <span className={styles.backButton}>Back</span>
      </Link>
      <h1>Sign up</h1>
      <div className={styles.inputGroup}>
        <label htmlFor="name">What's your name?</label>
        <div className={styles.inputContainer}>
          <input type="text" id="name" name="name"/>
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="username">Username - what people will see</label>
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
      <div className={styles.inputGroup}>
        <label htmlFor="password-confirmation">Re-type password</label>
        <div className={styles.inputContainer}>
          <input type="text" id="password-confirmation" name="password-confirmation"/>
        </div>
      </div>
      <div className={styles.darkButton}>
        Submit
      </div>
    </div>
  )
}