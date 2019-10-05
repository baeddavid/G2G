import React, { useEffect } from 'react';
import mapStyles from './mapStyles';
import styles from './Map.module.css'


const tempBathroomList = [ // add more temp data
  { position: {lat:30.2600, lng:-97.7425}, content: '<div>one</div>' },
  { position: {lat:30.2533, lng:-97.7425}, content: '<div>two</div>' },
  { position: {lat:30.2555, lng:-97.7360}, content: '<div>three</div>' },
  { position: {lat:30.2578, lng:-97.7499}, content: '<div>four</div>' }
]

const VanillaMap = ({location, setMapState}) => {
  let mapDiv = React.createRef();
  
  function setMap() {
    if (location) {
      const map = new window.google.maps.Map(
        mapDiv.current, {
          zoom: 15,
          center: location,
          disableDefaultUI: true,
          styles: mapStyles,
        });
      // Marker showing users position 
      new window.google.maps.Marker({position: location, map: map});
      let infoWindows = [];
      //creates a marker and info window for every bathroom in bathroom query results 
      tempBathroomList.forEach(bathroom => {
        var infoWindow = new window.google.maps.InfoWindow({content: bathroom.content});
        infoWindows.push(infoWindow);
        let marker = new window.google.maps.Marker({
          position: bathroom.position, 
          map: map, 
          icon: './assets/map-pin.png'
        });
        marker.addListener('click', () => {
          closeAllInfoWindows();
          infoWindow.open(map, marker);
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
 
export default VanillaMap;

