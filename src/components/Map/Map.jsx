import React, { useEffect, useState } from 'react';
import mapStyles from './mapStyles';
import styles from './Map.module.css';


const Map = ({location, bathrooms, placeData, history}) => {
  let mapDiv = React.createRef();

  function setMap() {
    if (location) {
      const map = new window.google.maps.Map(
        mapDiv.current, {
          zoom: 15,
          center: location,
          disableDefaultUI: true,
          clickableIcons: false,
          styles: mapStyles,
        });
      // Marker showing users position <---- add place data
      new window.google.maps.Marker({position: location, map: map});
      let infoWindows = [];
      //creates a marker and info window for every bathroom in bathroom query results 
      bathrooms.forEach(bathroom => {
        var infoWindow = new window.google.maps.InfoWindow({content: bathroom.address });
        infoWindows.push(infoWindow);
        let marker = new window.google.maps.Marker({
          position: {lat: bathroom.lat, lng: bathroom.lng}, 
          map: map, 
          icon: './assets/map-pin.png'
        });
        marker.addListener('click', () => {
          closeAllInfoWindows();
          infoWindow.open(map, marker);
        });
        marker.addListener('dblclick', () => {
          history.push(`/bathroom/${bathroom.id}`)
        });
      });
      function closeAllInfoWindows() {
        infoWindows.forEach(info => info.close());
      }
    }
  }

  useEffect(() => {
    setMap();
  }, []);
  
  return ( 
    <div ref={mapDiv} className={styles.Map}></div>
    );
}
 
export default Map;

