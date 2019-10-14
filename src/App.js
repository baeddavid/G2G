import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import { ViewScreen } from './components/ViewScreen/ViewScreen'
import { WelcomePage } from './pages/WelcomePage/WelcomePage';
import { getCurrentLatLng } from './services/geolocation';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { SignupPage } from './pages/SignupPage/SignupPage';
import userService from './services/userService';
import { CreateBathroomPage } from './pages/CreateBathroomPage/CreateBathroomPage';
// import ShowBathroomPage from './pages/ShowBathroomPage/ShowBathroomPage';
import CreateReviewPage from './pages/CreateReviewPage/CreateReviewPage';
import ReviewSuccessPage from './pages/ReviewSuccessPage/ReviewSuccessPage';
import DeleteConfirmationPage from './pages/DeleteConfirmationPage/DeleteConfirmationPage';
import EditBathroomPage from './pages/EditBathroomPage/EditBathroomPage';
// import AccessDeniedPage from './pages/AccessDeniedPage/AccessDeniedPage';
import { ThemeProvider } from 'styled-components';

const App = (props) => {

  const [user, setUser] = useState({userId: userService.getUser()});
  const [location, setLocation] = useState(null);
  const [newBathroomId, setNewBathroomId] = useState(null);
  const [mapCenter, setMapCenter] = useState(null);

  useEffect(() => {
    (async () => {
      const location = await getCurrentLatLng()
      setLocation(location);
      setMapCenter(location);
    })()
  }, [])

  const handleContinueAsGuest = () => {
    setUser({userId: 'guest'});
  }

  const theme = {
    primary: '#FAB1A0',
    primaryDark: '#E19C8C',
    secondary: '#83DADF',
    secondaryDark: '#51989C',
    succes: '#96C495',
    error: '#DD7979',
    warning: '#EACA77',
    dark: '#2C2C2C',
    medium: '#A5A5A7',
    light: '#FFFFFF',
  }

  return ( 
    <ThemeProvider theme={theme}>
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
          render={(props) => 
            user.userId !== 'guest' ?
            <CreateBathroomPage 
            {...props}
            location={mapCenter === location ? location : mapCenter}
            setNewBathroomId={setNewBathroomId} 
            newBathroomId={newBathroomId}
            /> :
            <Redirect to="/saved" />
        } />
        {/* <Route
          exact path="/bathroom/:id"
          render={(props) => <ShowBathroomPage {...props} location={location} newBathroomId={newBathroomId} user={user}/>  
        } /> */}
        <Route
          exact path="/bathroom/:id/createreview"
          render={(props) => 
          user.userId !== 'guest' ?
          <CreateReviewPage {...props} newBathroomId={newBathroomId} /> :
          <Redirect to="/saved" />
        } />
        <Route
          exact path="/bathroom/:id/reviewsuccess"
          render={(props) => <ReviewSuccessPage {...props} newBathroomId={newBathroomId} />
        } />
        <Route
          exact path="/bathroom/:id/delete"
          render={(props) => <DeleteConfirmationPage {...props} />
        } />
        <Route
          exact path="/bathroom/:id/edit"
          render={(props) => <EditBathroomPage {...props} location={location} user={user}/>
        } />
        <Route path="/">
          {!user.userId && <Redirect to="/welcome" />}
          <ViewScreen 
            {...props}
            setUser={setUser}
            userName={user.name}
            location={location}
            user={user}
            setMapCenter={setMapCenter}
            mapCenter={mapCenter}
          />
          <Navbar {...props} />
        </Route>
      </Switch>
    </ThemeProvider>
  )
}

export default App;
