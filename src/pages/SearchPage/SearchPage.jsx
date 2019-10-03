import React from 'react';
import styles from './SearchPage.module.css';
import WrappedMap from '../../components/Map/Map';

const googleMapsURL = `https://maps.googleapis.com/maps/api/js?&key=`
const googleAPIKey =  'AIzaSyA7X9opLTmxQJT4SEvtea90bXDqm7OUZ2s'   //'AIzaSyAkFzpnSdVoZTo-KSm-i4VvQWNWAPe5gDc'


const SearchPage = (props) => 
  <div className={styles.SearchPage}>
    <div className="map-wrapper" style={{height: "100vh", width: "100vw"}}>
      <WrappedMap
        googleMapURL={`${googleMapsURL + googleAPIKey}`}
        loadingElement={ <div style={{ height: '100%'}}/> }
        containerElement={ <div className='container' style={{ height: '100%'}}/> }
        mapElement={ <div className='map' style={{ height: '100%'}}/> }
      />
    </div>
    <div className={styles.inputArea}>
      <div className={styles.inputGroup}>
        <div className={styles.addBathroomButton}>+</div>
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
