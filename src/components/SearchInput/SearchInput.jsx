import React, { useEffect, useState } from 'react';
import styles from './SearchInput.module.css';

export const SearchInput = ({setIsFocused, setMapCenter, setPlaceData}) => {
  const inputRef = React.createRef();

  useEffect( () => {
    if (window.google.maps) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current)
      autocomplete.setFields(['address_components', 'formatted_address', 'geometry', 'icon', 'name', 'opening_hours', 'place_id', 'types', 'rating', 'photos']);
      autocomplete.addListener('place_changed', function() {
        const place = autocomplete.getPlace();
        setPlaceData(place);
        setMapCenter({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
      });
    }
  }, [])


  return (
    <div className={styles.inputElement}>
          <div>
            <img src="pink-search.png" alt="search icon"/>
          </div>
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Where do you gotta go?"
            name="searchInput"
            onFocus={() => setIsFocused(true)}
          />
        </div>
  )
}