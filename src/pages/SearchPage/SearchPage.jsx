import React, { useState, useEffect } from 'react';
import { useQuery, Query } from 'react-apollo';
import gql from 'graphql-tag'
import styles from './SearchPage.module.css';
import { Link } from 'react-router-dom';
import Map from '../../components/Map/Map'
import { SearchInput } from '../../components/SearchInput/SearchInput';


const SearchPage = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [mapCenter, setMapCenter] = useState(props.location)

  const GET_CLOSEST_BATHROOMS = gql`
    query getClosest($currentLat:Float!, $currentLng: Float!) {
      getClosest(currentLat: $currentLat, currentLng: $currentLng) {
        bathrooms {
          address
          id
          lat
          lng
        }
      }
    }
  ` 

  const { loading, error, data } = useQuery(GET_CLOSEST_BATHROOMS, { fetchPolicy: 'no-cache',
    variables: { 
      currentLat: mapCenter.lat, 
      currentLng: mapCenter.lng
    } 
  });
    
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className={styles.SearchPage}>
      <div className={styles.MapWrapper}>
        <div className={`${styles.Map} ${isFocused ? styles.isFocused : null}`}>
          <Map 
          location={mapCenter}
          bathrooms={data.getClosest.bathrooms}
          />
        </div>
      </div>
      <div 
        className={`${styles.cancelButton} ${isFocused ? styles.isFocused : null}`}
        onClick={() => setIsFocused(false)}
      >
          Cancel
      </div>
      <div 
        className={`${styles.useCurrentLocationButton} ${isFocused ? styles.isFocused : null}`}
        onClick={() => {
          setMapCenter(props.location)
      }}
      >
          Use current location
      </div>
      <div className={`${styles.inputArea} ${isFocused ? styles.isFocused : null}`}>
        <div className={styles.inputGroup}>
          <Link to="/createbathroom">
            <div className={`${styles.addBathroomButton} ${isFocused ? styles.isFocused : null}`}>
              <div className={styles.vLine} />
              <div className={styles.hLine} />
            </div>
          </Link>
          <h3>Hi there, {props.userName}</h3>
          <SearchInput {...props}
          setIsFocused={setIsFocused}
          setMapCenter={setMapCenter}
          />
        </div>
      </div>
    </div>
  )
}
export default SearchPage;
