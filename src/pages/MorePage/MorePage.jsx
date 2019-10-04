import React from 'react';
import styles from './MorePage.module.css';

const MorePage = (props) =>
  <div className={styles.MorePage}>
    <div className={`${styles.row} ${styles.head}`}>
      <h1>More</h1>
    </div>
    <div className={styles.hr}/>
    <div className={styles.row}>
      <div className={styles.square}/>
      Bathroom Preferences
    </div>
    <div className={styles.hr}/>
    <div className={styles.row}>
      <div className={styles.square}/>
      Account Settings
    </div>
    <div className={styles.hr}/>
    <div className={styles.row}>
      <div className={styles.square}/>
      Support Services
    </div>
    <div className={styles.hr}/>
  </div>

export default MorePage;

