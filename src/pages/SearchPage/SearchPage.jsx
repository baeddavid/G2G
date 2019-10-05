import React, { useState } from 'react';
import styles from './SearchPage.module.css';
import { Link } from 'react-router-dom';
// import WrappedMap from '../../components/Map/Map';
import VanillaMap from '../../components/Map/VanillaMap'
import { SearchInput } from '../../components/SearchInput/SearchInput';

// const googleMapsURL = `https://maps.googleapis.com/maps/api/js?libraries=places&key=`
// const googleAPIKey =  process.env.REACT_APP_GOOGLE_MAPS_API_KEY


const SearchPage = (props) => {
  const [mapState, setMapState] = useState({})
  return (
  <div className={styles.SearchPage}>
    <div className={styles.MapWrapper}>
      <div className={styles.Map}>
        <VanillaMap setMapState={setMapState} location={props.location}/>
        {/* <WrappedMap
          googleMapURL={`${googleMapsURL + googleAPIKey}`}
          loadingElement={ <div style={{ height: '100%'}}/> }
          containerElement={ <div className='container' style={{ height: '100%'}}/> }
          mapElement={ <div className='map' style={{ height: '100%'}}/> }
        /> */}
      </div>
    </div>
    <div className={styles.inputArea}>
      <div className={styles.inputGroup}>
        <Link to="/createbathroom">
          <div className={styles.addBathroomButton}>+</div>
        </Link>
        <h3>Hi there, {props.userName}</h3>
        <SearchInput {...props}
        mapState={mapState}/>
      </div>
    </div>
  </div>
  )
}
export default SearchPage;
