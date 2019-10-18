import React, { useEffect } from 'react';
import mapStyles from './mapStyles';
import styles from './ShowMap.module.css';

const ShowMap = ({location}) => {
  let mapDiv = React.createRef();



  useEffect(() => {

    function setMap() {
      if (location) {
        const map = new window.google.maps.Map(
          mapDiv.current, {
            zoom: 15,
            center: location,
            disableDefaultUI: true,
            clickableIcons: false,
            styles: mapStyles,
            fullScreenControl: false,
            draggable: false,
      });
      new window.google.maps.Marker({
        position: location,
        map: map, 
        icon:'/assets/map-pin.png'
      });
      }
    }

    setMap();
  }, [location, mapDiv]);
    
  return ( 
    <div ref={mapDiv} className={styles.Map}></div>
    );
}

export default ShowMap;
