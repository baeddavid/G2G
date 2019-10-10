import React from 'react';
import styles from './FeaturesScrollbar.module.css';

const FeaturesScrollbar = ({getBathroom}) => {

  const {category, genderNeutral, changingStations, purchaseRequired, accessibleStall, singleOccupancy} = getBathroom;

  return (
    <div className={styles.FeaturesScrollbar}>
      <ul className={`${styles.hs} ${styles.full} ${styles.noScrollbar}`}>
        <li className={styles.card}><img src="/logo192.png" alt=""/>{category}</li>
        {genderNeutral === 'Gender Neutral' && 
          <li className={styles.card}><img src="/logo192.png" alt=""/> Gender Neutral</li>}
        {changingStations && 
          <li className={styles.card}><img src="/logo192.png" alt=""/>Changing Stations</li>}
        {purchaseRequired && 
          <li className={styles.card}><img src="/logo192.png" alt=""/>Purchase Required</li>}
        {accessibleStall && 
          <li className={styles.card}><img src="/logo192.png" alt=""/>Handicap Accessible</li>}
        {singleOccupancy && 
          <li className={styles.card}><img src="/logo192.png" alt=""/>Single Occupancy</li>}
        <li className={styles.end}/>
      </ul>
    </div>
  )
}

export default FeaturesScrollbar;
