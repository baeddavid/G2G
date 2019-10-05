import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <div className={styles.Navbar}>
      <Link to="/">
        <div>
          <img src="search-icon@3x.png" alt="search icon"/>
        </div>
        </Link>
      <Link to="/saved">
        <div>
          <img src="saved-icon@3x.png" alt="saved icon"/>
        </div>
      </Link>
      <Link to="/profile">
        <div>
          <img src="profile-icon@3x.png" alt="profile icon"/>
        </div>
      </Link>
      <Link to="/more">
        <div>
          <img src="more-icon@3x.png" alt="more icon"/>
        </div>
        </Link>
    </div>
  )
}

export default Navbar;
