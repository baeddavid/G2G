//refactor to vanilla 
// dynamic content string for infoWindow made from bathroom data ===
// contentString = '<div id="content">'+
      // '<div id="siteNotice">'+
      // '</div>'+
      // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      // '<div id="bodyContent">'+
      // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      // 'sandstone rock formation in the southern part of the '+
      // 'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      // 'south west of the nearest large town, Alice Springs; 450&#160;km '+
      // '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      // 'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      // 'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      // 'Aboriginal people of the area. It has many springs, waterholes, '+
      // 'rock caves and ancient paintings. Uluru is listed as a World '+
      // 'Heritage Site.</p>'+
      // '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      // 'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      // '(last visited June 22, 2009).</p>'+
      // '</div>'+
      // '</div>';

// map a new array of objects like this 
/* {
    lat: lat,
    lng: lng,
    marker: function(map, lat, lng) {
      let marker = new window.google.maps.Marker(position: {this.lat, this.lng}, map: map) 
      marker.addListener('click', function() {
          this.infoWindow.open(map, marker);
        });
    return 
      },
    infoWindow: function(contentString) {
      return new window.google.maps.InfoWindow(contentString) 
    },
    openWindow() {
      infoWindow.open()
    }
  } */
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