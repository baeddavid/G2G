import React from 'react';
import styles from './SearchPage.module.css';

const SearchPage = (props) => 
  <div className={styles.SearchPage}>
    <div className={styles.mapArea}>Map</div>
    <div className={styles.inputArea}>
      <div className={styles.inputGroup}>
        <div className={styles.addBathroomButton}>+</div>
        <h3>Hi there, {props.userName}</h3>
        <div className={styles.inputElement}>
          <img src="search-icon@3x.png" alt="searh icon"/>
          <input type="text" placeholder="Where do you gotta go?"/>
        </div>
      </div>
    </div>
  </div>

export default SearchPage;
