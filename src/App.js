import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import ViewScreen from './components/ViewScreen/ViewScreen'
import { WelcomePage } from './pages/WelcomePage/WelcomePage';
import './App.css';
import { getCurrentLatLng } from './services/geolocation';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { SignupPage } from './pages/SignupPage/SignupPage';


const App = () => {

  const [user, setUser] = useState({name: null, username: null});
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

  const handleContinueAsGuest = () => {
    setUser({name: ' '});
  }

  return ( 
    <div className="App">
      <Switch>
        <Route path="/welcome" exact>
          <WelcomePage 
            handleContinueAsGuest={handleContinueAsGuest}
          />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/signup" exact>
          <SignupPage />
        </Route>
        <Route path="/">
          {!user.name && <Redirect to="/welcome" />}
          <ViewScreen 
            userName={user.name} 
            searchText={searchText} 
            handleChange={handleChange}
            location={location}
          />
          <Navbar />
        </Route>
      </Switch>
      
    </div>
  )
}

export default App;
