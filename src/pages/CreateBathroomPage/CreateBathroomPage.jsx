import React from 'react';
import { Link } from 'react-router-dom';
import IndexForm from '../../components/NewBathroomForm/IndexForm';
import styles from './CreateBathroomPage.module.css';

export const CreateBathroomPage = (props) => {
  return (
    <div className={styles.CreateBathroomPage}>
      <Link to="/">
        <div>Cancel</div>
      </Link>
      <IndexForm { ...props }/>
    </div>  
  )
}