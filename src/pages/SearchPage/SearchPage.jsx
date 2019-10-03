import React from 'react';
import styles from './SearchPage.module.css';
import Map from '../../components/Map/Map';
import { Link } from 'react-router-dom';

const SearchPage = (props) => 
  <div className={styles.SearchPage}>
    <Map />
    <div className={styles.inputArea}>
      <div className={styles.inputGroup}>
        <Link to="/createbathroom">
          <div className={styles.addBathroomButton}>+</div>
        </Link>
        <h3>Hi there, {props.userName}</h3>
        <div className={styles.inputElement}>
          <div>
            <img src="pink-search.png" alt="searh icon"/>
          </div>
          <input 
            type="text" 
            placeholder="Where do you gotta go?"
            name="searchInput"
            onChange={props.handleChange}
            value={props.searchText}
          />
        </div>
      </div>
    </div>
  </div>

export default SearchPage;
