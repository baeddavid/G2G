//refactor to vanilla 
// dynamic content string for infoWindow made from bathroom data ===
// contentString = '<div id="content">'+
      // '<div id="siteNotice">'+
      // '</div>'+
      // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      // '<div id="bodyContent">'+
import React, { useState, useEffect} from 'react';
import mapStyles from './mapStyles';
import styles from './Map.module.css'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"; // remove

const tempLatLngList = [ // add more temp data
  {lat:30.2600, lng:-97.7425},
  {lat:30.2533, lng:-97.7425},
  {lat:30.2555, lng:-97.7360},
  {lat:30.2578, lng:-97.7499}
]

function Map(props) {
  const [selectedBathroom, setSelectedBathroom] = useState(null);
  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedBathroom(null);
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap // refactor to vanilla
      defaultZoom={15}
      defaultCenter={{lat:30.2686, lng:-97.7425}}
      defaultClickableIcons={false}
      defaultOptions={{ disableDefaultUI: true,  styles:mapStyles }}
    >
      { tempLatLngList.map((item, idx) => 
          <Marker key={idx} // Markers MUST be attached to the map 
            position={item}
            onClick={() => {
              setSelectedBathroom(item)
            }}
            icon={{url: `/assets/map-pin.png`,scaledSize: new window.google.maps.Size(23, 35)}}
          />
      )}
      {selectedBathroom && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedBathroom(null);
          }}
          position={selectedBathroom}
        >
          <div className={styles.InfoWindow}>
            <h2>it's working!!!!!!</h2>
            <img src="./assets/map-pin.png" alt=""/>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))
export default WrappedMap