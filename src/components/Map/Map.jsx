import React, { useState, useEffect} from 'react';
import mapStyles from './mapStyles';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const tempLatLngList = [
  {lat:30.2600, lng:-97.7425},
  {lat:30.2533, lng:-97.7425},
  {lat:30.2555, lng:-97.7360},
  {lat:30.2578, lng:-97.7499}
]

function Map(props) {

  const [selectedBathroom, setSelectedBathroom] = useState(null);
  // useEffect(() => {
  //   const listener = e => {
  //     if (e.key === "Escape") {
  //       setSelectedBathroom(null);
  //     }
  //   };
  //   window.addEventListener("keydown", listener);
  //   return () => {
  //     window.removeEventListener("keydown", listener);
  //   };
  // }, []);

  return (
    <GoogleMap 
      defaultZoom={15}
      defaultCenter={{lat:30.2686, lng:-97.7425}}
      defaultClickableIcons={false}
      defaultOptions={{ disableDefaultUI: true,  styles:mapStyles }}
    >
      { tempLatLngList.map((item, idx) => 
          <Marker key={idx}
            position={item}
            // onClick={() => {
            //   setSelectedBathroom(item);
            // }}
            icon={{url: `/assets/map-pin.png`,scaledSize: new window.google.maps.Size(23, 35)}}
          />
      )}
      {selectedBathroom && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedBathroom(null);
          }}
          position={{
            lat: selectedBathroom.geometry.coordinates[1],
            lng: selectedBathroom.geometry.coordinates[0]
          }}
        >
          <div>
            <h2>{selectedBathroom.properties.NAME}</h2>
            <p>{selectedBathroom.properties.DESCRIPTIO}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))
export default WrappedMap