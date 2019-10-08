import React from 'react';
import styles from './SavedPage.module.css';

const SavedPage = (props) =>
  <div className={styles.SavedPage}>
    <div className={`${styles.row} ${styles.head}`}>
      <h1>Saved</h1>
      <div className={styles.filterContainer}>
        <img src="filter-icon.png" alt="filter"/>
      </div>
    </div>
    <div className={styles.hr}/>
    <div className={styles.row}>
      <div className={styles.square}/>
    </div>
    <div className={styles.hr}/>
    <div className={styles.row}>
      <div className={styles.square}/>
    </div>
    <div className={styles.hr}/>
    <div className={styles.row}>
      <div className={styles.square}/>
    </div>
    <div className={styles.hr}/>
    <div className={styles.row}>
      <div className={styles.square}/>
    </div>
    <div className={styles.hr}/>
  </div>

export default SavedPage;
