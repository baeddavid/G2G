import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import { ViewScreen } from './components/ViewScreen/ViewScreen'
import { WelcomePage } from './pages/WelcomePage/WelcomePage';
import { getCurrentLatLng } from './services/geolocation';
import LoginPage from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage/SignupPage';
import userService from './services/userService';
import { CreateBathroomPage } from './pages/CreateBathroomPage/CreateBathroomPage';
import CreateReviewPage from './pages/CreateReviewPage/CreateReviewPage';
import ReviewSuccessPage from './pages/ReviewSuccessPage/ReviewSuccessPage';
import DeleteConfirmationPage from './pages/DeleteConfirmationPage/DeleteConfirmationPage';
import EditBathroomPage from './pages/EditBathroomPage/EditBathroomPage';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { colors } from './styles';

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
      // Save to fav should print one additional time 
      // Unless it only scaps the subtree not the actual tree
    })()
  }, [])

  const handleContinueAsGuest = () => {
    setUser({userId: 'guest'});
  }

  const theme = {
    ...colors,
  }
  return ( 
    <ThemeProvider theme={theme}>
      <Normalize />
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
