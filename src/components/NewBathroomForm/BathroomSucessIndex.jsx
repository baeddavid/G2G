import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BathroomSucessIndex.module.css';

const Success = (props) => {
    return(
        <div className={styles.BathroomSucessIndex}>
          <div className={styles.content}>
            <h2>Woohoo!</h2>
            <p>You just created a new bathroom.</p>
            <div className={styles.toiletContainer}>
              <img src="toilet.png" alt="toilet"/>
            </div>
            <div className={styles.sparklesContainer}>
              <img src="sparkles.png" alt="sparkles"/>
            </div>
            <Link to={`/bathroom/${props.newBathroomId}`}>
              <div className={styles.checkItOutBtn}>Check it out</div>
            </Link>
            <Link to='/'>
              <div className={styles.back}>Go back to search</div>
            </Link>
          </div>
        </div>
    )
}

export default Success;