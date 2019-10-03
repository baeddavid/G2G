import React from 'react';
import mapStyles from './mapStyles';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";

const tempLatLngList = [
  {lat:30.2600, lng:-97.7425},
  {lat:30.2533, lng:-97.7425},
  {lat:30.2555, lng:-97.7360},
  {lat:30.2578, lng:-97.7499}
]

function Map(props) {
  return (
    <GoogleMap 
      defaultZoom={15}
      defaultCenter={{lat:30.2686, lng:-97.7425}}
      defaultClickableIcons={false}
      
      defaultOptions={{ disableDefaultUI: true,  styles:mapStyles }}
    >
      { tempLatLngList.map((item, idx) => (
          <Marker key={idx}
            position={item}
            icon={{url: `/assets/map-pin.png`,scaledSize: new window.google.maps.Size(25, 40)}}
          />
        )
      )}
      
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))
export default WrappedMap