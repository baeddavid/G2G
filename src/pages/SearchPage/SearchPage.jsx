import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag'
import styles from './SearchPage.module.css';
import { Link } from 'react-router-dom';
import Map from '../../components/Map/Map'
import { SearchInput } from '../../components/SearchInput/SearchInput';
import LoadingPage from '../LoadingPage/LoadingPage';

const GET_CLOSEST_BATHROOMS = gql`
  query getClosest($currentLat:Float!, $currentLng: Float!) {
    getClosest(currentLat: $currentLat, currentLng: $currentLng) {
      bathrooms {
        businessName
        address
        description
        genderNeutral
        id
        lat
        lng
      }
    }
  }
`

const SearchPage = (props) => {
  console.log('Search Page')
  const [isFocused, setIsFocused] = useState(false);
  const [placeData, setPlaceData] = useState({});

  const { loading, error, data } = useQuery(GET_CLOSEST_BATHROOMS, { fetchPolicy: 'network-only',
    variables: { 
      currentLat: props.mapCenter.lat, 
      currentLng: props.mapCenter.lng
    } 
  });
  
  if (loading) return <LoadingPage/>;
  if (error) return `Error! ${error.message}`;

  return (
    <div className={styles.SearchPage}>
      <div className={styles.MapWrapper}>
        <div className={`${styles.Map} ${isFocused ? styles.isFocused : null}`}>
          <Map 
          location={props.mapCenter}
          bathrooms={data.getClosest.bathrooms}
          placeData={placeData}
          history={props.history}
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
          props.setMapCenter(props.location);
          setIsFocused(false);
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
          <h3>Hi there, {props.name ? props.name : 'guest'}</h3>
          <SearchInput {...props}
            setIsFocused={setIsFocused}
            setMapCenter={props.setMapCenter}
            setPlaceData={setPlaceData}
          />
        </div>
      </div>
    </div>
  )
}
export default SearchPage;
