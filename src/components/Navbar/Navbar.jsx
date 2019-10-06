import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = (props) => {

  const [indicatorLocation, setIndicatorLocation] = useState('search');

  return (
    <div className={styles.Navbar}>
      <div className={styles.indicatorContainer}>
        <div className={`${styles.indicator} ${styles[indicatorLocation]}`} />
      </div>
      <Link to="/" onClick={() => setIndicatorLocation('search')}>
        <div className={styles.imgContainer}>
          <img src="search-icon@3x.png" alt="search icon"/>
        </div>
        </Link>
      <Link to="/saved" onClick={() => setIndicatorLocation('saved')}>
        <div className={styles.imgContainer}>
          <img src="saved-icon@3x.png" alt="saved icon"/>
        </div>
      </Link>
      <Link to="/profile" onClick={() => setIndicatorLocation('profile')}>
        <div className={styles.imgContainer}>
          <img src="profile-icon@3x.png" alt="profile icon"/>
        </div>
      </Link>
      <Link to="/more">
        <div className={styles.imgContainer} onClick={() => setIndicatorLocation('more')}>
          <img src="more-icon@3x.png" alt="more icon"/>
        </div>
        </Link>
    </div>
  )
}

export default withRouter(Navbar);
