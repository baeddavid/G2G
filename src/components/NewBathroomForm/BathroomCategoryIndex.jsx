import React from 'react';
import styles from './BathroomCategoryIndex.module.css';

const BathroomCategoryIndex = ({ form, nextStep, setForm }) => {

  const saveAndContinue = () => {
      nextStep();
  }

  return (
    <div className={styles.BathroomCategoryIndex}>
      <h1>New Bathroom</h1>
      <p>Thanks for being a contributing member of the G2G community! By providing this information, you’re helping us keep our database updated and useful.</p>
      {/* Should we say swipe? Or tap arrow button */}
      <h3>Select relevant answers. Then swipe</h3>
      <p>Where is this bathroom?</p>
      <div className={styles.cardContainer}>
        <div 
          className={`${styles.card} ${form.category === 'Private Business' ? styles.selected : null}`}
          onClick={ () => setForm({ ...form, category: 'Private Business' })}
        >
          <div className={styles.img}>
            <img src="logo192.png" alt="private business"/>
          </div>
          <div className={styles.text}>
            Private Business
          </div>
        </div>
        <div 
          className={`${styles.card} ${styles.middle} ${form.category === 'Indoor Public' ? styles.selected : null}`}
          onClick={ () => setForm({ ...form, category: 'Indoor Public' })}
        >
          <div className={styles.img}>
            <img src="logo192.png" alt="private business"/>
          </div>
          <div className={styles.text}>
            Indoor Public
          </div>
        </div>
        <div 
          className={`${styles.card} ${form.category === 'Outdoor Public' ? styles.selected : null}`}
          onClick={ () => setForm({ ...form, category: 'Outdoor Public'})}
        >
          <div className={styles.img}>
            <img src="logo192.png" alt="private business"/>
          </div>
          <div className={styles.text}>
            Outdoor Public
          </div>
        </div>
      </div>
      <p>Which bathroom did you use?</p>
      <div className={styles.cardContainer}>
        <div
          className={`${styles.card} ${form.genderNeutral === 'Women\'s' ? styles.selected : null}`}
          onClick={ () => setForm({ ...form, genderNeutral: 'Women\'s' })}
        >
          <div className={styles.img}>
            <img src="logo192.png" alt="private business"/>
          </div>
          <div className={styles.text}>
            Women's
          </div>
        </div>
        <div
          className={`${styles.card} ${styles.middle} ${form.genderNeutral === 'Gender Neutral' ? styles.selected : null}`}
          onClick={ () => setForm({ ...form, genderNeutral: 'Gender Neutral' })}
        >
          <div className={styles.img}>
            <img src="logo192.png" alt="private business"/>
          </div>
          <div className={styles.text}>
            Gender Neutral
          </div>
        </div>
        <div
          className={`${styles.card} ${form.genderNeutral === 'Men\'s' ? styles.selected : null}`}
          onClick={ () => setForm({ ...form, genderNeutral: 'Men\'s'})}
        >
          <div className={styles.img}>
            <img src="logo192.png" alt="private business"/>
          </div>
          <div className={styles.text}>
            Men's
          </div>
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
        <div className={`${styles.dot} ${styles.highlight}`} />
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </div>
  )
}

export default BathroomCategoryIndex;
