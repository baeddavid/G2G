import React from 'react';
import styles from './BathroomTypesIndex.module.css';

const BathroomTypesIndex = ({ form, nextStep, prevStep, setForm }) => {

  const saveAndContinue = () => {
      nextStep();
  }

  const back = () => {
      prevStep();
  }

  return(
    <div className={styles.BathroomTypesIndex}>
      <h1>New Bathroom</h1>
      <h3>Let us know the options available!</h3>
      <div className={styles.cardContainer}>
        <div
          className={`${styles.card} ${form.purchaseRequired ? styles.selected : null}`}
          onClick={ () => setForm({ ...form, purchaseRequired: !form.purchaseRequired })}
        >
          <div className={styles.img}>
            <img src="logo192.png" alt="private business"/>
          </div>
          <div className={styles.text}>
            Purchase Required
          </div>
        </div>
        <div
          className={`${styles.card} ${form.accessibleStall ? styles.selected : null}`}
          onClick={ () => setForm({ ...form, accessibleStall: !form.accessibleStall })}
        >
          <div className={styles.img}>
            <img src="logo192.png" alt="private business"/>
          </div>
          <div className={styles.text}>
            Accessible Stall
          </div>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div
          className={`${styles.card} ${form.singleOccupancy ? styles.selected : null}`}
          onClick={ () => setForm({ ...form, singleOccupancy: !form.singleOccupancy })}
        >
          <div className={styles.img}>
            <img src="logo192.png" alt="private business"/>
          </div>
          <div className={styles.text}>
            Single Occupancy
          </div>
        </div>
        <div
          className={`${styles.card} ${form.changingStations ? styles.selected : null}`}
          onClick={ () => setForm({ ...form, changingStations: !form.changingStations })}
        >
          <div className={styles.img}>
            <img src="logo192.png" alt="private business"/>
          </div>
          <div className={styles.text}>
            Baby Changing
          </div>
        </div>
      </div>
      <div className={styles.backBtnContainer}>
        <div 
          className={styles.backBtn}
          onClick={ back }
        >
            Back
        </div>
      </div>
      <div className={styles.saveAndContinueBtnContainer}>
        <div 
          className={styles.saveAndContinueBtn}
          onClick={ saveAndContinue }
        >
          Save and Continue
        </div>
      </div>
      <div className={styles.dotContainer}>
        <div className={styles.dot} />
        <div className={`${styles.dot} ${styles.highlight}`} />
        <div className={styles.dot} />
      </div>
    </div>
  )
}

export default BathroomTypesIndex;