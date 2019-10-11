import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ReviewSuccessPage.module.css';

const ReviewSuccessPage = props => {
  return(
    <div className={styles.ReviewSuccessPage}>
      <h1>Yippee!</h1>
      <div>Thanks for submitting a review</div>
      <Link className={styles.darkBtn} to={`/bathroom/${props.match.params.id}`}>Check out your review</Link>
      <Link className={styles.backToSearch} to={'/'}>Back to search</Link>
    </div>
  )
}

export default ReviewSuccessPage;