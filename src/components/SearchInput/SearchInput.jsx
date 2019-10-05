import React, { useEffect, useState } from 'react';
import styles from './SearchInput.module.css';
import { conditionalExpression } from '@babel/types';

export const SearchInput = (props) => {
  const inputRef = React.createRef()
  const [placeData, setPlaceData] = useState({})

  useEffect( () => {
    setTimeout(() => {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current)
      // autocomplete.bindTo('bounds', window.google.maps.Map); // binds autocomplete to Map <-- research
      autocomplete.setFields(['address_components', 'geometry', 'icon', 'name', 'opening_hours', 'place_id', 'types', 'rating', 'photos']);
      autocomplete.addListener('place_changed', function() {
        const place = autocomplete.getPlace(); 
        setPlaceData(place) // make sure state updates
        console.log(placeData)
        console.log(place)
        // console.log(placeData.geometry.location.lat())
        // console.log(placeData.geometry.location.lng())
        if (!place.geometry) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          window.alert("No details available for input: '" + place.name + "'");
          return;
        }
      });
    }, 1000)
  }, [])

  return (
    <div className={styles.inputElement}>
          <div>
            <img src="pink-search.png" alt="searh icon"/>
          </div>
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Where do you gotta go?"
            name="searchInput"
            onChange={props.handleChange}
            value={props.searchText}
          />
        </div>
  )
}