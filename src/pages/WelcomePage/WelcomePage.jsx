import React from 'react';
import styles from './WelcomePage.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

export const WelcomePage = (props) => {

  const { handleContinueAsGuest } = props;

  return(
    <div className={styles.WelcomePage}>
      <div className={styles.headerSection}>
        {/* <div className={styles.sparklesContainer}>
        </div> */}
        <h1>
          <img src="sparkles.png" alt="sparkles"/>
          Welcome
        </h1>
        <h2>Your places to <span>go</span>.</h2>
      </div>
      <div className={styles.loginSection}>
        <Link to="/login">
          <Button 
            primary
            marginBottom="2vh"
          >
            Log in
          </Button>
        </Link>
        <Link to="/signup">
          <Button 
            primary
          >
            Sign up
          </Button>
        </Link>
      </div>
      <h5>Need a bathroom ASAP?</h5>
      <Link to="/">
        <Button 
          onClick={handleContinueAsGuest}
        >
          Continue as guest
        </Button>
      </Link>
    </div >
  )
}