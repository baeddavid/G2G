import React from 'react';
import styles from './SearchPage.module.css';
import Map from '../../components/Map/Map';
import { Link } from 'react-router-dom';
import WrappedMap from '../../components/Map/Map';

const googleMapsURL = `https://maps.googleapis.com/maps/api/js?&key=`
const googleAPIKey =  process.env.REACT_APP_GOOGLE_MAPS_API_KEY


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
