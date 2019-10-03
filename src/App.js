import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar'
import ViewScreen from './components/ViewScreen/ViewScreen'
import './App.css';
import { getCurrentLatLng } from './services/geolocation';


const App = () => {

  const [user, setUser] = useState({name: 'Ana'});
  const [searchText, setSearchText] = useState('');
  const [location, setLocation] = useState({lat: null, lng: null});

  useEffect(() => {
    (async () => {
      const location = await getCurrentLatLng()
      setLocation(location);
    })()
  }, [])

  const handleChange = (event) => {
    setSearchText(event.target.value);
  }

  return ( 
    <div className="App">
      <ViewScreen 
        userName={user.name} 
        searchText={searchText} 
        handleChange={handleChange}
        location={location}
      />
      <Navbar />
    </div>
  )
}

export default App;
