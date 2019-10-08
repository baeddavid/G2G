import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import { ViewScreen } from './components/ViewScreen/ViewScreen'
import { WelcomePage } from './pages/WelcomePage/WelcomePage';
import './App.css';
import { getCurrentLatLng } from './services/geolocation';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { SignupPage } from './pages/SignupPage/SignupPage';
import userService from './services/userService';
import { CreateBathroomPage } from './pages/CreateBathroomPage/CreateBathroomPage';
import ShowBathroomPage from './pages/BathroomDetailsPage/ShowBathroomPage';
import CreateReviewPage from './pages/CreateReviewPage/CreateReviewPage';
import ReviewSuccessPage from './pages/ReviewSuccessPage/ReviewSuccessPage';

const App = (props) => {

  const [user, setUser] = useState({userId: userService.getUser()});
  const [searchText, setSearchText] = useState('');
  const [location, setLocation] = useState({lat: 30.2313, lng: -97.7267});
  const [newBathroomId, setNewBathroomId] = useState(null);

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
    setUser({userId: 'guest'});
  }

  return ( 
    <div className="App">
      <Switch>
        <Route 
          exact path="/welcome"
          render={(props) => 
            <WelcomePage 
              {...props} 
              handleContinueAsGuest={handleContinueAsGuest}
            />
          } 
        />
        <Route 
          exact path="/login" 
          render={(props) => <LoginPage {...props} setUser={setUser}/>} 
        />
        <Route 
          exact path="/signup"
          render={(props) => <SignupPage {...props} setUser={setUser} />}
        />
        <Route 
          exact path="/createbathroom"
          render={(props) => <CreateBathroomPage {...props} location={location} setNewBathroomId={setNewBathroomId} newBathroomId={newBathroomId}/>
        } />
        <Route
          exact path="/bathroom/:id"
          render={(props) => <ShowBathroomPage {...props} location={location} newBathroomId={newBathroomId} user={user}/>  
        } />
        <Route
          exact path="/bathroom/:id/createreview"
          render={(props) => <CreateReviewPage {...props} newBathroomId={newBathroomId} />
        } />
        <Route
          exact path="/bathroom/:id/reviewsuccess"
          render={(props) => <ReviewSuccessPage {...props} newBathroomId={newBathroomId} />
        } />
        <Route path="/">
          {!user.userId && <Redirect to="/welcome" />}
          <ViewScreen 
            {...props}
            setUser={setUser}
            userName={user.name} 
            searchText={searchText} 
            handleChange={handleChange}
            location={location}
          />
          <Navbar {...props} />
        </Route>
      </Switch>
      
    </div>
  )
}

export default App;
