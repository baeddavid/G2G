import React from 'react';
import styles from './SearchInput.module.css';

export const SearchInput = (props) => {
  return (
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
  )
}