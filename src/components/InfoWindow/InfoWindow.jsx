import React from 'react';
import styles from './InfoWindow.module.css';


const InfoWindow = ({bathroom}) => ( 
    <div className={styles.InfoWindow} >
      <div className={styles.Name}>{bathroom.businessName}</div>
      <div className={styles.Address}> {bathroom.address} </div>
      <div className={styles.Description}> {bathroom.description}</div>
    </div>
  );

 
export default InfoWindow;
