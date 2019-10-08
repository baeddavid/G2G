import React from 'react';
import styles from './BathroomDescriptionIndex.module.css';

const BathroomDescriptionIndex = ({ nextStep, prevStep, handleChange, form }) => {

  const saveAndContinue = e => {
      e.preventDefault();
      nextStep();
  }

  const back = e => {
      e.preventDefault();
      prevStep();
  }

  return(
    <div className={styles.BathroomDescriptionIndex}>
      <h1>New Bathroom</h1>
      <h3>Last step! Where in the world is this bathroom?</h3>
      <input
          name='businessName'
          placeholder='Enter business name'
          onChange={ handleChange }
          defaultValue={ form.businessName }
      />
      <input
          name='description'
          placeholder='Enter description'
          onChange={ handleChange }
          defaultValue={ form.description }
      />
      <input
          name='address'
          placeholder='Enter address'
          onChange={ handleChange }
          defaultValue={ form.address }
      />
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
        <div className={styles.dot} />
        <div className={`${styles.dot} ${styles.highlight}`} />
        <div className={styles.dot} />
      </div>
    </div>
  )
}

export default BathroomDescriptionIndex;